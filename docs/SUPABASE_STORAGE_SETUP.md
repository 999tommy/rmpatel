# Supabase Storage Setup Guide

## Setting Up Image Storage for RM Patel Products

### Step 1: Create a Storage Bucket

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Navigate to **Storage** in the left sidebar
4. Click **New bucket**
5. Configure:
   - **Name:** `product-images`
   - **Public bucket:** ✅ Toggle ON (so images can be accessed without auth)
6. Click **Create bucket**

### Step 2: Set Bucket Policies (Optional - Already Public)

Since you made it public, anyone can view images. If you want to restrict uploads:

1. Go to **Storage** → **Policies**
2. Select `product-images` bucket
3. Add policies:

```sql
-- Allow public read access (already enabled if bucket is public)
CREATE POLICY "Public read access"
ON storage.objects FOR SELECT
USING (bucket_id = 'product-images');

-- Allow authenticated admins to upload
CREATE POLICY "Admin upload access"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'product-images');
```

### Step 3: Get Image URLs

Once you upload an image, the public URL format is:

```
https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/product-images/[FILENAME]
```

For example:
```
https://ydqgsaffkubjrbfhfgja.supabase.co/storage/v1/object/public/product-images/tractor-mb-85hp.jpg
```

### Step 4: Upload Images

1. Go to **Storage** → `product-images`
2. Click **Upload files**
3. Select your product images
4. Copy the public URL to use in product forms

### Using Static Images (Current Setup)

For now, you can use the existing static images in your `/public` folder:
- `/tractor1.png`
- `/tractor2.png`
- `/implement1.png` - `/implement5.png`
- `/precision1.png`
- `/irrigation1.png`
- `/silo1.png`
- etc.

These work immediately without Supabase Storage.

---

## Quick Steps Summary

1. **Supabase Dashboard** → Storage → New bucket
2. **Name:** `product-images`, **Public:** ON
3. **Upload images** via dashboard
4. **Copy URL** to product form image field
