import { NextRequest, NextResponse } from 'next/server';
import { authenticateAdmin, createToken, setAuthCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            );
        }

        const result = await authenticateAdmin(email, password);

        if (!result.success || !result.user) {
            return NextResponse.json(
                { error: result.error || 'Authentication failed' },
                { status: 401 }
            );
        }

        const token = await createToken(result.user);
        await setAuthCookie(token);

        return NextResponse.json({
            message: 'Login successful',
            user: {
                id: result.user.id,
                email: result.user.email,
                name: result.user.name,
                is_super_admin: result.user.is_super_admin,
            },
        });
    } catch {
        return NextResponse.json(
            { error: 'Invalid request' },
            { status: 400 }
        );
    }
}
