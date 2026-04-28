export type AdminId = string;
export type AdminIsoDate = string;
export type AdminIsoDateTime = string;
export type AdminCurrency = "GBP";

export type AdminEntityKind =
  | "lead"
  | "student"
  | "guardian"
  | "billing_account"
  | "enrolment"
  | "lesson"
  | "attendance"
  | "invoice"
  | "payment"
  | "note";

export type LeadStatus =
  | "new"
  | "contacted"
  | "trial_scheduled"
  | "trial_completed"
  | "converted"
  | "closed";

export type LeadCloseReason =
  | "duplicate"
  | "not_a_fit"
  | "not_interested"
  | "no_response"
  | "spam"
  | "other";

export type StudentLifecycleStatus =
  | "active"
  | "paused"
  | "alumni"
  | "archived";

export type GuardianRelationship =
  | "parent"
  | "guardian"
  | "self"
  | "relative"
  | "other";

export type ContactPreference = "email" | "phone" | "either";

export type EnrolmentStatus =
  | "planned"
  | "active"
  | "paused"
  | "completed"
  | "withdrawn";

export type LessonStatus =
  | "scheduled"
  | "completed"
  | "cancelled"
  | "rescheduled";

export type AttendanceStatus =
  | "scheduled"
  | "present"
  | "absent_excused"
  | "absent_unexcused"
  | "cancelled";

export type InvoiceStatus =
  | "draft"
  | "issued"
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

export type PaymentStatus =
  | "recorded"
  | "reconciled"
  | "refunded"
  | "void";

export type NoteVisibility = "admin_only" | "owner_only";

export type NoteSubject = {
  id: AdminId;
  kind: AdminEntityKind;
};

export type AdminAuditMetadata = {
  createdAt: AdminIsoDateTime;
  createdBy: AdminId | null;
  updatedAt: AdminIsoDateTime;
  updatedBy: AdminId | null;
};

export type AdminPrivacyMetadata = {
  retentionReviewAt: AdminIsoDate | null;
  source: "admin_entry" | "trial_registration" | "approved_import";
};

export type AdminNote = AdminAuditMetadata &
  AdminPrivacyMetadata & {
    id: AdminId;
    subject: NoteSubject;
    body: string;
    visibility: NoteVisibility;
    pinned: boolean;
  };

export type AdminLead = AdminAuditMetadata &
  AdminPrivacyMetadata & {
    id: AdminId;
    status: LeadStatus;
    studentDisplayName: string;
    guardianName: string | null;
    email: string;
    phone: string | null;
    learnerAge: string | null;
    courseInterest: string;
    preferredContact: ContactPreference;
    sourcePath: string | null;
    message: string | null;
    trialLessonId: AdminId | null;
    convertedStudentId: AdminId | null;
    closedReason: LeadCloseReason | null;
    closedAt: AdminIsoDateTime | null;
  };

export type AdminTrialRegistrationLead = AdminLead & {
  consentToContact: boolean | null;
  locale: "en" | "ru" | "unknown";
};

export type AdminGuardian = AdminAuditMetadata &
  AdminPrivacyMetadata & {
    id: AdminId;
    displayName: string;
    relationship: GuardianRelationship;
    email: string | null;
    phone: string | null;
    preferredContact: ContactPreference;
    billingContact: boolean;
    emergencyContact: boolean;
  };

export type AdminStudentGuardianLink = AdminAuditMetadata & {
  id: AdminId;
  studentId: AdminId;
  guardianId: AdminId;
  primaryContact: boolean;
  billingContact: boolean;
};

export type AdminBillingAccount = AdminAuditMetadata &
  AdminPrivacyMetadata & {
    id: AdminId;
    displayName: string;
    billingGuardianId: AdminId | null;
    studentIds: AdminId[];
    defaultCurrency: AdminCurrency;
    invoiceEmail: string | null;
    invoicePhone: string | null;
    internalMemo: string | null;
  };

