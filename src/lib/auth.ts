import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { supabase, AdminUser } from './supabase';

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || 'fallback-secret-key-change-in-production'
);

const COOKIE_NAME = 'admin_token';

export interface JWTPayload {
    id: string;
    email: string;
    is_super_admin: boolean;
    exp?: number;
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
}

// Verify password
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
}

// Create JWT token
export async function createToken(user: AdminUser): Promise<string> {
    return new SignJWT({
        id: user.id,
        email: user.email,
        is_super_admin: user.is_super_admin,
    })
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('24h')
        .sign(JWT_SECRET);
}

// Verify JWT token
export async function verifyToken(token: string): Promise<JWTPayload | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload as unknown as JWTPayload;
    } catch {
        return null;
    }
}

// Get current admin from cookie
export async function getCurrentAdmin(): Promise<JWTPayload | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;

    if (!token) {
        return null;
    }

    return verifyToken(token);
}

// Set auth cookie
export async function setAuthCookie(token: string): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
    });
}

// Clear auth cookie
export async function clearAuthCookie(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
}

// Authenticate admin by email and password
export async function authenticateAdmin(
    email: string,
    password: string
): Promise<{ success: boolean; user?: AdminUser; error?: string }> {
    const { data: user, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email.toLowerCase())
        .single();

    if (error || !user) {
        return { success: false, error: 'Invalid email or password' };
    }

    const isValid = await verifyPassword(password, user.password_hash);

    if (!isValid) {
        return { success: false, error: 'Invalid email or password' };
    }

    return { success: true, user };
}
