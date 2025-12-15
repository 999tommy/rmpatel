import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { getCurrentAdmin, hashPassword } from '@/lib/auth';

// PUT - Update admin user
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const admin = await getCurrentAdmin();
    const { id } = await params;

    if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Only super admin can edit others, or user can edit themselves
    if (!admin.is_super_admin && admin.id !== id) {
        return NextResponse.json(
            { error: 'You can only edit your own profile' },
            { status: 403 }
        );
    }

    try {
        const body = await request.json();
        const { email, password, name, is_super_admin } = body;

        const updates: Record<string, unknown> = {
            updated_at: new Date().toISOString(),
        };

        if (email) updates.email = email.toLowerCase();
        if (name !== undefined) updates.name = name;
        if (password) updates.password_hash = await hashPassword(password);

        // Only super admin can change super_admin status
        if (admin.is_super_admin && is_super_admin !== undefined) {
            updates.is_super_admin = is_super_admin;
        }

        const { data: user, error } = await supabase
            .from('admin_users')
            .update(updates)
            .eq('id', id)
            .select('id, email, name, is_super_admin, created_at, updated_at')
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}

// DELETE - Remove admin user
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const admin = await getCurrentAdmin();
    const { id } = await params;

    if (!admin) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!admin.is_super_admin) {
        return NextResponse.json(
            { error: 'Only super admins can delete users' },
            { status: 403 }
        );
    }

    // Prevent deleting yourself
    if (admin.id === id) {
        return NextResponse.json(
            { error: 'You cannot delete your own account' },
            { status: 400 }
        );
    }

    const { error } = await supabase
        .from('admin_users')
        .delete()
        .eq('id', id);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'User deleted successfully' });
}
