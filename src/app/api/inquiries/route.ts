import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { product_id, product_name, name, email, phone, message, selected_variants } = body;

        // Validate required fields
        if (!product_name || !name || !email) {
            return NextResponse.json(
                { error: 'Missing required fields: product_name, name, email' },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        const { data, error } = await supabase
            .from('inquiries')
            .insert({
                product_id: product_id || null,
                product_name,
                name,
                email: email.toLowerCase(),
                phone: phone || null,
                message: message || null,
                selected_variants: selected_variants || null,
                status: 'new',
            })
            .select()
            .single();

        if (error) {
            console.error('Error creating inquiry:', error);
            return NextResponse.json(
                { error: 'Failed to submit inquiry' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Inquiry submitted successfully', inquiry: data },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            { error: 'Invalid request body' },
            { status: 400 }
        );
    }
}
