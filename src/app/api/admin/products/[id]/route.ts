import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { getCurrentAdmin } from '@/lib/auth';

// GET single product by ID
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const admin = await getCurrentAdmin();
    const { id } = await params;

    if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: product, error } = await supabase
        .from('products')
        .select(`
      *,
      category:categories(id, name, slug)
    `)
        .eq('id', id)
        .single();

    if (error || !product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
}

// PUT - Update product
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const admin = await getCurrentAdmin();
    const { id } = await params;

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

        // Check if slug already exists for another product
        if (slug) {
            const { data: existing } = await supabase
                .from('products')
                .select('id')
                .eq('slug', slug)
                .neq('id', id)
                .single();

            if (existing) {
                return NextResponse.json(
                    { error: 'A product with this slug already exists' },
                    { status: 400 }
                );
            }
        }

        const updates: Record<string, unknown> = {
            updated_at: new Date().toISOString(),
        };

        if (category_id !== undefined) updates.category_id = category_id;
        if (name !== undefined) updates.name = name;
        if (slug !== undefined) updates.slug = slug;
        if (sku !== undefined) updates.sku = sku;
        if (price !== undefined) updates.price = price;
        if (description !== undefined) updates.description = description;
        if (features !== undefined) updates.features = features;
        if (specifications !== undefined) updates.specifications = specifications;
        if (images !== undefined) updates.images = images;
        if (variants !== undefined) updates.variants = variants;
        if (is_featured !== undefined) updates.is_featured = is_featured;
        if (is_active !== undefined) updates.is_active = is_active;

        const { data: product, error } = await supabase
            .from('products')
            .update(updates)
            .eq('id', id)
            .select(`
        *,
        category:categories(id, name, slug)
      `)
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}

// DELETE product
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const admin = await getCurrentAdmin();
    const { id } = await params;

    if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Product deleted successfully' });
}
