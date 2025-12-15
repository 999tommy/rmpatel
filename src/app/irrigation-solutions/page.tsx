import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function IrrigationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Irrigation Solutions for East African Farms — <span className="text-red-600">Efficient Water, Better Yields</span>
                </h1>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                  At RM Agri, we provide tailored irrigation systems that help East African farmers grow more with less water. From drip irrigation to rain guns, our solutions are designed for the unique challenges of the region — helping you save water, boost crop quality, and improve yields, all while keeping costs low.
                </p>
                <button className="bg-blue-900 text-white px-8 py-3 rounded text-sm font-medium hover:bg-blue-800 transition-colors">
                  Request Details
                </button>
              </div>
              <div className="order-1 lg:order-2">
                <Image
                  src="/wholesale1.png"
                  alt="Irrigation field at sunset"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Drip Irrigation Section */}
        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
              Drip Irrigation Systems — <span className="text-red-600">Maximum Water Efficiency, Maximum Yield</span>
            </h2>

            <div className="mt-12">
              <Image
                src="/irrigate1.png"
                alt="Drip irrigation system diagram"
                width={800}
                height={300}
                className="mx-auto w-full max-w-3xl h-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mt-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">High-efficiency emitters and drippers—customized to soil texture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Easily installed and works for any crop type</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Integration-ready with fertigation systems for boosted growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Fully customizable layout for vegetables, orchards, flowers and row crops</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Save up to 60% water vs traditional irrigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Delivers water directly to root zones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Minimizes weed growth and disease from over-watering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Suitable for vegetables, fruits and large-field installations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/products/drip-irrigation-systems" className="inline-block bg-blue-900 text-white px-8 py-3 rounded text-sm font-medium hover:bg-blue-800 transition-colors">
                Explore our Drip Irrigation Products
              </Link>
            </div>
          </div>
        </section>

        {/* Rain Gun Irrigation Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
              Rain Gun Irrigation — <span className="text-red-600">High-Pressure Coverage for Field Crops</span>
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              When you need to cover large, uneven, vegetable, and field-farm areas, offering flexibility for water and nutrient needs in varied terrain.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <Image
                  src="/wholesale3.png"
                  alt="Rain gun irrigation in action"
                  width={600}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Coverage radius from 50m to 80m per gun</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Adjustable nozzle for fine mist or large droplets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Compatible with online pump and pressurized water systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Durable, UV-resistant parts for field longevity</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Fast, uniform coverage over large areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Easy to move and reposition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Requires fewer guns and less frequent moves in semi-arid terrains</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Link href="/products/sprinkler-systems" className="inline-block bg-blue-900 text-white px-8 py-3 rounded text-sm font-medium hover:bg-blue-800 transition-colors">
                    Explore our Rain Gun products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pivot Irrigation Section */}
        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
              Pivot Irrigation Systems — <span className="text-red-600">Scalable Automation for Large Fields</span>
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Center pivot systems are the go-to irrigation method for large-acreage wheat, fertilization and commercial farms. Automated, highly efficient, and built for scale, they're designed for maximum throughput with minimal labor.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Automated pivot arms with smart metering up to 800+</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Remote control for precision irrigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Compatible with variable rate application (VRA) systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">GPS-enabled control panels and remote-tracking via various backends</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Efficient irrigation of 50—300+ acres with one pivot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Saves labor and lowers energy costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Built to last—corrosion-resistant, weather-tolerant materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">—</span>
                    <span className="text-gray-700">Real-time monitoring provides a mobile, friendly interface and updates</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Link href="/products/center-pivot-systems" className="inline-block bg-blue-900 text-white px-8 py-3 rounded text-sm font-medium hover:bg-blue-800 transition-colors">
                    Explore our Pivot Irrigation Products
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <Image
                  src="/wholesale3.png"
                  alt="Pivot irrigation system aerial view"
                  width={600}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-900">
              Why Choose RM Patel for <span className="text-red-600">Irrigation?</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Partnership with leading global irrigation manufacturers</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Integration with pumps, tanks, fertilization, and automation</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Custom-designed systems for any farm, field size or water source</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Proven performance in Kenya, Uganda, Rwanda, and beyond</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Installation, training, and after-sales support included</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="relative bg-gray-900 text-white">
          <div className="absolute inset-0">
            <Image
              src="/home8.png"
              alt="Aerial view of crop irrigation"
              fill
              className="object-cover opacity-60"
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Your Crops Deserve Consistent, Efficient Watering
            </h2>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let us help RM Agri Irrigation experts design a custom irrigation solution that meets the unique needs of your farm.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              Get a Free Irrigation System Quote
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}