create or replace function public.list_project_teasers()
returns table (
  projectid uuid,
  project_name text,
  project_code text,
  status text,
  client_name text,
  location text,
  budget numeric,
  currency text,
  completion_percentage numeric
)
language sql
stable
security definer
set search_path = public
as $$
  select 
    p.projectid,
    p.project_name,
    p.project_code,
    p.status,
    p.client_name,
    p.location,
    p.budget,
    p.currency,
    coalesce(m.overall_progress, 0) as completion_percentage
  from public.projects p
  left join public.dashboard_metrics m on m.projectid = p.projectid;
$$;

revoke all on function public.list_project_teasers() from public;
grant execute on function public.list_project_teasers() to authenticated;
