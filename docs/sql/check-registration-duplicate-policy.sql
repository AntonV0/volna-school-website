-- READ ONLY: paste into the Supabase SQL Editor and run first.
-- Reads schema/index metadata only, never enquiry records.
-- Save the results before considering the separate fix script.
select
  i.relname as index_name,
  x.indisunique as is_unique,
  x.indisprimary as is_primary,
  pg_get_indexdef(i.oid) as index_definition,
  pg_get_expr(x.indpred, x.indrelid) as predicate,
  c.conname as backing_constraint
from pg_index x
join pg_class i on i.oid = x.indexrelid
join pg_class t on t.oid = x.indrelid
join pg_namespace n on n.oid = t.relnamespace
left join pg_constraint c on c.conindid = i.oid
where n.nspname = 'public' and t.relname = 'trial_registrations'
order by i.relname;

-- If trial_registrations_active_duplicate_idx is absent, do not run the fix.
-- If another unique rule covers email + learner name + course, review it
-- separately: the fix intentionally does not remove any differently named rule.
