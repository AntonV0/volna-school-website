# Backend and registration handoff

## Owner decision — 23 October 2026

Finish refining the public pages before implementing the database and registration
workflows. The owner confirmed that the project referenced by the local Supabase
configuration is the intended rebuild project. Keep project identifiers and all
credentials in private configuration, not public documentation.

No database setup is authorised as part of continuing public-page refinement.
No real enquiries have been submitted during these checks.

## Verified state

- The configured Supabase project was resumed and reported healthy.
- Read-only metadata inspection found no tables in the public schema.
- `public.trial_registrations` does not exist, so the documented optional
  duplicate index is not installed on that table. No removal is needed now.
- Trial and mock forms have frontend/server validation and integration code, but
  cannot save enquiries to the absent table. They are not launch-ready.
- Mock enquiries currently reuse the planned trial intake, recording the purpose
  and mock choice in the message. Review this provisional model before setup.
- No tables, indexes, policies, auth settings or existing records were changed.
- Local configuration is confirmed; deployed Vercel configuration is not verified.

## Backend-phase work

1. **Review requirements and early documentation.** Treat existing schema, portal
   and registration setup notes as proposals, not evidence of deployed features.
   Confirm the scope of the initial public launch separately from future portals.
2. **Finalise the enquiry model.** Distinguish trial enquiries from mock interest
   explicitly. Decide which fields, statuses and mock options belong in structured
   columns, how follow-up works, and whether one intake table remains appropriate.
3. **Review registration pages.** Finalise fields, parent/self flows, validation,
   consent, privacy/retention requirements and accessible error/success states.
   Confirm mock eligibility, dates, booking/payment process and feedback delivery
   with the owner. Interest submission must not imply a confirmed paid booking.
4. **Implement reviewed schema and security together.** Use versioned migrations,
   constraints, appropriate grants and RLS. Visitors must never read, update or
   delete other enquiries. Review constrained public inserts versus a protected
   server intake. Keep service-role credentials server-only.
5. **Define staff access and processing.** Establish authorised admin access and
   least-privilege policies before collecting personal data. Confirm how staff
   receive, distinguish and follow up trial/mock enquiries; do not assume that
   saving a row sends an email notification.
6. **Decide duplicate handling.** Recommended starting point: accept legitimate
   repeat enquiries for manual review. Do not apply the old unique rule based on
   email + student name + course: it cannot distinguish a new mock enquiry from
   an earlier trial request. Review the current generic duplicate-success hook
   before any replacement policy. Prepared index-check/removal scripts are not
   migrations and must not be run blindly against a later schema.
7. **Configure deployment and abuse protection.** Verify environments, separate QA
   and production data, enable both Turnstile keys together and review rate limits,
   failure behaviour, auth redirects and secret handling. Do not open live intake
   just because the forms render correctly.
8. **Run controlled integration QA when authorised.** Use synthetic enquiries only:
   trial, written mock, speaking mock, both, parent/self, repeat/cross-purpose
   enquiries, validation, network errors, confirmation, notification and admin
   access. Verify unauthorised read/update/delete denial. Agree test-data cleanup
   before creating records; do not use real family details.
9. **Launch gate.** Run lint, typecheck and build; verify production configuration,
   persistence, staff access/notifications, privacy controls and owner sign-off.
   Only then describe registration as production-ready.

## Prepared references

- [Registration setup proposal](supabase-trial-registrations.md)
- [Abuse protection notes](registration-abuse-protection.md)
- [Read-only duplicate-index inspection](sql/check-registration-duplicate-policy.sql)
- [Guarded optional-index removal](sql/remove-registration-duplicate-policy.sql)
- [Production environment QA](production-env-qa.md)

The read-only check succeeded against the currently empty schema. The removal
script has not been executed or validated against a live matching index.
