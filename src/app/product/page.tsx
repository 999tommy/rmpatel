import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function TractorDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Section */}
          <div className="relative">
            <div className="bg-[#F5F5F5] rounded-xl overflow-hidden aspect-square flex items-center justify-center p-8 lg:p-12">
              <Image
                src="/about3.png"
                alt="Example Tractor"
                width={400}
                height={400}
                className="object-contain w-full h-full"
              />
            </div>
            {/* Carousel Dots */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              <button className="w-2.5 h-2.5 rounded-full bg-[#E63946]"></button>
              <button className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9]"></button>
              <button className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9]"></button>
              <button className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9]"></button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6 lg:space-y-8">
            {/* Title and SKU */}
            <div>
              <h1 className="text-3xl lg:text-[40px] lg:leading-tight font-bold text-[#1A1A1A] mb-3">
                Example Tractor Name
              </h1>
              <div className="flex items-center text-[#757575] text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                348103471O
              </div>
            </div>

            {/* Price */}
            <div className="text-[32px] lg:text-[36px] font-bold text-[#1E3A8A]">
              $100,000
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-4">
                Color:
              </label>
              <div className="flex items-center space-x-3">
                <button className="w-11 h-11 rounded-lg bg-[#E63946] border-2 border-[#E63946] shadow-sm"></button>
                <button className="w-11 h-11 rounded-lg bg-[#1E3A8A] border-2 border-transparent hover:border-gray-300"></button>
                <button className="w-11 h-11 rounded-lg bg-white border-2 border-gray-300 hover:border-gray-400"></button>
                <button className="w-11 h-11 rounded-lg bg-[#1A1A1A] border-2 border-transparent hover:border-gray-300"></button>
                <button className="w-11 h-11 rounded-lg bg-[#9CA3AF] border-2 border-transparent hover:border-gray-300"></button>
              </div>
            </div>

            {/* Wheel Size */}
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-4">
                Wheel size:
              </label>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-2.5 border-2 border-[#1E3A8A] bg-white text-[#1E3A8A] rounded-lg text-sm font-medium">
                  18"
                </button>
                <button className="px-6 py-2.5 border border-[#E0E0E0] bg-white text-[#757575] rounded-lg text-sm font-medium hover:border-gray-400">
                  19"
                </button>
                <button className="px-6 py-2.5 border border-[#E0E0E0] bg-white text-[#757575] rounded-lg text-sm font-medium hover:border-gray-400">
                  20"
                </button>
                <button className="px-6 py-2.5 border border-[#E0E0E0] bg-white text-[#757575] rounded-lg text-sm font-medium hover:border-gray-400">
                  21"
                </button>
                <button className="px-6 py-2.5 border border-[#E0E0E0] bg-white text-[#757575] rounded-lg text-sm font-medium hover:border-gray-400">
                  22"
                </button>
              </div>
            </div>

            {/* Engine Type */}
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-4">
                Engine type
              </label>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-2.5 border-2 border-[#E63946] bg-white text-[#E63946] rounded-lg text-sm font-medium">
                  Gasoline
                </button>
                <button className="px-6 py-2.5 border border-[#E0E0E0] bg-white text-[#757575] rounded-lg text-sm font-medium hover:border-gray-400">
                  Diesel
                </button>
              </div>
            </div>

            {/* Buy Button */}
            <button className="w-full bg-[#1E3A8A] text-white py-3.5 rounded-lg text-base font-semibold hover:bg-[#1e3a8aee] transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-[#FAFAFA] py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-8">
            Description
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="text-sm text-[#757575] leading-relaxed">
              <p>
                At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment. At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment.
              </p>
            </div>
            <div className="text-sm text-[#757575] leading-relaxed">
              <p>
                At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment. At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative w-full">
        <div className="relative aspect-video">
          <Image
            src="/about2.png"
            alt="Tractor in field"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all cursor-pointer">
              <svg className="w-9 h-9 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute top-6 left-6 text-white text-sm font-semibold tracking-widest">
            VIDEO
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Features Text */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
                Example Features
              </h3>
              <p className="text-sm text-[#757575] leading-relaxed">
                At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment. At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment. At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment.
              </p>
            </div>
            
            {/* Features Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="/wholesale3.png"
                alt="Tractor in yellow field"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-[#FAFAFA] py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
              You may also like
            </h2>
            <div className="flex items-center space-x-3">
              <button className="w-10 h-10 rounded-full border border-[#E0E0E0] bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-[#E63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-[#E0E0E0] bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-[#757575]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/tractor1.png"
                    alt="Tractor Name"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-[#1A1A1A]">
                      Tractor Name
                    </h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-lg font-bold text-[#E63946]">$100,000</span>
                      <svg className="w-4 h-4 text-[#E63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
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
            At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers with the best pricing, fast service, and a comprehensive irrigation solution tailored to your land, goals, and legacy.
          </p>
          <button className="bg-white text-[#1E3A8A] px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Talk to our irrigation specialists
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}