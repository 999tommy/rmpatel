import { supabase } from '@/lib/supabase';
import UsersTable from './UsersTable';

export default async function AdminUsersPage() {
    const { data: users, error } = await supabase
        .from('admin_users')
        .select('id, email, name, is_super_admin, created_at')
        .order('created_at', { ascending: true });

    if (error) {
        return (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                Error loading users: {error.message}
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Admin Users</h1>
            <UsersTable initialUsers={users || []} />
        </div>
    );
}
