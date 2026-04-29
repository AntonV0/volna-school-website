# Admin Operations Schema Draft

This document is public-safe. It describes the intended private operations
schema without real student records, guardian details, invoice examples, lesson
links, spreadsheet rows, or private notes.

## Purpose

The admin database should model the school's real workflow instead of copying a
spreadsheet column-for-column. The first private data model should support:

- trial lead review and conversion
- student and guardian records
- enrolments and lessons
- attendance and billable status
- internal invoices and payment records
- private notes with retention rules

## Core Tables

### `trial_registrations`

Public form submissions. These are leads, not student records.

Important columns:

- `id`
- `created_at`
- `updated_at`
- `lead_status`
- `learner_name`
- `parent_guardian_name`
- `email`
- `phone`
- `learner_age_year_group`
- `course_interest`
- `preferred_contact_method`
- `message`
- `consent_to_contact`
- `source_path`
- `locale`

### `students`

Private learner records created after review or approved import.

Important columns:

- `id`
- `display_name`
- `lifecycle_status`
- `date_of_birth`
- `year_group`
- `converted_from_lead_id`
- `created_at`
- `updated_at`
- `retention_review_at`

### `guardians`

Parent, guardian, self, or billing contact records.

Important columns:

- `id`
- `display_name`
- `relationship`
- `email`
- `phone`
- `preferred_contact_method`
- `billing_contact`
- `emergency_contact`
- `created_at`
- `updated_at`

### `student_guardians`

Links students to guardians because one guardian may relate to multiple
students.

Important columns:

- `id`
- `student_id`
- `guardian_id`
- `primary_contact`
- `billing_contact`
- `created_at`
- `updated_at`

### `billing_accounts`

Groups the student or students and billing contact for internal invoices.

Important columns:

- `id`
- `display_name`
- `billing_guardian_id`
- `default_currency`
- `invoice_email`
- `invoice_phone`
- `internal_memo`
- `created_at`
- `updated_at`

### `enrolments`

Connects a student to a course, cohort, tutor, and billing account.

Important columns:

- `id`
- `student_id`
- `billing_account_id`
- `course_key`
- `course_label`
- `cohort_label`
- `tutor_user_id`
- `start_date`
- `end_date`
- `enrolment_status`
- `created_at`
- `updated_at`

### `lessons`

Scheduled teaching events.

Important columns:

- `id`
- `course_key`
- `cohort_label`
- `lesson_date`
- `starts_at`
- `ends_at`
- `delivery_mode`
- `location_label`
- `lesson_status`
- `created_at`
- `updated_at`

### `attendance_records`

Connects a student enrolment to a lesson and attendance state.

Important columns:

- `id`
- `student_id`
- `enrolment_id`
- `lesson_id`
- `attendance_status`
- `recorded_by`
- `recorded_at`
- `note_id`
- `created_at`
- `updated_at`

### `invoices`

Internal billing documents. This phase should not process card payments.

Important columns:

- `id`
- `billing_account_id`
- `student_id`
- `invoice_number`
- `invoice_status`
- `issued_at`
- `due_at`
- `sent_at`
- `paid_at`
- `voided_at`
- `internal_memo`
- `created_at`
- `updated_at`

### `invoice_line_items`

Line-level invoice charges.

Important columns:

- `id`
- `invoice_id`
- `description`
- `quantity`
- `unit_amount_minor`
- `currency`
- `enrolment_id`
- `lesson_id`

### `payments`

Manual payment records against invoices.

Important columns:

- `id`
- `invoice_id`
- `amount_minor`
- `currency`
- `payment_method`
- `payment_status`
- `received_at`
- `reconciled_at`
- `external_reference`
- `internal_memo`
- `created_at`
- `updated_at`

### `admin_notes`

Private notes attached to explicit subjects.

Important columns:

- `id`
- `subject_kind`
- `subject_id`
- `body`
- `visibility`
- `pinned`
- `retention_review_at`
- `created_by`
- `created_at`
- `updated_at`

## RLS Direction

Use the role helpers in `docs/supabase-private-portal-rls.md`.

- `owner` and `admin` can manage operational records.
- `teacher` access must be assignment-scoped before teacher writes are enabled.
- `student` access must be identity-scoped before homework or lesson materials
  are exposed.

Do not use broad `authenticated using (true)` policies for private records once
real users exist.

## Migration Order

Recommended order:

1. Keep `trial_registrations` live and admin-managed.
2. Add `students`, `guardians`, and `student_guardians`.
3. Add `billing_accounts` and `enrolments`.
4. Add `lessons` and `attendance_records`.
5. Add `invoices`, `invoice_line_items`, and `payments`.
6. Add `admin_notes` only after retention and visibility rules are approved.
7. Import reviewed spreadsheet data only after field mapping is approved.

## Decisions Needed Before SQL Finalization

- Exact invoice number format and reservation policy.
- Whether invoice drafts can be deleted or only voided.
- Attendance billing rules for excused absence and cancellations.
- Teacher assignment model for class lists, attendance, and homework.
- Student account model for homework and lesson access.
- Note retention periods and visibility rules.
