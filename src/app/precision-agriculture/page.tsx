import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function TopconSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          <Image
            src="/tractor1.png"
            alt="Tractor in field"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Topcon Guidance & Feed Management
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-6">
              Solutions for Farming
            </h2>
            <p className="text-white text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
              A complete GPS guidance and feed management solution for modern farms. Designed to improve efficiency, reduce waste, and maximize yields through precision agriculture technology that integrates seamlessly with your existing equipment.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded font-medium hover:bg-blue-800 transition">
              Browse Models
            </button>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Key Features:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Real-time on-the-field data guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Compatible with McCormick and Versatile tractors and brands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Auto-steering and automated guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Coverage mapping and overlap reduction</span>
                  </li>
                </ul>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-8">
                  Benefits:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Save on time, resources and reduced fuel, seeds, and chemical costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Improve field efficiency and operator comfort</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Ensure consistent and accurate application to field in low-visibility conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Compatible with most major brands and equipment brands</span>
                  </li>
                </ul>

                <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition">
                  Explore our Topcon Guidance Solutions
                </button>
              </div>

              <div className="relative h-[400px] md:h-[600px]">
                <Image
                  src="/wholesale2.png"
                  alt="Aerial view of crop spraying"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Topcon Feed Management Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Topcon Feed Management – Precision
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-red-600">
                for Livestock Nutrition
              </h3>
              <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                Topcon's integrated AI Feed Management Solutions provide accurate, coordinated mixed rations to enhance your herd's nutrition at every step, ensuring efficient feed distribution and maximizing animal health.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/wholesale2.png"
                  alt="Aerial view of tractor in field"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Key Features:
                </h3>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Bluetooth-enabled weighing systems for feed mixers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Recipe app interface for easy checking and real-time monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Integration with herd management software</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Compatible with major mixer wagon brands including Kuhn</span>
                  </li>
                </ul>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Benefits:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Save time and effort on up to 50%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Track accuracy in nutrition performance and low weight grains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Improves feed accuracy for optimum cow feeding grains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-gray-700">Capacity reports by location, cycle, efficiency testing health</span>
                  </li>
                </ul>

                <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition">
                  Explore our Topcon Solutions Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Full Installation & Training Support */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Full Installation & Training Support
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-red-600">
                Across East Africa
              </h3>
              <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                Whether you're managing herds or feeding cattle, our goal is to help you maximize every farm and every kilogram of feed. When you buy Topcon solutions from RM Patel, you get:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-red-50 rounded-lg">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">On-site installation</h4>
                <p className="text-sm text-gray-600">and calibration</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-red-50 rounded-lg">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Operator and</h4>
                <p className="text-sm text-gray-600">technician training</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-red-50 rounded-lg">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Technical support and</h4>
                <p className="text-sm text-gray-600">remote troubleshooting</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-red-50 rounded-lg">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Grain and cereal growers</h4>
                <p className="text-sm text-gray-600">seeking precise seeding and input placement</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                Combine <span className="text-red-600">Topcon</span> with:
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-[300px] rounded-lg overflow-hidden group">
                  <Image
                    src="/silo6.png"
                    alt="Mobile app in field"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8 px-4">
                    <div className="text-center">
                      <span className="text-white text-5xl font-bold mb-2 block">01.</span>
                      <p className="text-white text-lg font-semibold">
                        McCormick or<br />Versatile tractors
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative h-[300px] rounded-lg overflow-hidden group">
                  <Image
                    src="/silo5.png"
                    alt="Feed mixers and silos"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8 px-4">
                    <div className="text-center">
                      <span className="text-white text-5xl font-bold mb-2 block">02.</span>
                      <p className="text-white text-lg font-semibold">
                        Feed mixers and<br />silos from Agacli
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative h-[300px] rounded-lg overflow-hidden group">
                  <Image
                    src="/contact1.png"
                    alt="Precision spraying in greenhouse"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8 px-4">
                    <div className="text-center">
                      <span className="text-white text-5xl font-bold mb-2 block">03.</span>
                      <p className="text-white text-lg font-semibold">
                        Implements and<br />sprayers for precision<br />coverage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose RM Patel */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Why Choose RM Patel for
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-red-600">
                Topcon Agriculture Solutions?
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-lg">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    East Africa's trusted supplier of Topcon precision technology
                  </h4>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-lg">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Real-time support and genuine Topcon spare parts in stock
                  </h4>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-lg">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Full support team: consultation, installation, training, and after-sales
                  </h4>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-lg">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Solutions for smallholders, cooperatives, and large agribusinesses
                  </h4>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-lg">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Compatible with local and international farm equipment brands
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative h-80 lg:h-96 w-full">
          <Image
            src="/home8.png"
            alt="Tractor harvesting in field"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
                Ready to Take Control of Your Fields and Feed?
              </h2>
              <p className="text-white/90 mb-6">
                Join the growing number of farmers across East Africa using Topcon to boost yields, reduce costs, and improve consistency.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors">
                Speak to Our Precision Ag Specialists
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}