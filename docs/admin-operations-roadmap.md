# Admin Operations Model Roadmap

This document is public-safe. It describes planned operating concepts for the
admin system without private spreadsheet rows, invoices, student records, or
unreviewed source material.

## Model Boundary

The admin system should replace the operational spreadsheet with real business
objects, not a column-for-column clone.

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

## Lead To Student Workflow

1. Capture a trial registration as an `AdminLead`.
2. Review the lead for duplicates, spam, consent, and suitability.
3. Schedule or complete a trial lesson when appropriate.
4. Convert the lead by creating a student, guardian, student-guardian link, and
   optional first enrolment.
5. Keep the converted lead as an audit source with retention review metadata.

## Attendance Workflow

Attendance should be recorded against a lesson and enrolment, not directly on a
free-text course row. This keeps future billing and lesson history traceable.

- `present` and `absent_unexcused` are billable by default.
- `absent_excused`, `cancelled`, and `scheduled` need owner policy decisions
  before automated invoice generation.
- Attendance notes should link to `AdminNote` rather than storing long private
  text in the attendance row.

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
- How invoice numbers should be generated and reserved.
- Whether excused absences are ever billable.
- How old leads, notes, and registration submissions should be retained or
  deleted.
- Which reviewed spreadsheet fields should map into the first private import.
