# Supabase Private Portal RLS Scaffold

This document is public-safe. It contains role and policy patterns only. Do not
add project identifiers, staff emails, student data, class links, invoices, or
private exports.

## Role Claim

Private portal authorization should use a server-controlled Supabase Auth claim:

```json
{
  "role": "admin"
}
```

Supported roles in app code are:

- `owner`
- `admin`
- `teacher`
- `student`

Only trusted server-side/admin tooling should set this claim. Do not use
user-editable metadata for authorization.

## Helper Functions

Run helper functions in a reviewed Supabase SQL editor session before replacing
any broad authenticated policies.

```sql
create or replace function public.current_private_role()
returns text
language sql
stable
as $$
  select nullif(auth.jwt() -> 'app_metadata' ->> 'role', '')
$$;

create or replace function public.has_private_role(allowed_roles text[])
returns boolean
language sql
stable
as $$
  select coalesce(public.current_private_role() = any(allowed_roles), false)
$$;
```

## Admin Policies

Admin-level records, including trial leads and invoice data, should use owner/admin
policies.

```sql
public.has_private_role(array['owner', 'admin'])
```

Use this boundary for:

- trial registration read/update workflows
- student and guardian management
- invoice creation and payment tracking
- private operational notes
- spreadsheet import tooling

## Teacher Policies

Teacher access should be role-based and assignment-scoped. A `teacher` role alone
should not grant access to every class, student, note, or homework item.

Future teacher policies should combine:

```sql
public.has_private_role(array['owner', 'admin', 'teacher'])
```

with a scoped relationship such as:

```sql
exists (
  select 1
  from public.teacher_assignments ta
  where ta.teacher_user_id = auth.uid()
    and ta.cohort_id = lessons.cohort_id
)
```

The exact assignment table names and relationships still need a business/model
decision before real data is added.

## Student Policies

Student access should be role-based and identity-scoped. A `student` role alone
should not grant access to other students' homework, lesson links, or materials.

Future student policies should combine:

```sql
public.has_private_role(array['owner', 'admin', 'student'])
```

with a user-owned relationship such as a `student_profiles.user_id = auth.uid()`
constraint.

## Production Rule

Do not leave broad `to authenticated using (true)` policies in Production once
untrusted authenticated users, teachers, students, or real private records exist.
