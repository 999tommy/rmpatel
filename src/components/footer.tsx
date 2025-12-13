'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="RM Agri"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          <div className="md:text-right">
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Stay up to date</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="bg-blue-900 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/overview" className="hover:text-gray-900">Overview</Link>
            <Link href="/features" className="hover:text-gray-900">Features</Link>
            <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
            <Link href="/careers" className="hover:text-gray-900">Careers</Link>
            <Link href="/help" className="hover:text-gray-900">Help</Link>
            <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
          </div>
          <div className="flex space-x-6">
            <Link href="/terms" className="hover:text-gray-900">Terms</Link>
            <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
            <Link href="/cookies" className="hover:text-gray-900">Cookies</Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          © 2025 RMAGRI EA. All rights reserved
        </div>
      </div>
    </footer>
  );
}