import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Powering East Africa's Agriculture for Over <span className="text-red-600">50 Years</span>
              </h1>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                At RM Patel & Partners Ltd, we are proud to be one of East Africa's most trusted suppliers of tractor parts and agricultural equipment. With a legacy dating back to the 1960s, we have evolved from a humble ironmongery business into a regional powerhouse in agricultural support services.
              </p>
              <button className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                Browse Models
              </button>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/about1.png"
                alt="Woman harvesting berries"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Our Story: From Ironmongers to Agri-Industry Leaders
            </h2>
          </div>
          
          <div className="space-y-6 mb-12 max-w-5xl mx-auto">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-center">
              Founded in the 1960s, our journey began with conducting work and fabrication for the local community. As the region's farming landscape evolved, so did we—redefining our identity. Spare, chain stores, and eventually full-scale mechanization services.
            </p>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-center">
              Today, we are a third-generation family-owned enterprise with a strong foothold across Kenya, Uganda, Rwanda, and beyond. Our growth has been guided by a deep commitment to serving farmers of all sizes - from smallholders to large agribusinesses.
            </p>
          </div>

          {/* Full Width Video Image */}
          <div className="relative w-full aspect-video">
            <Image
              src="/about2.png"
              alt="Tractors working in field"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 px-8 py-4 rounded-lg">
                <span className="text-2xl font-bold text-gray-900">VIDEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partnerships Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Global Partnerships
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              RM Patel & Partners Ltd proudly holds exclusive distributorships for global agricultural leaders, including:
            </p>
          </div>

          {/* Partner Logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center mb-12">
            <div className="flex items-center justify-center h-16">
              <img src="/logos/logo1.png" alt="Ovenlasu" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/logos/logo2.png" alt="CNH" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/logos/logo3.png" alt="Federal Mogul" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/logos/logo4.png" alt="SPAREX" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/logos/logo5.png" alt="Versatile" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-center h-16">
              <img src="/logos/logo6.png" alt="Mecon" className="max-h-full max-w-full object-contain" />
            </div>
          </div>

          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            These partnerships enable us to offer world-class machinery, implements, and spare parts, backed by the most robust after-sales service in the region.
          </p>
        </div>
      </section>

      {/* Why Farmers Choose Us Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Farmers Choose Us
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 text-base lg:text-lg">Over 50 years of industry experience</p>
              </div>
              
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 text-base lg:text-lg">Trusted distributor of top international brands</p>
              </div>
              
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 text-base lg:text-lg">Deep roots across Kenya, Uganda, Rwanda, and East Africa</p>
              </div>
              
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <p className="text-gray-700 text-base lg:text-lg">Solutions for both smallholder farmers and commercial operations</p>
              </div>
              
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 text-base lg:text-lg">Commitment to sustainable farming and agricultural innovation</p>
              </div>
              
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 text-base lg:text-lg">Unmatched customer support, trading, and after-sales service</p>
              </div>
            </div>

            {/* Right - Tractor Image */}
            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src="/about3.png"
                alt="Modern tractor"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide a full spectrum of agricultural and industrial services, including:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Affordable mechanization for smallholder farmers
              </h3>
            </div>

            {/* Service 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                High-end solutions through global partners from India, USA, and Brazil
              </h3>
            </div>

            {/* Service 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Farm development services: land surveys, topography, and planning
              </h3>
            </div>

            {/* Service 4 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sustainable agriculture and crop diversification strategies
              </h3>
            </div>

            {/* Service 5 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Irrigation systems tailored to African conditions
              </h3>
            </div>

            {/* Service 6 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Forestry and valley management support
              </h3>
            </div>

            {/* Service 7 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Water conservation and smart irrigation
              </h3>
            </div>

            {/* Service 8 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Precision agriculture technologies (Topcon guidance and data tools)
              </h3>
            </div>

            {/* Service 9 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Dairy operation solutions, including feed mixers and silos (Agroil)
              </h3>
            </div>

            {/* Service 10 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Post-harvest crop management and storage solutions
              </h3>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
              Join the Team
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Values
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our mission is simple: to empower East African farmers with access to the best agricultural technologies, support services, and maintenance tools available globally. We believe in:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-6 bg-red-600 flex-shrink-0 mt-1"></div>
                  <p className="text-gray-700">Integrity in every transaction</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-6 bg-red-600 flex-shrink-0 mt-1"></div>
                  <p className="text-gray-700">Customer satisfaction through responsive service</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-6 bg-red-600 flex-shrink-0 mt-1"></div>
                  <p className="text-gray-700">Partnerships that create long-term value</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-6 bg-red-600 flex-shrink-0 mt-1"></div>
                  <p className="text-gray-700">Sustainability in everything we do</p>
                </div>
              </div>

              <button className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                Join the Team
              </button>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/about4.png"
                alt="Tractor in field"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative h-80 lg:h-96">
        <Image
          src="/home8.png"
          alt="Agricultural landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
              Our Commitment to You
            </h2>
            <p className="text-white/90 mb-6">
              At RM Patel & Partners Ltd, we are more than just a supplier—we are your long-term agricultural partner. Our skilled and experienced team is dedicated to deliver reliable products, technical expertise, and support every step of the way.
            </p>
            <button className="inline-block bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors">
              Explore Store
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}