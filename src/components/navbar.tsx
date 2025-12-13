'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const products = [
    { name: 'Tractors', href: '/tractors' },
    { name: 'Implements', href: '/implements' },
    { name: 'Precision Agriculture', href: '/precision-agriculture' },
    { name: 'Irrigation Solutions', href: '/irrigation-solutions' },
    { name: 'Silos', href: '/silos' },
    { name: 'Wholesale', href: '/wholesale' },
  ]

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="RM Patel"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                About
              </Link>
              
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
                  Products
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    {products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/tractors"
                className="bg-blue-900 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-800 transition-colors"
              >
                Browse Models
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <span className="text-lg font-semibold text-gray-900">Menu</span>
                  <button
                    className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Mobile Menu Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                  {/* Mobile Navigation Links */}
                  <div className="space-y-4">
                    <Link
                      href="/"
                      className="block text-gray-700 hover:text-gray-900 text-base font-medium transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="block text-gray-700 hover:text-gray-900 text-base font-medium transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    
                    {/* Mobile Products Section */}
                    <div>
                      <div className="text-gray-700 text-base font-medium mb-3 py-2">Products</div>
                      <div className="pl-4 space-y-3">
                        {products.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            className="block text-gray-600 hover:text-gray-900 text-sm transition-colors py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="block text-gray-700 hover:text-gray-900 text-base font-medium transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>

                  {/* Mobile CTA Button */}
                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      href="/tractors"
                      className="block w-full bg-blue-900 text-white px-6 py-3 rounded text-base font-medium hover:bg-blue-800 transition-colors text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Browse Models
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  )
}