import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Implements That Work<br />
                  as <span className="text-red-600">Hard as You Do</span>
                </h1>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  At RM Patel & Partners Ltd, we supply a comprehensive selection of high-performance agricultural implements built to thrive in East Africa's unique farming conditions. From soil preparation to harvesting, our implements are engineered for durability, efficiency, and maximum field productivity.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  We proudly represent Tatu Marchesan (Brazil), Terra Implements (India), and Agro Master (Turkey)—trusted global brands known for their quality, innovation, and reliability.
                </p>
                <button className="bg-[#1e3a5f] text-white px-8 py-3 rounded hover:bg-[#152d4a] font-semibold">
                  Browse Models
                </button>
              </div>
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src="/implement1.png"
                  alt="Tractor with red implement"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tatu Marchesan Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tatu Marchesan<br />
                Implements – <span className="text-red-600">Built for Serious Farming</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                As East Africa's official distributor of Tatu Marchesan, we offer a wide range of mechanization tools suitable for both smallholder and commercial farms. All Tatu implements are built for maximum field efficiency, low maintenance, and long operational life.
              </p>
            </div>

            {/* Disc Harrows */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Disc Harrows
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Available in offset and tandem models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Heavy-duty frames with adjustable disc angles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Ideal for soil preparation and residue management</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#1e3a5f] text-white px-6 py-3 rounded hover:bg-[#152d4a] font-semibold">
                    Explore TATU Harrows
                  </button>
                  <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded hover:bg-red-50 font-semibold">
                    Download Brochure
                  </button>
                </div>
              </div>
              <div className="relative h-[350px] lg:h-[400px]">
                <Image
                  src="/implement2.png"
                  alt="Disc harrow in action"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Mouldboard & Disc Ploughs */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[350px] lg:h-[400px] order-2 lg:order-1">
                <Image
                  src="/implement3.png"
                  alt="Mouldboard plough"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Mouldboard & Disc Ploughs
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Deep and efficient soil penetration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Designed for primary tillage in tough soil conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">2-4 disc configurations available</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#1e3a5f] text-white px-6 py-3 rounded hover:bg-[#152d4a] font-semibold">
                    Explore TATU Ploughs
                  </button>
                  <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded hover:bg-red-50 font-semibold">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>

            {/* Cultivators */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Cultivators
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Rigid and spring-loaded tine options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Excellent for secondary tillage and weed control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">High-strength steel frames for durability</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#1e3a5f] text-white px-6 py-3 rounded hover:bg-[#152d4a] font-semibold">
                    Explore TATU Cultivators
                  </button>
                  <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded hover:bg-red-50 font-semibold">
                    Download Brochure
                  </button>
                </div>
              </div>
              <div className="relative h-[350px] lg:h-[400px]">
                <Image
                  src="/implement4.png"
                  alt="Cultivator"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Sugarcane Implements */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
              <div className="relative h-[350px] lg:h-[400px] order-2 lg:order-1">
                <Image
                  src="/implement5.png"
                  alt="Sugarcane implement"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Sugarcane Implements –<br />
                  Ridgers & Furrowers
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Specialized for sugarcane field management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Accurate row shaping and soil management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Durable and field-tested across East African sugar zones</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#1e3a5f] text-white px-6 py-3 rounded hover:bg-[#152d4a] font-semibold">
                    Explore TATU Sugarcane
                  </button>
                  <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded hover:bg-red-50 font-semibold">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terra Implements Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Terra Implements – Versatile Tools for<br />
                <span className="text-red-600">African Farmers</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Terra Implements offers affordable and reliable solutions for medium farms. We supply Terra's made-in-demand options designed to handle diverse field conditions and crop types.
              </p>
            </div>

            {/* Boom Sprayers */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Boom Sprayers
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Mounted and trailed options available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Tank capacities up to 1000L</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Precision spray nozzles with adjustable booms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Ideal for row crops, sugarcane, and vegetables</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#1e3a5f] text-white px-6 py-3 rounded hover:bg-[#152d4a] font-semibold">
                    Explore Terra Boom Sprayers
                  </button>
                  <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded hover:bg-red-50 font-semibold">
                    Download Brochure
                  </button>
                </div>
              </div>
              <div className="relative h-[350px] lg:h-[400px]">
                <Image
                  src="/implement4.png"
                  alt="Boom sprayer"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Tipping Trailers */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[350px] lg:h-[400px] order-2 lg:order-1">
                <Image
                  src="/implement5.png"
                  alt="Tipping trailer"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Tipping Trailers
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Single-axle and dual-axle models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Hydraulic tipping system for easy unloading</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">—</span>
                    <span className="text-gray-700">Ideal for transporting produce, feed, fertilizer and farm waste</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#1e3a5f] text-white px-6 py-3 rounded hover:bg-[#152d4a] font-semibold">
                    Explore Terra Tipping Trailers
                  </button>
                  <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded hover:bg-red-50 font-semibold">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agro Master Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Agro Master Implements – Turkish<br />
                Innovation, <span className="text-red-600">African Value</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
                We are proud to supply Agro Master, known for affordable, durable implements trusted by thousands of farmers globally. Agro Master products are ideal for:
              </p>
            </div>

            {/* Icon Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-600 bg-opacity-10 rounded-full flex items-center justify-center border border-red-200">
                  <svg className="w-8 h-8" stroke="white" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">Soil preparation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-600 bg-opacity-10 rounded-full flex items-center justify-center border border-red-200">
                  <svg className="w-8 h-8" stroke="white" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5m0 9l-2-2m0 0l2-2m-2 2l2 2" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">Fertilizer spreading</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-600 bg-opacity-10 rounded-full flex items-center justify-center border border-red-200">
                  <svg className="w-8 h-8" stroke="white" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2m0 0l-2-2m2 2l2-2m-2 2h6a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2h6m-2 8v2m0 0v-2m0 2h4" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">Crop spraying</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-600 bg-opacity-10 rounded-full flex items-center justify-center border border-red-200">
                  <svg className="w-8 h-8" stroke="white" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">Seed bed management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-600 bg-opacity-10 rounded-full flex items-center justify-center border border-red-200">
                  <svg className="w-8 h-8" stroke="white" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">Harvesting</p>
              </div>
            </div>

            <div className="text-center mb-16">
              <button className="bg-[#1e3a5f] text-white px-8 py-3 rounded hover:bg-[#152d4a] font-semibold">
                Explore Agro Master Implements
              </button>
            </div>

            {/* Popular Implements Carousel */}
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                <span className="text-red-600">Popular Implements</span> include:
              </h3>
            </div>

            <div className="relative">
              <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
                <div className="flex-none w-[280px] snap-start">
                  <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/tractor2.png"
                      alt="Rotary tillers"
                      fill
                      className="object-cover"
                    />
                    
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-900">Rotary tillers</h4>
                    <button className="text-red-600 font-semibold flex items-center gap-1">
                      Explore →
                    </button>
                  </div>
                </div>

                <div className="flex-none w-[280px] snap-start">
                  <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/tractor2.png"
                      alt="Subsoilers"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-900">Subsoilers</h4>
                    <button className="text-red-600 font-semibold flex items-center gap-1">
                      Explore →
                    </button>
                  </div>
                </div>

                <div className="flex-none w-[280px] snap-start">
                  <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/tractor2.png"
                      alt="Fertilizer spreaders"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-900">Fertilizer spreaders</h4>
                    <button className="text-red-600 font-semibold flex items-center gap-1">
                      Explore →
                    </button>
                  </div>
                </div>

                <div className="flex-none w-[280px] snap-start">
                  <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/tractor2.png"
                      alt="Mowers"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-900">Mowers</h4>
                    <button className="text-red-600 font-semibold flex items-center gap-1">
                      Explore →
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-0 flex gap-2">
                <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50">
                  ←
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50">
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">
              Why Choose Implements from <span className="text-red-600">RM Patel & Partners?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10" stroke="#dc2626" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Exclusive access to Tatu Marchesan, Terra Implements, and Agro Master</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10" stroke="#dc2626" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.366 18.364A9 9 0 005.634 5.634m12.732 12.732A9 9 0 015.634 5.634m12.732 12.732L5.634 5.634" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Expert support for sizing and field matching</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10" stroke="#dc2626" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Implements tailored to East African soil and crop types</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10" stroke="#dc2626" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Spare parts and after-sales service from stock</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10" stroke="#dc2626" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Full compatibility with major tractor brands</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0">
            <Image
              src="/home8.png"
              alt="Tractor background"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Equip Your Tractor?
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Our implement specialists are ready to help you match the right tool to your crop, soil, and tractor. Contact us today or visit our showroom to review our full lineup.
            </p>
            <button className="bg-white text-[#1e3a5f] px-8 py-3 rounded hover:bg-gray-100 font-semibold">
              Talk to an Implements Expert
            </button>
          </div>
        </section>
         </main>
      <Footer />
    </div>
  );
}