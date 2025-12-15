-- RM Patel Product Seed Data
-- Run this in Supabase SQL Editor after the migration.sql

-- First, get the category IDs
-- This script uses CTEs to reference categories by slug

-- Seed Tractors
WITH cat AS (SELECT id FROM categories WHERE slug = 'tractors')
INSERT INTO products (category_id, name, slug, description, features, images, variants, is_featured, is_active)
SELECT 
  cat.id,
  'McCormick MB Series 85HP',
  'mccormick-mb-series-85hp',
  'The McCormick MB Series is the ideal choice for smallholder farmers seeking a reliable, fuel-efficient tractor. Built with simplicity in mind, the MB Series offers dependable performance for everyday tasks.',
  ARRAY['Ideal for smallholder farms', 'Simple mechanical design', 'Strong hydraulic lift', 'Comfortable operator seating'],
  ARRAY['/tractor1.png', '/tractor2.png'],
  '{"colors": ["Red", "Blue"], "engine_types": ["Diesel"]}'::jsonb,
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'tractors')
INSERT INTO products (category_id, name, slug, description, features, images, variants, is_featured, is_active)
SELECT 
  cat.id,
  'McCormick BMAX Series',
  'mccormick-bmax-series',
  'The BMAX Series features compact utility tractors ranging from 88-117HP, perfect for row crop work and orchard applications.',
  ARRAY['Compact chassis design', 'Superior maneuverability', 'Tier 4 Final engine', 'Ideal for row crops'],
  ARRAY['/tractor1.png'],
  '{"colors": ["Red"]}'::jsonb,
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'tractors')
INSERT INTO products (category_id, name, slug, description, features, images, variants, is_featured, is_active)
SELECT 
  cat.id,
  'McCormick DMAX Series',
  'mccormick-dmax-series',
  'The DMAX Series delivers 100-122HP utility performance with advanced hydraulics and comfortable cab design.',
  ARRAY['High-capacity hydraulics', 'PowerShift transmission', 'Spacious cab', 'Advanced PTO system'],
  ARRAY['/tractor1.png'],
  '{"colors": ["Red"]}'::jsonb,
  false,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'tractors')
INSERT INTO products (category_id, name, slug, description, features, images, variants, is_featured, is_active)
SELECT 
  cat.id,
  'McCormick GMAX Series',
  'mccormick-gmax-series',
  'The GMAX Series offers 117-136HP for mixed farming operations requiring versatility and power.',
  ARRAY['Front loader ready', 'Versatile implement compatibility', 'Fuel-efficient engine', 'Heavy-duty axles'],
  ARRAY['/tractor1.png'],
  '{"colors": ["Red"]}'::jsonb,
  false,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'tractors')
INSERT INTO products (category_id, name, slug, description, features, images, variants, is_featured, is_active)
SELECT 
  cat.id,
  'McCormick X7/X8 Series',
  'mccormick-x7-x8-series',
  'Premium row crop tractors with 170-310HP, featuring VT-Drive CVT transmission and precision farming ready.',
  ARRAY['VT-Drive CVT transmission', 'AutoGuide ready', 'ISOBUS compatible', 'Premium cab suspension'],
  ARRAY['/tractor1.png'],
  '{"colors": ["Red"]}'::jsonb,
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'tractors')
INSERT INTO products (category_id, name, slug, description, features, images, variants, is_featured, is_active)
SELECT 
  cat.id,
  'Versatile MFWD Tractors',
  'versatile-mfwd-tractors',
  'Versatile MFWD tractors deliver 260-365HP for large-scale farming operations.',
  ARRAY['Cummins engines', 'Heavy-duty 3-point hitch', 'Comfortable cab', 'Dual wheel ready'],
  ARRAY['/tractor1.png'],
  '{"colors": ["Yellow"]}'::jsonb,
  false,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'tractors')
INSERT INTO products (category_id, name, slug, description, features, images, variants, is_featured, is_active)
SELECT 
  cat.id,
  'Versatile 4WD Tractors',
  'versatile-4wd-tractors',
  'Articulated 4WD tractors with 335-610HP for the most demanding agricultural applications.',
  ARRAY['Articulated frame', 'Up to 610HP', 'Advanced GPS ready', 'Maximum traction'],
  ARRAY['/tractor1.png'],
  '{"colors": ["Yellow"]}'::jsonb,
  false,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

-- Seed Implements
WITH cat AS (SELECT id FROM categories WHERE slug = 'implements')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Tatu Disc Harrows',
  'tatu-disc-harrows',
  'Heavy-duty disc harrows available in offset and tandem models for superior soil preparation.',
  ARRAY['Offset and tandem models', 'Heavy-duty frames', 'Adjustable disc angles', 'Ideal for residue management'],
  ARRAY['/implement2.png'],
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'implements')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Tatu Mouldboard Ploughs',
  'tatu-mouldboard-ploughs',
  'Deep and efficient soil penetration for primary tillage in tough soil conditions.',
  ARRAY['Deep soil penetration', 'Tough soil conditions', '2-4 disc configurations', 'Durable construction'],
  ARRAY['/implement3.png'],
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'implements')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Tatu Cultivators',
  'tatu-cultivators',
  'Rigid and spring-loaded tine options for secondary tillage and weed control.',
  ARRAY['Rigid and spring-loaded tines', 'Secondary tillage', 'Weed control', 'High-strength steel frames'],
  ARRAY['/implement4.png'],
  false,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'implements')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Sugarcane Ridgers & Furrowers',
  'sugarcane-ridgers-furrowers',
  'Specialized implements for sugarcane field management and row shaping.',
  ARRAY['Sugarcane specialty', 'Accurate row shaping', 'Soil management', 'East African tested'],
  ARRAY['/implement5.png'],
  false,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'implements')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Terra Boom Sprayers',
  'terra-boom-sprayers',
  'Mounted and trailed boom sprayers with tank capacities up to 1000L.',
  ARRAY['Mounted and trailed options', 'Up to 1000L tank', 'Precision spray nozzles', 'Adjustable booms'],
  ARRAY['/implement4.png'],
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'implements')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Terra Tipping Trailers',
  'terra-tipping-trailers',
  'Single-axle and dual-axle tipping trailers with hydraulic systems.',
  ARRAY['Single and dual axle', 'Hydraulic tipping', 'Easy unloading', 'Farm transport'],
  ARRAY['/implement5.png'],
  false,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

