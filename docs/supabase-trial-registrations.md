# Supabase Trial Registrations Setup

Public-safe setup notes for the free trial lesson registration form. Do not place project URLs, anon keys, service-role keys, student records, or exported lead data in this file.

## Purpose

**Current status — 23 October 2026:** the owner confirmed the locally configured
project. Read-only inspection found an empty public schema: this table and the
optional duplicate index below do not exist. Database setup is deliberately
deferred. This document is an early proposal, not an applied migration; review
[the backend handoff](backend-phase-handoff.md) before using it.

`trial_registrations` stores enquiry leads from the public registration form. These rows are not student records. A later admin workflow can review a lead and convert it into student, guardian, enrolment, and lesson records.

## Environment Variables

Keep real values in `.env.local` and Vercel only.

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY`, only when Turnstile is enabled
- `CLOUDFLARE_TURNSTILE_SECRET_KEY`, server-only and only when Turnstile is enabled

The public form uses the anon key with Row Level Security. Do not use `SUPABASE_SERVICE_ROLE_KEY` for public form submissions.

## Table

Run this in a reviewed Supabase SQL editor session for the target project.

```sql
create table if not exists public.trial_registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  lead_status text not null default 'new'
    check (
      lead_status in (
        'new',
        'contacted',
        'trial_scheduled',
        'trial_completed',
        'converted',
        'duplicate',
        'closed'
      )
    ),
  locale text not null default 'en'
    check (locale in ('en', 'ru')),
  learner_name text not null check (char_length(learner_name) between 1 and 120),
  parent_guardian_name text check (
    parent_guardian_name is null or char_length(parent_guardian_name) <= 120
  ),
  email text not null check (char_length(email) between 3 and 160),
  phone text check (phone is null or char_length(phone) <= 60),
  learner_age_year_group text check (
    learner_age_year_group is null or char_length(learner_age_year_group) <= 80
  ),
  course_interest text not null
    check (course_interest in ('children', 'gcse', 'alevel', 'adults', 'not_sure')),
  preferred_contact_method text not null
    check (preferred_contact_method in ('email', 'phone', 'either')),
  message text check (message is null or char_length(message) <= 1000),
  consent_to_contact boolean not null check (consent_to_contact is true),
  source_path text check (source_path is null or char_length(source_path) <= 240)
);

create index if not exists trial_registrations_created_at_idx
  on public.trial_registrations (created_at desc);

create index if not exists trial_registrations_lead_status_idx
  on public.trial_registrations (lead_status);
```

## Optional Duplicate Policy

Prepared manual scripts (not executed):

1. Run [the read-only index check](sql/check-registration-duplicate-policy.sql).
2. Only if the documented optional index is present and matches the example,
   run [the guarded removal script](sql/remove-registration-duplicate-policy.sql).
3. Run the read-only check again. Keep all three results for your change record.

The fix deliberately accepts repeated enquiries for manual review. It removes
only the named optional index and refuses to run if its definition differs;
it does not remove records, primary keys, constraints or security rules.

**GCSE mock-enquiry caveat (23 October 2026):** mock interest is stored in the
lead message, with a mock-specific `source_path`, while `course_interest`
remains `gcse`. The example index below does not distinguish mock enquiries
from trial requests, or different mock interests. Do not apply it unchanged to
the combined intake. If it is already enabled, a legitimate mock enquiry for
an existing trial lead could be suppressed and receive generic success feedback.
The live index state has not been verified from this workspace. An authorised
database operator can inspect it without reading leads or writing data:

```sql
select indexname, indexdef
from pg_indexes
where schemaname = 'public' and tablename = 'trial_registrations';
```

Resolve any active cross-enquiry suppression before launching the mock form.
Do not change or drop a live index without an approved replacement policy.

Do not enable duplicate suppression until the owner has approved the policy and
QA has confirmed it does not block legitimate households. If approved, use a
database rule rather than in-memory application counters so the behavior is
durable across Vercel regions, cold starts, and redeploys.

This optional policy collapses exact active duplicates for the same normalized
email, learner name, and course while a lead is still new, contacted, or
trial-scheduled:

```sql
create unique index if not exists trial_registrations_active_duplicate_idx
  on public.trial_registrations (lower(email), lower(learner_name), course_interest)
  where lead_status in ('new', 'contacted', 'trial_scheduled');
