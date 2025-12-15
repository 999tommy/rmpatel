import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { getCurrentAdmin, hashPassword } from '@/lib/auth';

// GET - List all admin users
export async function GET() {
    const admin = await getCurrentAdmin();

    if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: users, error } = await supabase
        .from('admin_users')
        .select('id, email, name, is_super_admin, created_at')
        .order('created_at', { ascending: true });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(users);
}

// POST - Add new admin user
export async function POST(request: NextRequest) {
    const admin = await getCurrentAdmin();

    if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!admin.is_super_admin) {
        return NextResponse.json(
            { error: 'Only super admins can add new users' },
            { status: 403 }
        );
    }

    try {
        const body = await request.json();
        const { email, password, name, is_super_admin } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Check if email already exists
        const { data: existing } = await supabase
            .from('admin_users')
            .select('id')
            .eq('email', email.toLowerCase())
            .single();

        if (existing) {
            return NextResponse.json(
                { error: 'Email already exists' },
                { status: 400 }
            );
        }

        const password_hash = await hashPassword(password);

        const { data: user, error } = await supabase
            .from('admin_users')
            .insert({
                email: email.toLowerCase(),
                password_hash,
                name: name || null,
                is_super_admin: is_super_admin || false,
            })
            .select('id, email, name, is_super_admin, created_at')
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(user, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}
