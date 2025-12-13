import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            {/* Left Content */}
            <div className="max-w-xl">
              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                CONTACT <span className="text-red-600">US</span>
              </h1>

              {/* Description */}
              <div className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8">
                <p>
                  At RM Patel & Partners Ltd, we are committed to supporting agricultural retailers, workshops, exporters, NGOs, and government agencies across East Africa with the best pricing, fast service, and a comprehensive range of high-quality parts and equipment.
                </p>
              </div>

              {/* Browse Models Button */}
              <button className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                Browse Models
              </button>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/contact1.png"
                alt="Agricultural irrigation field"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] pt-32 md:pt-40 lg:pt-48">
        <div className="absolute inset-0 bg-gray-200">
          <Image
            src="/contact2.png"
            alt="Location map"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 -mt-20 relative z-10">
            {/* Address Card */}
            <div className="bg-white shadow-lg p-8 md:p-10 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-200">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <p className="text-gray-600 font-medium">example address name</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white shadow-lg p-8 md:p-10 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-200">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <p className="text-gray-600 font-medium">+374 808 83 045</p>
            </div>

            {/* Email Card */}
            <div className="bg-white shadow-lg p-8 md:p-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <p className="text-gray-600 font-medium">support@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Irrigation Banner */}
      <section className="relative mt-20 md:mt-32">
        <div className="relative h-[300px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/home8.png"
            alt="Irrigation equipment in field"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl">
              Your Crops Deserve Consistent, Efficient Watering
            </h2>
            <p className="text-white text-sm md:text-base mb-6 max-w-2xl">
              Whether you're growing vegetables, cereals, sugarcane or pasture, RM Patel has an irrigation solution tailored to your land, goals, and budget.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
              Talk to our Irrigation Specialist
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}