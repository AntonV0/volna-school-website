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
- `/teacher/classes` and `/teacher/homework` are scaffolded as protected
  teacher workspace routes. They should remain assignment-scoped placeholders
  until the owner approves exact class-list and homework workflow permissions.
- `/student` is for future student-facing access, such as homework, learning
  materials, and approved online lesson links. Microsoft Teams or Zoom
  integration is undecided.
- `/student/homework` and `/student/lessons` are protected student-route
  foundations only. They should remain public-safe placeholders until the owner
  approves the exact homework/materials scope and any lesson-link integration.

All private routes should remain `noindex, nofollow`.

`/login` provides a private magic-link sign-in entry point. `/auth/callback`
handles the Supabase email link exchange and redirects only to approved private
portal paths.

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

See `docs/private-role-setup.md` for the public-safe setup and QA checklist.

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

See `docs/supabase-private-portal-rls.md` for the current public-safe RLS
scaffold and trial lead policy direction.

## Implementation Principles

- Keep private route guards in Server Components and server helpers.
- Keep RLS as the final data boundary.
- Keep sign-in redirect targets constrained to private portal paths.
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
