-- RM Patel Ecommerce Database Schema
-- Run this in Supabase SQL Editor

-- Categories Table
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  image_url text,
  display_order int default 0,
  created_at timestamptz default now()
);

-- Products Table
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references categories(id) on delete cascade,
  name text not null,
  slug text unique not null,
  sku text,
  price decimal(12,2),
  description text,
  features text[],
  specifications jsonb,
  images text[],
  variants jsonb,
  is_featured boolean default false,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Inquiries Table (Buy Now submissions)
create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete set null,
  product_name text not null,
  name text not null,
  email text not null,
  phone text,
  message text,
  selected_variants jsonb,
  status text default 'new',
  created_at timestamptz default now()
);

-- Contact Submissions Table
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  status text default 'new',
  created_at timestamptz default now()
);

-- Admin Users Table
create table if not exists admin_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  password_hash text not null,
  name text,
  is_super_admin boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Create indexes for better query performance
create index if not exists idx_products_category on products(category_id);
create index if not exists idx_products_slug on products(slug);
create index if not exists idx_products_active on products(is_active);
create index if not exists idx_categories_slug on categories(slug);
create index if not exists idx_inquiries_status on inquiries(status);
create index if not exists idx_contact_status on contact_submissions(status);

-- Insert initial categories
insert into categories (name, slug, description, display_order) values
  ('Tractors', 'tractors', 'McCormick & Versatile tractors for every farm', 1),
  ('Implements', 'implements', 'Agricultural implements and attachments', 2),
  ('Precision Agriculture', 'precision-agriculture', 'Topcon GPS and auto-steer solutions', 3),
  ('Irrigation Solutions', 'irrigation-solutions', 'Complete irrigation systems', 4),
  ('Silos', 'silos', 'Agacli storage silos and feed mixers', 5),
  ('Wholesale', 'wholesale', 'B2B wholesale products', 6)
on conflict (slug) do nothing;

-- Insert initial super admin (password: admin123)
-- The hash is for 'admin123' - CHANGE THIS IN PRODUCTION
insert into admin_users (email, password_hash, name, is_super_admin) values
  ('rmpatel@gmail.com', '$2b$10$YGnxuzHytMSk6tESvs0YUERTBipUNRYKN8.xvGVc7YKgLWjQ8YKCC', 'RM Patel Admin', true)
on conflict (email) do nothing;

-- Enable Row Level Security (optional but recommended)
alter table categories enable row level security;
alter table products enable row level security;
alter table inquiries enable row level security;
alter table contact_submissions enable row level security;
alter table admin_users enable row level security;

-- Public read access for categories and active products
create policy "Public can view categories" on categories for select using (true);
create policy "Public can view active products" on products for select using (is_active = true);

-- Public can insert inquiries and contact submissions
create policy "Public can submit inquiries" on inquiries for insert with check (true);
create policy "Public can submit contact" on contact_submissions for insert with check (true);

-- Admin policies (service role bypasses RLS)
create policy "Admins can do anything with categories" on categories for all using (true);
create policy "Admins can do anything with products" on products for all using (true);
create policy "Admins can do anything with inquiries" on inquiries for all using (true);
create policy "Admins can do anything with contacts" on contact_submissions for all using (true);
create policy "Admins can do anything with admin_users" on admin_users for all using (true);
