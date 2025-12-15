import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { getCurrentAdmin } from '@/lib/auth';

// GET all products (admin view - includes inactive)
export async function GET() {
    const admin = await getCurrentAdmin();

    if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: products, error } = await supabase
        .from('products')
        .select(`
      *,
      category:categories(id, name, slug)
    `)
        .order('created_at', { ascending: false });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(products);
}

// POST - Create new product
export async function POST(request: NextRequest) {
    const admin = await getCurrentAdmin();

    if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const {
            category_id,
            name,
            slug,
            sku,
            price,
            description,
            features,
            specifications,
            images,
            variants,
            is_featured,
            is_active,
        } = body;

        if (!name || !slug || !category_id) {
            return NextResponse.json(
                { error: 'Name, slug, and category are required' },
                { status: 400 }
            );
        }

        // Check if slug already exists
        const { data: existing } = await supabase
            .from('products')
            .select('id')
            .eq('slug', slug)
            .single();

        if (existing) {
            return NextResponse.json(
                { error: 'A product with this slug already exists' },
                { status: 400 }
            );
        }

        const { data: product, error } = await supabase
            .from('products')
            .insert({
                category_id,
                name,
                slug,
                sku: sku || null,
                price: price || null,
                description: description || null,
                features: features || null,
                specifications: specifications || null,
                images: images || null,
                variants: variants || null,
                is_featured: is_featured || false,
                is_active: is_active !== false,
            })
            .select(`
        *,
        category:categories(id, name, slug)
      `)
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(product, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}
