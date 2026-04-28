export type AdminId = string;

export type StudentLifecycleStatus =
  | "prospect"
  | "active"
  | "paused"
  | "alumni"
  | "archived";

export type AttendanceStatus =
  | "scheduled"
  | "present"
  | "absent_excused"
  | "absent_unexcused"
  | "cancelled";

export type InvoiceStatus =
  | "draft"
  | "sent"
  | "partially_paid"
  | "paid"
  | "void"
  | "overdue";

export type PaymentMethod =
  | "bank_transfer"
  | "card"
  | "cash"
  | "external"
  | "unknown";

export type AdminAuditMetadata = {
  createdAt: string;
  createdBy: AdminId | null;
  updatedAt: string;
  updatedBy: AdminId | null;
};

export type AdminStudentSummary = AdminAuditMetadata & {
  id: AdminId;
  displayName: string;
  status: StudentLifecycleStatus;
  primaryContactName: string | null;
  primaryContactEmail: string | null;
  primaryContactPhone: string | null;
  notesSummary: string | null;
};

export type AdminClassEnrollment = AdminAuditMetadata & {
  id: AdminId;
  studentId: AdminId;
  courseLabel: string;
  cohortLabel: string | null;
  startDate: string | null;
  endDate: string | null;
  status: StudentLifecycleStatus;
};

export type AdminAttendanceRecord = AdminAuditMetadata & {
  id: AdminId;
  enrollmentId: AdminId;
  lessonDate: string;
  status: AttendanceStatus;
  recordedBy: AdminId | null;
  note: string | null;
};

export type AdminInvoiceLineItem = {
  id: AdminId;
  description: string;
  quantity: number;
  unitAmountMinor: number;
  currency: "GBP";
};

export type AdminInvoice = AdminAuditMetadata & {
  id: AdminId;
  studentId: AdminId;
  invoiceNumber: string;
  status: InvoiceStatus;
  issuedAt: string | null;
  dueAt: string | null;
  sentAt: string | null;
  paidAt: string | null;
  lineItems: AdminInvoiceLineItem[];
};

export type AdminPaymentRecord = AdminAuditMetadata & {
  id: AdminId;
  invoiceId: AdminId;
  amountMinor: number;
  currency: "GBP";
  method: PaymentMethod;
  receivedAt: string;
  externalReference: string | null;
};
