import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');

    let query = supabase
        .from('products')
        .select(`
      *,
      category:categories(id, name, slug)
    `)
        .eq('is_active', true)
        .order('created_at', { ascending: false });

    if (category) {
        // Join with categories to filter by slug
        const { data: categoryData } = await supabase
            .from('categories')
            .select('id')
            .eq('slug', category)
            .single();

        if (categoryData) {
            query = query.eq('category_id', categoryData.id);
        }
    }

    if (featured === 'true') {
        query = query.eq('is_featured', true);
    }

    if (limit) {
        query = query.limit(parseInt(limit, 10));
    }

    const { data: products, error } = await query;

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(products);
}
