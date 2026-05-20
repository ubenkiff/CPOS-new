create table if not exists public.mpesa_checkout_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  tier text not null default 'pro',
  amount integer not null,
  phone text not null,
  status text not null default 'pending',
  merchant_request_id text,
  checkout_request_id text unique,
  result_code integer,
  result_desc text,
  raw_callback jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists mpesa_checkout_requests_user_id_idx on public.mpesa_checkout_requests (user_id);
create index if not exists mpesa_checkout_requests_status_idx on public.mpesa_checkout_requests (status);

alter table public.mpesa_checkout_requests enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'mpesa_checkout_requests'
      and policyname = 'Users can view own checkout requests'
  ) then
    create policy "Users can view own checkout requests"
      on public.mpesa_checkout_requests
      for select
      to authenticated
      using (user_id = auth.uid());
  end if;
end $$;