export type AdminStudent = AdminAuditMetadata &
  AdminPrivacyMetadata & {
    id: AdminId;
    displayName: string;
    status: StudentLifecycleStatus;
    primaryGuardianId: AdminId | null;
    convertedFromLeadId: AdminId | null;
    dateOfBirth: AdminIsoDate | null;
    yearGroup: string | null;
    notesSummary: string | null;
  };

export type AdminStudentSummary = AdminStudent & {
  primaryContactName: string | null;
  primaryContactEmail: string | null;
  primaryContactPhone: string | null;
};

export type AdminEnrolment = AdminAuditMetadata & {
  id: AdminId;
  studentId: AdminId;
  courseLabel: string;
  cohortLabel: string | null;
  tutorLabel: string | null;
  startDate: AdminIsoDate | null;
  endDate: AdminIsoDate | null;
  status: EnrolmentStatus;
  billingAccountId: AdminId | null;
};

export type AdminClassEnrollment = AdminEnrolment;

export type AdminLesson = AdminAuditMetadata & {
  id: AdminId;
  enrolmentId: AdminId | null;
  courseLabel: string;
  cohortLabel: string | null;
  lessonDate: AdminIsoDate;
  startsAt: AdminIsoDateTime | null;
  endsAt: AdminIsoDateTime | null;
  status: LessonStatus;
  deliveryMode: "online" | "in_person" | "hybrid" | "unknown";
  locationLabel: string | null;
};

export type AdminAttendanceRecord = AdminAuditMetadata & {
  id: AdminId;
  studentId: AdminId;
  enrolmentId: AdminId;
  lessonId: AdminId;
  status: AttendanceStatus;
  recordedBy: AdminId | null;
  recordedAt: AdminIsoDateTime | null;
  noteId: AdminId | null;
};

export type AdminInvoiceLineItem = {
  id: AdminId;
  description: string;
  quantity: number;
  unitAmountMinor: number;
  currency: AdminCurrency;
  enrolmentId: AdminId | null;
  lessonId: AdminId | null;
  taxable: false;
};

export type AdminInvoiceTotals = {
  subtotalMinor: number;
  discountMinor: number;
  taxMinor: 0;
  totalMinor: number;
  paidMinor: number;
  balanceDueMinor: number;
  currency: AdminCurrency;
};

export type AdminInvoice = AdminAuditMetadata & {
  id: AdminId;
  studentId: AdminId;
  billingGuardianId: AdminId | null;
  invoiceNumber: string;
  status: InvoiceStatus;
  issuedAt: AdminIsoDateTime | null;
  dueAt: AdminIsoDate | null;
  sentAt: AdminIsoDateTime | null;
  paidAt: AdminIsoDateTime | null;
  voidedAt: AdminIsoDateTime | null;
  lineItems: AdminInvoiceLineItem[];
  internalMemo: string | null;
};

export type AdminPaymentRecord = AdminAuditMetadata & {
  id: AdminId;
  invoiceId: AdminId;
  amountMinor: number;
  currency: AdminCurrency;
  method: PaymentMethod;
  status: PaymentStatus;
  receivedAt: AdminIsoDateTime;
  reconciledAt: AdminIsoDateTime | null;
  externalReference: string | null;
  internalMemo: string | null;
};

export type LeadConversionDraft = {
  leadId: AdminId;
  student: Pick<
    AdminStudent,
    "convertedFromLeadId" | "displayName" | "status"
  >;
  guardian: Pick<
    AdminGuardian,
    | "billingContact"
    | "displayName"
    | "email"
    | "phone"
    | "preferredContact"
    | "relationship"
  > | null;
  firstEnrolment: Pick<
    AdminEnrolment,
    | "cohortLabel"
    | "courseLabel"
    | "startDate"
    | "status"
    | "studentId"
    | "tutorLabel"
  > | null;
};