-- Seed Precision Agriculture
WITH cat AS (SELECT id FROM categories WHERE slug = 'precision-agriculture')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Topcon GPS Receivers',
  'topcon-gps-receivers',
  'Sub-inch accuracy GPS receivers for precision farming operations.',
  ARRAY['Sub-inch accuracy', 'RTK correction', 'All-weather operation', 'Easy integration'],
  ARRAY['/precision1.png'],
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'precision-agriculture')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Topcon Auto-Steer Controllers',
  'topcon-auto-steer-controllers',
  'Hands-free steering for reduced operator fatigue and perfect row spacing.',
  ARRAY['Hands-free operation', 'Reduced overlap', 'Operator fatigue reduction', 'Perfect rows'],
  ARRAY['/precision1.png'],
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'precision-agriculture')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Topcon Field Mapping Systems',
  'topcon-field-mapping-systems',
  'Complete field data collection and mapping for informed decision making.',
  ARRAY['Field data collection', 'Yield mapping', 'Variable rate ready', 'Cloud sync'],
  ARRAY['/precision1.png'],
  false,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

-- Seed Irrigation Solutions
WITH cat AS (SELECT id FROM categories WHERE slug = 'irrigation-solutions')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Drip Irrigation Systems',
  'drip-irrigation-systems',
  'Precise water delivery systems for row crops and vegetables.',
  ARRAY['Water efficient', 'Row crop ready', 'Precise delivery', 'Reduced water waste'],
  ARRAY['/irrigation1.png'],
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'irrigation-solutions')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Sprinkler Systems',
  'sprinkler-systems',
  'Even water coverage for large agricultural areas.',
  ARRAY['Even coverage', 'Large area support', 'Adjustable heads', 'Durable design'],
  ARRAY['/irrigation1.png'],
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'irrigation-solutions')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Center Pivot Systems',
  'center-pivot-systems',
  'Automated large-scale irrigation for maximum efficiency.',
  ARRAY['Automated operation', 'Large scale', 'GPS compatible', 'Remote monitoring'],
  ARRAY['/irrigation1.png'],
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'irrigation-solutions')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Irrigation Pumps & Motors',
  'irrigation-pumps-motors',
  'Reliable water delivery power for all irrigation needs.',
  ARRAY['Multiple capacities', 'Electric and diesel', 'High efficiency', 'Durable pumps'],
  ARRAY['/irrigation1.png'],
  false,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

-- Seed Silos
WITH cat AS (SELECT id FROM categories WHERE slug = 'silos')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Agacli Grain Silos',
  'agacli-grain-silos',
  'Various capacities from 5 tons to 1000+ tons with aeration systems.',
  ARRAY['5 to 1000+ ton capacity', 'Aeration systems', 'Weather resistant', 'Easy maintenance'],
  ARRAY['/silo1.png'],
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'silos')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Agacli Feed Mixers',
  'agacli-feed-mixers',
  'Horizontal and vertical feed mixers for livestock operations.',
  ARRAY['Horizontal and vertical', 'Uniform mixing', 'Multiple capacities', 'TMR ready'],
  ARRAY['/silo1.png'],
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'silos')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Grain Conveying Equipment',
  'grain-conveying-equipment',
  'Augers, elevators, and handling systems for efficient grain movement.',
  ARRAY['Augers available', 'Bucket elevators', 'Chain conveyors', 'Custom lengths'],
  ARRAY['/silo1.png'],
  false,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

-- Seed Wholesale
WITH cat AS (SELECT id FROM categories WHERE slug = 'wholesale')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Tractor Parts Wholesale',
  'tractor-parts-wholesale',
  'Bulk pricing on genuine tractor parts and accessories.',
  ARRAY['Genuine parts', 'Volume discounts', 'Fast dispatch', 'Multiple brands'],
  ARRAY['/wholesale1.png'],
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'wholesale')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Implement Parts Wholesale',
  'implement-parts-wholesale',
  'Wholesale pricing on implement wear parts and components.',
  ARRAY['Wear parts', 'Replacement components', 'B2B pricing', 'Stock availability'],
  ARRAY['/wholesale1.png'],
  true,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;

WITH cat AS (SELECT id FROM categories WHERE slug = 'wholesale')
INSERT INTO products (category_id, name, slug, description, features, images, is_featured, is_active)
SELECT 
  cat.id,
  'Irrigation Supplies Wholesale',
  'irrigation-supplies-wholesale',
  'Bulk irrigation fittings, pipes, and accessories.',
  ARRAY['Fittings', 'Pipes', 'Accessories', 'Trade pricing'],
  ARRAY['/wholesale1.png'],
  false,
  true
FROM cat
ON CONFLICT (slug) DO NOTHING;
