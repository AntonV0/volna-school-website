# Supabase Trial Registrations Setup

Public-safe setup notes for the free trial lesson registration form. Do not place project URLs, anon keys, service-role keys, student records, or exported lead data in this file.

## Purpose

`trial_registrations` stores enquiry leads from the public registration form. These rows are not student records. A later admin workflow can review a lead and convert it into student, guardian, enrolment, and lesson records.

## Environment Variables

Keep real values in `.env.local` and Vercel only.

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

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

Anonymous visitors may insert only valid lead rows. They must not read, update, or delete registrations. Authenticated admin tooling may read and manage leads after Supabase Auth is configured.

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

drop policy if exists "Authenticated users can read trial registration leads"
  on public.trial_registrations;

create policy "Authenticated users can read trial registration leads"
on public.trial_registrations
for select
to authenticated
using (true);

drop policy if exists "Authenticated users can update trial registration leads"
  on public.trial_registrations;

create policy "Authenticated users can update trial registration leads"
on public.trial_registrations
for update
to authenticated
using (true)
with check (true);
```

If the admin area later adds roles, tighten the authenticated policies to an owner/admin role check before storing live leads.

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

Spam protection starts with the hidden honeypot field in the form. Add Turnstile before launch if practical, and consider rate limiting once traffic patterns are clearer.

## Analytics Safety

Registration analytics events must not include names, emails, phone numbers, messages, or parent/guardian details. Safe event properties are limited to non-personal operational context such as locale, route, selected course interest, and selected contact method.
