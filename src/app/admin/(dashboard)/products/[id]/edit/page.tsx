'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Category, Product } from '@/lib/supabase';
import ImageUpload from '../../../components/ImageUpload';

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [productImages, setProductImages] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        category_id: '',
        sku: '',
        price: '',
        description: '',
        features: '',
        is_featured: false,
        is_active: true,
        colors: '',
        sizes: '',
        engine_types: '',
    });

    useEffect(() => {
        async function loadData() {
            try {
                // Fetch categories
                const catRes = await fetch('/api/categories');
                const cats = await catRes.json();
                setCategories(cats);

                // Fetch product
                const { id } = await params;
                const prodRes = await fetch(`/api/admin/products/${id}`);

                if (!prodRes.ok) {
                    throw new Error('Product not found');
                }

                const product: Product = await prodRes.json();

                setFormData({
                    name: product.name,
                    slug: product.slug,
                    category_id: product.category_id,
                    sku: product.sku || '',
                    price: product.price?.toString() || '',
                    description: product.description || '',
                    features: product.features?.join('\n') || '',
                    is_featured: product.is_featured,
                    is_active: product.is_active,
                    colors: product.variants?.colors?.join(', ') || '',
                    sizes: product.variants?.sizes?.join(', ') || '',
                    engine_types: product.variants?.engine_types?.join(', ') || '',
                });
                setProductImages(product.images || []);
            } catch (error) {
                console.error('Error loading product:', error);
                alert('Failed to load product');
                router.push('/admin/products');
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, [params, router]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const { id } = await params;

            const variants: Record<string, string[]> = {};
            if (formData.colors) {
                variants.colors = formData.colors.split(',').map((c) => c.trim());
            }
            if (formData.sizes) {
                variants.sizes = formData.sizes.split(',').map((s) => s.trim());
            }
            if (formData.engine_types) {
                variants.engine_types = formData.engine_types.split(',').map((e) => e.trim());
            }

            const response = await fetch(`/api/admin/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    slug: formData.slug,
                    category_id: formData.category_id,
                    sku: formData.sku || null,
                    price: formData.price ? parseFloat(formData.price) : null,
                    description: formData.description || null,
                    features: formData.features
                        ? formData.features.split('\n').filter((f) => f.trim())
                        : null,
                    images: productImages.length > 0 ? productImages : null,
                    variants: Object.keys(variants).length > 0 ? variants : null,
                    is_featured: formData.is_featured,
                    is_active: formData.is_active,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to update product');
            }

            router.push('/admin/products');
        } catch (error) {
            alert(error instanceof Error ? error.message : 'Failed to update product');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-1/4 mb-8" />
                <div className="bg-white rounded-xl p-6 space-y-6">
                    <div className="h-10 bg-gray-200 rounded" />
                    <div className="h-10 bg-gray-200 rounded" />
                    <div className="h-32 bg-gray-200 rounded" />
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8">
                <button
                    onClick={() => router.back()}
                    className="text-gray-600 hover:text-gray-900 flex items-center gap-2 mb-4"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
                <h1 className="text-2xl font-bold text-gray-900">Edit Product</h1>
            </div>

            <form onSubmit={handleSubmit} className="max-w-3xl">
                <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Product Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                URL Slug *
                            </label>
                            <input
                                type="text"
                                name="slug"
                                required
                                value={formData.slug}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category *
                            </label>
                            <select
                                name="category_id"
                                required
                                value={formData.category_id}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            >
                                <option value="">Select a category</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                SKU
                            </label>
                            <input
                                type="text"
                                name="sku"
                                value={formData.sku}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price (USD)
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        />
                        <p className="text-sm text-gray-500 mt-1">Leave empty for &quot;Contact for Price&quot;</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            rows={4}
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-gray-900"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Features (one per line)
                        </label>
                        <textarea
                            name="features"
                            rows={4}
                            value={formData.features}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-gray-900"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Product Images
                        </label>
                        <ImageUpload
                            images={productImages}
                            onImagesChange={setProductImages}
                        />
                    </div>

                    {/* Variants */}
                    <div className="border-t pt-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Variants</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Colors (comma-separated)
                                </label>
                                <input
                                    type="text"
                                    name="colors"
                                    value={formData.colors}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Sizes (comma-separated)
                                </label>
                                <input
                                    type="text"
                                    name="sizes"
                                    value={formData.sizes}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Engine Types (comma-separated)
                                </label>
                                <input
                                    type="text"
                                    name="engine_types"
                                    value={formData.engine_types}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Status */}
                    <div className="border-t pt-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Status</h3>
                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="is_active"
                                    checked={formData.is_active}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">Active (visible on website)</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="is_featured"
                                    checked={formData.is_featured}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">Featured</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                    <button
                        type="submit"
                        disabled={saving}
                        className="bg-blue-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition-colors disabled:opacity-50"
                    >
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="text-gray-600 hover:text-gray-900 px-6 py-2.5"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
