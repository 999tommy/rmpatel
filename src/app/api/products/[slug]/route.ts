import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;

    const { data: product, error } = await supabase
        .from('products')
        .select(`
      *,
      category:categories(id, name, slug)
    `)
        .eq('slug', slug)
        .eq('is_active', true)
        .single();

    if (error || !product) {
        return NextResponse.json(
            { error: 'Product not found' },
            { status: 404 }
        );
    }

    // Also fetch related products from same category
    const { data: relatedProducts } = await supabase
        .from('products')
        .select('id, name, slug, price, images')
        .eq('category_id', product.category_id)
        .eq('is_active', true)
        .neq('id', product.id)
        .limit(4);

    return NextResponse.json({
        ...product,
        related_products: relatedProducts || [],
    });
}
