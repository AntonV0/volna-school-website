# Supabase Trial Registrations Setup

Public-safe setup notes for the free trial lesson registration form. Do not place project URLs, anon keys, service-role keys, student records, or exported lead data in this file.

## Purpose

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
    check (lead_status in ('new', 'contacted', 'scheduled', 'closed')),
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

Spam protection starts with the hidden honeypot field in the form. Turnstile is scaffolded so local and early preview builds stay fail-open when `CLOUDFLARE_TURNSTILE_SECRET_KEY` is not configured. Once the secret key is present, submissions must include a valid `cf-turnstile-response` token before the Supabase insert runs.

Rate limiting is not implemented in this repo because it needs shared infrastructure to work reliably across serverless instances. Add it at Vercel Firewall/Edge Middleware, Cloudflare, or with a shared store such as Upstash before paid traffic if spam volume appears.

## Turnstile QA

Keep Turnstile site and secret keys in `.env.local` and Vercel only. Configure the public site key and server secret together. Verify:

- normal submissions succeed with a fresh valid token
- submissions fail without a token
- submissions fail with an expired, reused, or malformed token
- server errors return a generic user-facing message without leaking provider details
- local test bypasses are disabled or unavailable in Production

## Analytics Safety

Registration analytics events must not include names, emails, phone numbers, messages, or parent/guardian details. Safe event properties are limited to non-personal operational context such as locale, route, selected course interest, and selected contact method.
