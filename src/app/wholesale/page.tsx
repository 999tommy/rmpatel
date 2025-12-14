import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section - WHOLESALE */}
        <section className="relative bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
              {/* Left Content */}
              <div className="max-w-xl">
                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  WHOLE<span className="text-red-500">SALE</span>
                </h1>

                {/* Description Paragraphs */}
                <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed mb-8">
                  <p>
                    At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, 
                    dealerships, NGOs, and government agencies across East Africa with the best pricing, 
                    fast service, and a comprehensive range of high-quality parts and workmanship.
                  </p>
                  
                  <p>
                    Whether you're sourcing tractor parts in bulk, stocking up for your dealership, or 
                    procuring agricultural machinery through a government project—our Wholesale Program 
                    is designed to provide cost-effective, scalable solutions tailored to your needs.
                  </p>
                  
                  <p>
                    We partner with world-class irrigation manufacturers to deliver robust systems built 
                    for East Africa's soil types, crop diversity, and climate challenges.
                  </p>
                </div>

                {/* Browse Models Button */}
                <button className="bg-[#1e3a8f] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-[#1e3a8f]/90 transition-colors">
                  Browse Models
                </button>
              </div>

              {/* Right Image */}
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/wholesale1.png"
                  alt="Irrigation system"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who Is This Program For Section */}
        <section className="py-16 lg:py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Who Is This Program <span className="text-red-500">For</span>?
            </h2>
            
            <p className="text-gray-600 text-base mb-10">
              Our Wholesale Program is ideal for:
            </p>

            {/* Image Card */}
            <div className="relative h-[350px] lg:h-[450px] rounded-lg overflow-hidden">
              <Image
                src="/wholesale2.png"
                alt="Agricultural equipment dealers"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                <h3 className="text-xl lg:text-2xl font-semibold text-white leading-tight">
                  Agricultural equipment dealers<br />
                  and spare parts shops
                </h3>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 mt-6">
              <button className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-red-500 hover:text-red-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full hover:border-red-500 hover:text-red-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-10 lg:py-10 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              What We <span className="text-red-500">Offer</span>
            </h2>
            <p className="text-gray-600 text-base mb-20 max-w-2xl mx-auto">
              We provide access to thousands of parts and components, including:
            </p>
          </div>
        </section>

        {/* OEM Parts Section with Background */}
        <section className="relative py-20 lg:py-32">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/wholesale3.png"
              alt="Aerial view of farmland"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                OEM and aftermarket tractor spare parts
              </h3>
              <p className="text-white/90 text-sm lg:text-base mb-8 leading-relaxed">
                We offer a plus range of OEM and aftermarket tractor dealership, halting,<br className="hidden lg:block" />
                mechanical components to meet your needs
              </p>
              <button className="bg-[#1e3a8f] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-[#1e3a8f]/90 transition-colors">
                Contact Team
              </button>
            </div>
          </div>
        </section>

        {/* Get Wholesale Pricing Section */}
        <section className="py-16 lg:py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Get Wholesale <span className="text-red-500">Pricing</span>
              </h2>
              <p className="text-gray-600 text-base">
                Our wholesale customers enjoy
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-14">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 text-sm lg:text-base font-normal leading-relaxed">
                  Competitive bulk pricing and<br />
                  volume discounts
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 text-sm lg:text-base font-normal leading-relaxed">
                  Access to exclusive stock<br />
                  and product bundles
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 text-sm lg:text-base font-normal leading-relaxed">
                  Dedicated account management<br />
                  and technical support
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 text-sm lg:text-base font-normal leading-relaxed">
                  Fast order processing and<br />
                  regional delivery options
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <p className="text-gray-600 text-sm lg:text-base mb-6">
                To open a wholesale account or speak with a specialist, please contact:
              </p>
              <button className="bg-[#1e3a8f] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-[#1e3a8f]/90 transition-colors">
                For Wholesale Accounts Contact us
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}