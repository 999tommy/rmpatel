'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/supabase';

interface ProductCardProps {
    product: Product;
    showCategory?: boolean;
}

export default function ProductCard({ product, showCategory = false }: ProductCardProps) {
    const mainImage = product.images?.[0] || '/tractor1.png';
    const formattedPrice = product.price
        ? new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(product.price)
        : 'Contact for Price';

    return (
        <Link href={`/products/${product.slug}`} className="group">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                        src={mainImage}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.is_featured && (
                        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                            Featured
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                    {showCategory && product.category && (
                        <span className="text-red-600 text-xs font-medium uppercase tracking-wide mb-1">
                            {product.category.name}
                        </span>
                    )}

                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors line-clamp-2">
                        {product.name}
                    </h3>

                    {product.description && (
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">
                            {product.description}
                        </p>
                    )}

                    <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl font-bold text-blue-900">
                            {formattedPrice}
                        </span>
                        <span className="text-red-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            View Details
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
