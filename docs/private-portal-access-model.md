# Private Portal Access Model

This document is public-safe. It describes the intended access model without
staff emails, student records, lesson links, invoice data, or private business
documents.

## Portal Surfaces

The private application should use separate areas for distinct user groups.

- `/admin` is for owner/admin operations, including trial leads, student
  records, attendance, invoices, payment records, notes, and future import
  workflows.
- `/teacher` is for teaching workflows such as relevant class lists, homework,
  attendance entry, lesson context, and teaching notes. Exact permissions still
  need owner approval.
- `/student` is for future student-facing access, such as homework, learning
  materials, and approved online lesson links. Microsoft Teams or Zoom
  integration is undecided.

All private routes should remain `noindex, nofollow`.

## Roles

The long-term role model should support:

- `owner`: full operational and configuration access.
- `admin`: broad operational access, including invoice creation and most admin
  workflows.
- `teacher`: limited access to teaching workflows and assigned/relevant records.
- `student`: access only to the student's own permitted homework, materials,
  lesson links, and profile/course context.

The current admin email allowlist remains a temporary safety layer while the
role model is being built. Long term, Supabase role claims should become the
primary application authorization source.

## Supabase Role Claims

Prefer server-controlled Supabase Auth app metadata/custom claims for roles.
Do not trust user-editable metadata for authorization.

Recommended claim shape:

```json
{
  "role": "teacher"
}
```

The app should treat missing or unknown roles as unauthorized.

## RLS Direction

RLS must enforce private data boundaries in Supabase, not only in UI components.

Recommended helper pattern:

```sql
create or replace function public.current_private_role()
returns text
language sql
stable
as $$
  select nullif(auth.jwt() -> 'app_metadata' ->> 'role', '')
$$;
```

Admin-level policy examples should check:

```sql
public.current_private_role() in ('owner', 'admin')
```

Teacher policies should additionally constrain records to assigned or relevant
teaching scope, for example through a join table such as `teacher_assignments`.
The exact assignment model still needs a business decision.

Student policies should constrain records to the authenticated student's own
profile/enrolment/material scope, not only to a generic `student` role.

## Implementation Principles

- Keep private route guards in Server Components and server helpers.
- Keep RLS as the final data boundary.
- Avoid relying on route hiding, navigation hiding, or client-side checks for
  security.
- Avoid broad `authenticated` read policies once real users or private data
  exist.
- Do not commit real staff emails, test people, student data, invoice examples,
  class links, or screenshots of private portals.

## Open Decisions

- Exact teacher permissions for homework, attendance, notes, and class lists.
- Whether `/student` or a broader `/portal` name is better before launch.
- Whether students should access live lesson links directly on the site.
- Whether role claims are managed manually in Supabase, through an admin tool, or
  through a private staff profile table.
- How teacher assignments map to courses, cohorts, lessons, and homework.
