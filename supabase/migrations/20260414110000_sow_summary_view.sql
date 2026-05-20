-- CPOS: SOW summary view for module reports
-- Returns per-project aggregates from sow_items L3 rows only.
-- Used by /api/reports/summary API route.

create or replace view public.v_sow_summary as
select
  projectid,
  count(*)                                                        as total_items,
  count(*) filter (where status = 'Complete')                     as complete_count,
  count(*) filter (where status ilike '%progress%')               as in_progress_count,
  count(*) filter (where status ilike '%delay%')                  as delayed_count,
  count(*) filter (where status = 'Not Started' or status is null) as not_started_count,
  count(*) filter (where is_critical_path = true)                 as critical_path_count,
  round(avg(percent_complete)::numeric, 1)                        as avg_progress,
  coalesce(sum(boq_amount), 0)                                    as total_boq,
  coalesce(sum(estimated_cost), 0)                                as total_estimated_cost,
  coalesce(sum(actual_cost), 0)                                   as total_actual_cost,
  coalesce(sum(cost_variance), 0)                                 as total_cost_variance,
  coalesce(sum(quantity), 0)                                      as total_quantity,
  coalesce(sum(net_qty), 0)                                       as total_net_qty
from public.sow_items
where hierarchy_level = 3
group by projectid;

-- Grant access to authenticated users (RLS on sow_items already enforces project access)
grant select on public.v_sow_summary to authenticated;
