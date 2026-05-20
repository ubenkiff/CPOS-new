-- pm_requests: capture hire-remote-PM intake requests

create table if not exists public.pm_requests (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete set null,
  project_name text,
  project_type text,
  location text,
  description text,
  budget numeric,
  currency text,
  start_date date,
  duration text,
  procurement_stage text,
  client_name text,
  company text,
  email text,
  phone text,
  referral_source text,
  status text default 'new',
  created_at timestamptz default now()
);

alter table public.pm_requests enable row level security;

drop policy if exists "Anyone can submit PM request" on public.pm_requests;
create policy "Anyone can submit PM request"
on public.pm_requests
for insert
to anon, authenticated
with check (true);
