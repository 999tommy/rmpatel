'use client';

import { useState } from 'react';
import { Inquiry } from '@/lib/supabase';

interface InquiriesTableProps {
    initialInquiries: Inquiry[];
}

export default function InquiriesTable({ initialInquiries }: InquiriesTableProps) {
    const [inquiries, setInquiries] = useState(initialInquiries);
    const [statusFilter, setStatusFilter] = useState<string>('all');

    const filteredInquiries = statusFilter === 'all'
        ? inquiries
        : inquiries.filter((i) => i.status === statusFilter);

    const statusColors: Record<string, string> = {
        new: 'bg-green-100 text-green-800',
        contacted: 'bg-blue-100 text-blue-800',
        closed: 'bg-gray-100 text-gray-800',
    };

    const updateStatus = async (id: string, status: string) => {
        try {
            const response = await fetch(`/api/admin/inquiries/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status }),
            });

            if (response.ok) {
                setInquiries(
                    inquiries.map((i) =>
                        i.id === id ? { ...i, status: status as Inquiry['status'] } : i
                    )
                );
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    return (
        <>
            {/* Filter */}
            <div className="mb-6 flex items-center gap-4">
                <span className="text-sm text-gray-600">Filter by status:</span>
                <div className="flex gap-2">
                    {['all', 'new', 'contacted', 'closed'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setStatusFilter(status)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${statusFilter === status
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Product
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Customer
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Contact
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredInquiries.length > 0 ? (
                                filteredInquiries.map((inquiry) => (
                                    <tr key={inquiry.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <p className="font-medium text-gray-900">{inquiry.product_name}</p>
                                            {inquiry.selected_variants && (
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {Object.entries(inquiry.selected_variants).map(([key, value]) => (
                                                        <span key={key} className="mr-2">{key}: {value}</span>
                                                    ))}
                                                </p>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-gray-900">{inquiry.name}</p>
                                            {inquiry.message && (
                                                <p className="text-xs text-gray-500 mt-1 max-w-xs truncate">
                                                    {inquiry.message}
                                                </p>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-gray-600">{inquiry.email}</p>
                                            {inquiry.phone && (
                                                <p className="text-xs text-gray-500">{inquiry.phone}</p>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <select
                                                value={inquiry.status}
                                                onChange={(e) => updateStatus(inquiry.id, e.target.value)}
                                                className={`text-xs font-medium px-2 py-1 rounded ${statusColors[inquiry.status]}`}
                                            >
                                                <option value="new">New</option>
                                                <option value="contacted">Contacted</option>
                                                <option value="closed">Closed</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {new Date(inquiry.created_at).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                        No inquiries found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
