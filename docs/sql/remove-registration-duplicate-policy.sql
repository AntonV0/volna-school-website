-- MANUAL DATABASE CHANGE: prepared only; not executed by the agent.
-- Run the read-only check first. Use only for the documented optional index.
-- Allows repeat enquiries for manual review; deletes no enquiry records.
-- Leaves primary keys, constraints, RLS and spam protection unchanged.
-- Keep a copy of the read-only check results for your change record.
begin;
set local lock_timeout = '5s';
set local statement_timeout = '15s';

do $$
declare
  idx regclass := to_regclass('public.trial_registrations_active_duplicate_idx');
  details record;
  expected_predicate text := '(lead_status=ANY(ARRAY[''new''::text,''contacted''::text,''trial_scheduled''::text]))';
begin
  if idx is null then
    raise notice 'Optional duplicate index is absent. Nothing changed.';
    return;
  end if;

  select x.*, t.relname as table_name, n.nspname as table_schema,
    pg_get_indexdef(x.indexrelid, 1, false) as key_1,
    pg_get_indexdef(x.indexrelid, 2, false) as key_2,
    pg_get_indexdef(x.indexrelid, 3, false) as key_3,
    regexp_replace(pg_get_expr(x.indpred, x.indrelid), '\s+', '', 'g') as predicate
  into details
  from pg_index x
  join pg_class t on t.oid = x.indrelid
  join pg_namespace n on n.oid = t.relnamespace
  where x.indexrelid = idx;

  if not found then
    raise exception 'Named object is not an index. Nothing changed.';
  end if;
  if details.table_schema <> 'public' or details.table_name <> 'trial_registrations'
    or not details.indisunique or details.indisprimary or details.indisexclusion
    or details.indnatts <> 3 or details.indnkeyatts <> 3
    or details.key_1 is distinct from 'lower(email)'
    or details.key_2 is distinct from 'lower(learner_name)'
    or details.key_3 is distinct from 'course_interest'
    or details.predicate is distinct from expected_predicate
    or exists (select 1 from pg_constraint where conindid = idx)
  then
    raise exception 'Index differs from the documented optional duplicate policy. Nothing changed; review the read-only results before proceeding.';
  end if;

  -- Explicit target, no CASCADE. Any error rolls back this transaction.
  drop index public.trial_registrations_active_duplicate_idx;
  raise notice 'Optional duplicate index removed. Existing enquiries are unchanged; repeat enquiries can be reviewed manually.';
end;
$$;
commit;

-- Rerun check-registration-duplicate-policy.sql to confirm the index is absent.
-- If a guard or timeout fails, run ROLLBACK; in the SQL Editor before retrying.
-- Do not recreate the old index blindly: repeats accepted since removal may
-- prevent recreation, and it would reintroduce cross-enquiry suppression.
