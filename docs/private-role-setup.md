# Private Role Setup

This document is public-safe. Do not add real staff emails, student emails,
Supabase project IDs, screenshots, or secrets.

## Current Role Model

The app recognises these server-controlled roles:

- `owner`
- `admin`
- `teacher`
- `student`

Roles are read from Supabase Auth `app_metadata.role`. User-editable metadata
must not be used for authorization.

## Recommended Setup Path

### Phase 1: Manual Supabase Setup

Use manual role assignment while the private platform is still small.

1. Create the user through Supabase Auth.
2. Confirm the email is correct.
3. Set `app_metadata.role` to one of the supported role values.
4. Test the relevant route while signed in:
   - owner/admin: `/admin`
   - teacher: `/teacher`
   - student: `/student`
5. Confirm disallowed portals redirect to `/login`.

### Phase 2: Admin-Managed Roles

Later, add a private owner-only role management screen. That screen should:

- list approved users without exposing them in public docs
- allow role changes by an owner
- record audit metadata
- prevent users from changing their own role
- keep role writes server-side only

## Temporary Admin Fallback

`ADMIN_ALLOWED_EMAILS` remains a temporary server-only fallback for owner/admin
access while role claims are being configured.

Use it only for approved owner/admin emails and keep real values in `.env.local`
or Vercel environment variables.

## Redirect Setup

Magic-link sign-in requires Supabase Auth redirect URLs for each trusted origin:

```text
https://<trusted-origin>/auth/callback
```

Do not commit real origins for private preview environments unless they are
already public-safe.

## QA Checklist

- Missing role claim redirects to `/login`.
- Unknown role claim redirects to `/login`.
- `teacher` can access `/teacher` and teacher subroutes only.
- `student` can access `/student` and student subroutes only.
- `admin` and `owner` can access admin routes.
- The login request does not reveal whether an email exists.
- `/auth/callback` only redirects to approved private portal paths.
