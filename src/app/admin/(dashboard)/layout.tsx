import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken } from '@/lib/auth';
import AdminSidebar from './components/AdminSidebar';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Check if user is authenticated
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;

    if (!token) {
        redirect('/admin/login');
    }

    const admin = await verifyToken(token);

    if (!admin) {
        redirect('/admin/login');
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminSidebar admin={admin} />
            <div className="lg:pl-64">
                <main className="p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
