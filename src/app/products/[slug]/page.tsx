'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import InquiryModal from '@/components/InquiryModal';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/lib/supabase';

interface ProductWithRelated extends Product {
    related_products: Product[];
}

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const [product, setProduct] = useState<ProductWithRelated | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
    const [isInquiryOpen, setIsInquiryOpen] = useState(false);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const { slug } = await params;
                const response = await fetch(`/api/products/${slug}`);

                if (!response.ok) {
                    throw new Error('Product not found');
                }

                const data = await response.json();
                setProduct(data);

                // Set default variants
                if (data.variants) {
                    const defaults: Record<string, string> = {};
                    if (data.variants.colors?.[0]) defaults.color = data.variants.colors[0];
                    if (data.variants.sizes?.[0]) defaults.size = data.variants.sizes[0];
                    if (data.variants.engine_types?.[0]) defaults.engine_type = data.variants.engine_types[0];
                    setSelectedVariants(defaults);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [params]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 animate-pulse">
                        <div className="aspect-square bg-gray-200 rounded-xl" />
                        <div className="space-y-6">
                            <div className="h-10 bg-gray-200 rounded w-3/4" />
                            <div className="h-8 bg-gray-200 rounded w-1/4" />
                            <div className="h-4 bg-gray-200 rounded w-1/2" />
                            <div className="h-12 bg-gray-200 rounded w-full" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                    <p className="text-gray-600 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                        Back to Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const images = product.images?.length ? product.images : ['/tractor1.png'];
    const formattedPrice = product.price
        ? new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(product.price)
        : 'Contact for Price';

    // Color mapping for display
    const colorMap: Record<string, string> = {
        red: '#E63946',
        blue: '#1E3A8A',
        white: '#FFFFFF',
        black: '#1A1A1A',
        gray: '#9CA3AF',
        green: '#22C55E',
        orange: '#F97316',
        yellow: '#EAB308',
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Breadcrumb */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-4">
                <nav className="flex items-center space-x-2 text-sm">
                    <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
                    <span className="text-gray-400">/</span>
                    {product.category && (
                        <>
                            <Link href={`/${product.category.slug}`} className="text-gray-500 hover:text-gray-700 capitalize">
                                {product.category.name}
                            </Link>
                            <span className="text-gray-400">/</span>
                        </>
                    )}
                    <span className="text-gray-900 font-medium">{product.name}</span>
                </nav>
            </div>

            {/* Product Section */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="bg-[#F5F5F5] rounded-xl overflow-hidden aspect-square flex items-center justify-center p-8 lg:p-12">
                            <Image
                                src={images[selectedImage]}
                                alt={product.name}
                                width={500}
                                height={500}
                                className="object-contain w-full h-full"
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        {images.length > 1 && (
                            <div className="flex items-center justify-center space-x-2 mt-6">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-colors ${selectedImage === index ? 'bg-red-600' : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6 lg:space-y-8">
                        {/* Title and SKU */}
                        <div>
                            <h1 className="text-3xl lg:text-[40px] lg:leading-tight font-bold text-gray-900 mb-3">
                                {product.name}
                            </h1>
                            {product.sku && (
                                <div className="flex items-center text-gray-500 text-sm">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    {product.sku}
                                </div>
                            )}
                        </div>

                        {/* Price */}
                        <div className="text-[32px] lg:text-[36px] font-bold text-blue-900">
                            {formattedPrice}
                        </div>

                        {/* Color Selection */}
                        {product.variants?.colors && product.variants.colors.length > 0 && (
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-4">
                                    Color: <span className="capitalize">{selectedVariants.color}</span>
                                </label>
                                <div className="flex items-center space-x-3">
                                    {product.variants.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedVariants((prev) => ({ ...prev, color }))}
                                            style={{ backgroundColor: colorMap[color.toLowerCase()] || color }}
                                            className={`w-11 h-11 rounded-lg shadow-sm transition-all ${selectedVariants.color === color
                                                ? 'ring-2 ring-offset-2 ring-blue-900'
                                                : 'hover:scale-110'
                                                } ${color.toLowerCase() === 'white' ? 'border-2 border-gray-300' : ''}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Size Selection */}
                        {product.variants?.sizes && product.variants.sizes.length > 0 && (
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-4">
                                    Wheel size:
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {product.variants.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedVariants((prev) => ({ ...prev, size }))}
                                            className={`px-6 py-2.5 border-2 rounded-lg text-sm font-medium transition-colors ${selectedVariants.size === size
                                                ? 'border-blue-900 bg-white text-blue-900'
                                                : 'border-gray-200 bg-white text-gray-500 hover:border-gray-400'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Engine Type Selection */}
                        {product.variants?.engine_types && product.variants.engine_types.length > 0 && (
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-4">
                                    Engine type:
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {product.variants.engine_types.map((engine) => (
                                        <button
                                            key={engine}
                                            onClick={() => setSelectedVariants((prev) => ({ ...prev, engine_type: engine }))}
                                            className={`px-6 py-2.5 border-2 rounded-lg text-sm font-medium transition-colors ${selectedVariants.engine_type === engine
                                                ? 'border-red-600 bg-white text-red-600'
                                                : 'border-gray-200 bg-white text-gray-500 hover:border-gray-400'
                                                }`}
                                        >
                                            {engine}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Buy Button */}
                        <button
                            onClick={() => setIsInquiryOpen(true)}
                            className="w-full bg-blue-900 text-white py-3.5 rounded-lg text-base font-semibold hover:bg-blue-800 transition-colors"
                        >
                            Request Quote
                        </button>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            {product.description && (
                <section className="bg-gray-50 py-16 lg:py-20">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Description</h2>
                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        </div>
                    </div>
                </section>
            )}

            {/* Video Banner Section */}
            <section className="relative w-full h-[400px] lg:h-[500px]">
                <Image
                    src="/tractor2.png"
                    alt="Product Video"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-widest uppercase">
                        VIDEO
                    </h2>
                </div>
            </section>

            {/* Features Section */}
            {product.features && product.features.length > 0 && (
                <section className="py-16 lg:py-24 max-w-[1440px] mx-auto px-6 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
                                Example Features
                            </h2>
                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment.
                                </p>
                                <ul className="space-y-3">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2.5 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Feature Image */}
                        <div className="relative h-[400px] rounded-xl overflow-hidden">
                            <Image
                                src="/wholesale3.png"
                                alt="Features"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Related Products */}
            {product.related_products && product.related_products.length > 0 && (
                <section className="bg-gray-50 py-16 lg:py-20">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">You may also like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {product.related_products.map((related) => (
                                <ProductCard key={related.id} product={related} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Banner */}
            <section className="relative py-20 lg:py-28">
                <div className="absolute inset-0">
                    <Image
                        src="/home8.png"
                        alt="Irrigation equipment"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative max-w-4xl mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-3xl lg:text-[40px] lg:leading-tight font-bold text-white mb-6">
                        Your Crops Deserve Consistent, Efficient Watering
                    </h2>
                    <p className="text-base lg:text-lg text-white mb-8 max-w-2xl mx-auto leading-relaxed">
                        Whether you&apos;re growing vegetables, cereals, sugarcane or pasture, RM Patel has an irrigation solution tailored to your land, goals, and budget.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-blue-900 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Talk to our irrigation specialists
                    </Link>
                </div>
            </section>

            <Footer />

            {/* Inquiry Modal */}
            <InquiryModal
                product={product}
                isOpen={isInquiryOpen}
                onClose={() => setIsInquiryOpen(false)}
                selectedVariants={selectedVariants}
            />
        </div>
    );
}
