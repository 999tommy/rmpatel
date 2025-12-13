import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function TractorDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Carousel */}
          <div className="relative">
            <div className="bg-gray-50 rounded-lg overflow-hidden aspect-[4/3] lg:aspect-square">
              <Image
                src="/about3.png"
                alt="Example Tractor"
                fill
                className="object-contain p-8"
              />
            </div>
            {/* Carousel Dots */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              <button className="w-3 h-3 rounded-full bg-red-600"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300"></button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Example Tractor Name
              </h1>
              <div className="flex items-center text-gray-500 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                348103471O
              </div>
            </div>

            <div className="text-3xl font-bold text-blue-900">
              $100,000
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Color:
              </label>
              <div className="flex items-center space-x-3">
                <button className="w-10 h-10 rounded-md bg-red-600 border-2 border-red-700 shadow-sm"></button>
                <button className="w-10 h-10 rounded-md bg-blue-900 border-2 border-transparent hover:border-gray-300"></button>
                <button className="w-10 h-10 rounded-md bg-white border-2 border-transparent hover:border-gray-300"></button>
                <button className="w-10 h-10 rounded-md bg-black border-2 border-transparent hover:border-gray-300"></button>
                <button className="w-10 h-10 rounded-md bg-gray-400 border-2 border-transparent hover:border-gray-300"></button>
              </div>
            </div>

            {/* Wheel Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Wheel size:
              </label>
              <div className="flex flex-wrap gap-2">
                <button className="px-6 py-2 border-2 border-blue-900 bg-white text-blue-900 rounded-md text-sm font-medium">
                  18"
                </button>
                <button className="px-6 py-2 border border-gray-300 bg-white text-gray-700 rounded-md text-sm font-medium hover:border-gray-400">
                  19"
                </button>
                <button className="px-6 py-2 border border-gray-300 bg-white text-gray-700 rounded-md text-sm font-medium hover:border-gray-400">
                  20"
                </button>
                <button className="px-6 py-2 border border-gray-300 bg-white text-gray-700 rounded-md text-sm font-medium hover:border-gray-400">
                  21"
                </button>
                <button className="px-6 py-2 border border-gray-300 bg-white text-gray-700 rounded-md text-sm font-medium hover:border-gray-400">
                  22"
                </button>
              </div>
            </div>

            {/* Engine Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Engine type
              </label>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-2 border-2 border-red-600 bg-white text-red-600 rounded-md text-sm font-medium">
                  Gasoline
                </button>
                <button className="px-6 py-2 border border-gray-300 bg-white text-gray-700 rounded-md text-sm font-medium hover:border-gray-400">
                  Diesel
                </button>
              </div>
            </div>

            {/* Buy Button */}
            <button className="w-full bg-blue-900 text-white py-3 rounded-md text-base font-semibold hover:bg-blue-800 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            Description
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <p>
                At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment. At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment.
              </p>
            </div>
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <p>
                At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment. At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video & Features Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Video Placeholder */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
              <Image
                src="/images/tractor-field-video-thumbnail.jpg"
                alt="Tractor in field"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 left-4 text-white text-sm font-medium tracking-wider">
                VIDEO
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Example Features
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment. At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment. At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment.
              </p>
              
              <div className="mt-8 relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/wholesale3.png"
                  alt="Tractor in yellow field"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-gray-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              You may also like
            </h2>
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/tractor-sunset-field.jpg"
                    alt="Tractor Name"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-gray-900">
                      Tractor Name
                    </h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-lg font-bold text-red-600">$100,000</span>
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/home8.png"
            alt="Irrigation equipment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Your Crops Deserve Consistent, Efficient Watering
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers with the best pricing, fast service, and a comprehensive irrigation solution tailored to your land, goals, and legacy.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Talk to our irrigation specialists
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}