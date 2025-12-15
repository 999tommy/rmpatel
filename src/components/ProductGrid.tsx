'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/lib/supabase';

interface ProductGridProps {
    category?: string;
    featured?: boolean;
    limit?: number;
    title?: string;
    showViewAll?: boolean;
    viewAllHref?: string;
}

export default function ProductGrid({
    category,
    featured,
    limit,
    title,
    showViewAll = false,
    viewAllHref,
}: ProductGridProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const params = new URLSearchParams();
                if (category) params.set('category', category);
                if (featured) params.set('featured', 'true');
                if (limit) params.set('limit', limit.toString());

                const response = await fetch(`/api/products?${params.toString()}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [category, featured, limit]);

    if (loading) {
        return (
            <div className="py-12">
                {title && (
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
                        {title}
                    </h2>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(limit || 4)].map((_, i) => (
                        <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse">
                            <div className="aspect-[4/3] bg-gray-200" />
                            <div className="p-5 space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-3/4" />
                                <div className="h-4 bg-gray-200 rounded w-1/2" />
                                <div className="h-6 bg-gray-200 rounded w-1/3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-12 text-center">
                <p className="text-red-600">Error loading products: {error}</p>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="py-12 text-center">
                {title && (
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                )}
                <p className="text-gray-600">No products available at the moment.</p>
            </div>
        );
    }

    return (
        <div className="py-12">
            {title && (
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {title}
                    </h2>
                    {showViewAll && viewAllHref && (
                        <a
                            href={viewAllHref}
                            className="text-blue-900 font-medium hover:text-blue-800 flex items-center gap-1"
                        >
                            View All
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    )}
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} showCategory={!category} />
                ))}
            </div>
        </div>
    );
}