```

With this index in place, the app treats a duplicate-key insert rejection as the
normal success state. Visitors are not told whether a matching lead already
exists, and no second row is created. Leave this index unapplied if the owner
prefers manual duplicate review in the admin inbox.

## Updated Timestamp Trigger

```sql
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trial_registrations_set_updated_at
  on public.trial_registrations;

create trigger trial_registrations_set_updated_at
before update on public.trial_registrations
for each row
execute function public.set_updated_at();
```

## Row Level Security

Anonymous visitors may insert only valid lead rows. They must not read, update,
or delete registrations. Admin tooling may read and manage leads only through
owner/admin roles after Supabase Auth is configured.

The policies below use the role helper functions described in
`docs/supabase-private-portal-rls.md`. Create those helpers before running the
owner/admin policies.

```sql
alter table public.trial_registrations enable row level security;

drop policy if exists "Public can create trial registration leads"
  on public.trial_registrations;

create policy "Public can create trial registration leads"
on public.trial_registrations
for insert
to anon
with check (
  consent_to_contact is true
  and lead_status = 'new'
  and learner_name is not null
  and email is not null
  and course_interest in ('children', 'gcse', 'alevel', 'adults', 'not_sure')
  and preferred_contact_method in ('email', 'phone', 'either')
);

drop policy if exists "Owner admins can read trial registration leads"
  on public.trial_registrations;

create policy "Owner admins can read trial registration leads"
on public.trial_registrations
for select
to authenticated
using (public.has_private_role(array['owner', 'admin']));

drop policy if exists "Owner admins can update trial registration leads"
  on public.trial_registrations;

create policy "Owner admins can update trial registration leads"
on public.trial_registrations
for update
to authenticated
using (public.has_private_role(array['owner', 'admin']))
with check (public.has_private_role(array['owner', 'admin']));
```

Do not leave `using (true)` policies in Production if untrusted authenticated
users, teachers, students, or real private records can exist in the project.

The admin inbox currently allows manual status updates for `new`, `contacted`,
`trial_scheduled`, `trial_completed`, `duplicate`, and `closed`. `converted`
should only be set by the future lead-to-student workflow after student,
guardian, and enrolment records are created.

## Form Contract

Required fields:

- `learner_name`
- `email`
- `course_interest`
- `preferred_contact_method`
- `consent_to_contact`

Optional fields:

- `parent_guardian_name`
- `phone`
- `learner_age_year_group`
- `message`
- `source_path`
- `locale`

The UI also asks optional placement questions such as preferred lesson format,
speaking confidence, writing confidence, reading confidence, and whether Russian
is spoken at home. In the first safe implementation these values are folded into
the lead `message` field so the public database contract stays narrow. Add
dedicated columns later only after the owner confirms reporting and retention
needs.

Spam protection starts with the hidden honeypot field in the form. Turnstile is
scaffolded so local development and intentional synthetic-only Vercel Preview
deployments stay fail-open when `CLOUDFLARE_TURNSTILE_SECRET_KEY` is not
configured. Vercel Production fails closed if the server secret is missing. Once
the secret key is present, submissions must include a valid
`cf-turnstile-response` token before the Supabase insert runs.

Rate limiting is not implemented in this repo because it needs shared infrastructure to work reliably across serverless instances. Prefer Vercel Firewall or Cloudflare edge controls before paid traffic, then consider app-level limits backed by a shared store only if needed. Duplicate suppression, if approved, should be handled by the optional durable Supabase policy above rather than by local memory.

See `docs/registration-abuse-protection.md` for the long-term abuse protection
and rate-limiting plan.

## Turnstile QA

Keep Turnstile site and secret keys in `.env.local` and Vercel only. Configure the public site key and server secret together. Verify:

- normal submissions succeed with a fresh valid token
- submissions fail without a token
- submissions fail with an expired, reused, or malformed token
- server errors return a generic user-facing message without leaking provider details
- local test bypasses are disabled or unavailable in Production

## Analytics Safety

Registration analytics events must not include names, emails, phone numbers, messages, or parent/guardian details. Safe event properties are limited to non-personal operational context such as locale, route, selected course interest, and selected contact method.
