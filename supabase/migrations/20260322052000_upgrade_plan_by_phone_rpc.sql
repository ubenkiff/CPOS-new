create or replace function public.upgrade_user_plan_by_phone(p_phone text)
returns boolean
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  v_count integer;
begin
  update auth.users
  set raw_user_meta_data = coalesce(raw_user_meta_data, '{}'::jsonb) || '{"plan":"pro"}'::jsonb
  where raw_user_meta_data->>'phone' = p_phone;

  get diagnostics v_count = row_count;
  return v_count > 0;
end;
$$;

revoke all on function public.upgrade_user_plan_by_phone(text) from public;
grant execute on function public.upgrade_user_plan_by_phone(text) to service_role;
