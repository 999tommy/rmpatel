import { supabase } from '@/lib/supabase';
import InquiriesTable from './InquiriesTable';

export default async function AdminInquiriesPage() {
    const { data: inquiries, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        return (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                Error loading inquiries: {error.message}
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Product Inquiries</h1>
            <InquiriesTable initialInquiries={inquiries || []} />
        </div>
    );
}
