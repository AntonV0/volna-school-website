# Admin Operations Model Roadmap

This document is public-safe. It describes planned operating concepts for the
admin system without private spreadsheet rows, invoices, student records, or
unreviewed source material.

## Model Boundary

The admin system should replace the operational spreadsheet with real business
objects, not a column-for-column clone.

See `docs/admin-operations-schema.md` for the current public-safe schema draft.

- Trial registrations are leads until they are reviewed and converted.
- Students and guardians are separate records because one guardian can be linked
  to more than one student and billing responsibility can change.
- Billing accounts group the students and billing contact that should appear on
  internal invoices.
- Enrolments connect students to a course, cohort, tutor, and billing context.
- Lessons describe scheduled teaching events.
- Attendance records connect one student enrolment to one lesson.
- Invoices are internal accounting documents generated from enrolments or
  billable attendance.
- Payments are manual records against invoices. There is no payment processing
  or Stripe integration in this phase.
- Notes are attached to explicit subjects and need retention rules before broad
  use.

## Private Portal Boundary

Private operations should be split by role:

- Admins use `/admin` for full operational work, including invoice creation and
  most management tasks.
- Teachers use `/teacher` for limited teaching workflows once exact permissions
  are approved.
- Students use `/student` for future homework, learning materials, or approved
  online lesson links if that scope is confirmed.

See `docs/private-portal-access-model.md` for the current public-safe role and
RLS direction.

## Invoice Creator Readiness

The first invoice area at `/admin/invoices` is a protected workflow shell only.
It should not create, send, export, or persist real invoice records until the
business confirms:

- invoice number format and reservation rules
- whether draft invoices can ever be deleted or only voided
- who reviews invoices before they are issued
- which email provider sends invoices
- how bank transfer, cash, card, or external payments are reconciled
- which private spreadsheet fields are approved for import

## Lead To Student Workflow

1. Capture a trial registration as an `AdminLead`.
2. Review the lead for duplicates, spam, consent, and suitability.
3. Schedule or complete a trial lesson when appropriate.
4. Convert the lead by creating a student, guardian, student-guardian link, and
   optional first enrolment.
5. Keep the converted lead as an audit source with retention review metadata.

The first student records page at `/admin/students` is a protected placeholder
shell. It should remain model-first until import scope, record retention,
guardian relationship rules, and billing-account links are approved. It must not
display placeholder people, copied spreadsheet rows, or unreviewed private
source material.

## Trial Registration Inbox Readiness

The first admin inbox should stay narrow until access control and retention rules
are confirmed.

- Only authenticated, owner-approved admins should view submitted leads.
- Logged-out visitors should never see the admin shell, lead counts, names, or
  error details.
- The inbox may show operational status, selected course interest, preferred
  contact method, and timestamps, but should not duplicate private notes into
  analytics, logs, screenshots, or public docs.
- Manual review can mark a trial lead as `duplicate` without adding private
  note text or exposing the existence of another matching lead to the visitor.
- Empty, unavailable, and missing-configuration states should be public-safe and
  should not include test people or copied spreadsheet rows.
- Admin routes should remain `noindex, nofollow`.
- Before live use, document who owns the server-only `ADMIN_ALLOWED_EMAILS`
  allowlist and how access is removed when a staff member no longer needs it.

## Attendance Workflow

Attendance should be recorded against a lesson and enrolment, not directly on a
free-text course row. This keeps future billing and lesson history traceable.

- `present` and `absent_unexcused` are billable by default.
- `absent_excused`, `cancelled`, and `scheduled` need owner policy decisions
  before automated invoice generation.
- Attendance notes should link to `AdminNote` rather than storing long private
  text in the attendance row.

The first attendance page at `/admin/attendance` is a protected placeholder
shell. It documents the lesson/enrolment boundary and billable-status policy but
does not create, edit, import, export, or persist attendance records.

## Internal Invoice Workflow

Invoice generation is internal-first.

1. Select confirmed enrolments or billable attendance records.
2. Create draft invoice line items with GBP minor units.
3. Review the draft internally.
4. Issue or send the invoice outside this model.
5. Record bank transfer, cash, card, or external payments manually.
6. Reconcile payments before marking invoices as paid.

Out of scope for this phase:

- Stripe Checkout or Payment Links
- automatic payment collection
- card storage
- customer portal features
- importing private spreadsheet data into the public repository

## Decisions Still Needed

- Which admin roles can view billing, notes, and import tools.
- Exact teacher permissions for class lists, homework, attendance, and notes.
- Whether the student-facing route should remain `/student` or become a broader
  `/portal`.
- Whether Microsoft Teams or Zoom links should be surfaced inside the website.
- Which owner-approved emails should be present in `ADMIN_ALLOWED_EMAILS` for
  launch.
- How invoice numbers should be generated and reserved.
- Which provider and template should be used for invoice email sending.
- Whether invoice drafts can be deleted or only voided.
- Whether excused absences are ever billable.
- How old leads, notes, and registration submissions should be retained or
  deleted.
- Which reviewed spreadsheet fields should map into the first private import.
