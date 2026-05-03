import type {
  AdminCurrency,
  AdminInvoice,
  AdminInvoiceLineItem,
  AdminInvoiceTotals,
  AdminPaymentRecord,
  AttendanceStatus,
  InvoiceStatus,
  LeadStatus,
} from "@/types/admin";

const invoiceWorkflow: Record<InvoiceStatus, readonly InvoiceStatus[]> = {
  draft: ["issued", "void"],
  issued: ["sent", "partially_paid", "paid", "overdue", "void"],
  sent: ["partially_paid", "paid", "overdue", "void"],
  partially_paid: ["paid", "overdue", "void"],
  paid: ["void"],
  void: [],
  overdue: ["partially_paid", "paid", "void"],
};

const leadWorkflow: Record<LeadStatus, readonly LeadStatus[]> = {
  new: ["contacted", "trial_scheduled", "duplicate", "closed"],
  contacted: [
    "trial_scheduled",
    "trial_completed",
    "converted",
    "duplicate",
    "closed",
  ],
  trial_scheduled: ["trial_completed", "converted", "duplicate", "closed"],
  trial_completed: ["converted", "duplicate", "closed"],
  converted: [],
  duplicate: [],
  closed: [],
};

export function getInvoiceLineSubtotalMinor(item: AdminInvoiceLineItem) {
  return item.quantity * item.unitAmountMinor;
}

export function getInvoiceSubtotalMinor(
  lineItems: readonly AdminInvoiceLineItem[],
) {
  return lineItems.reduce(
    (total, item) => total + getInvoiceLineSubtotalMinor(item),
    0,
  );
}

export function calculateInvoiceTotals(
  invoice: Pick<AdminInvoice, "lineItems">,
  payments: readonly Pick<AdminPaymentRecord, "amountMinor" | "currency" | "status">[],
  currency: AdminCurrency = "GBP",
): AdminInvoiceTotals {
  const subtotalMinor = getInvoiceSubtotalMinor(invoice.lineItems);
  const paidMinor = payments
    .filter((payment) => payment.currency === currency && payment.status !== "void")
    .reduce((total, payment) => total + payment.amountMinor, 0);
  const totalMinor = subtotalMinor;

  return {
    balanceDueMinor: Math.max(totalMinor - paidMinor, 0),
    currency,
    discountMinor: 0,
    paidMinor,
    subtotalMinor,
    taxMinor: 0,
    totalMinor,
  };
}

export function deriveInvoiceStatus(
  invoice: Pick<AdminInvoice, "dueAt" | "lineItems" | "status" | "voidedAt">,
  payments: readonly Pick<AdminPaymentRecord, "amountMinor" | "currency" | "status">[],
  today: string,
): InvoiceStatus {
  if (invoice.status === "void" || invoice.voidedAt) {
    return "void";
  }

  if (invoice.status === "draft") {
    return "draft";
  }

  const totals = calculateInvoiceTotals(invoice, payments);

  if (totals.totalMinor > 0 && totals.balanceDueMinor === 0) {
    return "paid";
  }

  if (totals.paidMinor > 0) {
    return "partially_paid";
  }

  if (invoice.dueAt && invoice.dueAt < today) {
    return "overdue";
  }

  return invoice.status === "sent" ? "sent" : "issued";
}

export function canTransitionInvoiceStatus(
  from: InvoiceStatus,
  to: InvoiceStatus,
) {
  return invoiceWorkflow[from].includes(to);
}

export function canTransitionLeadStatus(from: LeadStatus, to: LeadStatus) {
  return leadWorkflow[from].includes(to);
}

export function isBillableAttendance(status: AttendanceStatus) {
  return status === "present" || status === "absent_unexcused";
}

export function getLeadConversionChecklist() {
  return [
    "Confirm the trial registration is not a duplicate lead.",
    "Create or link the guardian record before creating a billing account.",
    "Create the student record with a reference back to the converted lead.",
    "Create an initial enrolment only after the course or cohort is confirmed.",
    "Keep the original lead read-only for audit and retention review.",
  ] as const;
}

export function getInternalInvoiceChecklist() {
  return [
    "Build line items from confirmed enrolments or billable attendance.",
    "Review totals internally before issuing the invoice.",
    "Record payments manually against the invoice.",
    "Reconcile payment records before marking the invoice fully paid.",
    "Do not create payment links or processor charges from this model.",
  ] as const;
}
