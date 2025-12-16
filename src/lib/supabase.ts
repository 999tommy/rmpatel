import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a mock client for build time when env vars are not available
const createSupabaseClient = (): SupabaseClient => {
    if (!supabaseUrl || !supabaseAnonKey) {
        // Return a minimal mock during build time
        console.warn('Supabase environment variables not configured');
        return createClient('https://placeholder.supabase.co', 'placeholder-key');
    }
    return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = createSupabaseClient();

// Type definitions for database tables
export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    image_url: string | null;
    display_order: number;
    created_at: string;
}

export interface Product {
    id: string;
    category_id: string;
    name: string;
    slug: string;
    sku: string | null;
    price: number | null;
    description: string | null;
    features: string[] | null;
    specifications: Record<string, string> | null;
    images: string[] | null;
    variants: {
        colors?: string[];
        sizes?: string[];
        engine_types?: string[];
    } | null;
    is_featured: boolean;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    category?: Category;
}

export interface Inquiry {
    id: string;
    product_id: string | null;
    product_name: string;
    name: string;
    email: string;
    phone: string | null;
    message: string | null;
    selected_variants: Record<string, string> | null;
    status: 'new' | 'contacted' | 'closed';
    created_at: string;
}

export interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    subject: string | null;
    message: string;
    status: 'new' | 'read' | 'replied';
    created_at: string;
}

export interface AdminUser {
    id: string;
    email: string;
    password_hash: string;
    name: string | null;
    is_super_admin: boolean;
    created_at: string;
    updated_at: string;
}
