import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function AgacliSilosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
        
      <main>  
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-[#e63946]">Agacli Silos</span> – Reliable Grain & Forage Storage Solutions for African Farmers
              </h1>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At RM Patel & Partners Ltd, we proudly offer Agacli Silos—trusted across the world for their durability, precision, and cost-efficiency. Whether you're storing grain, silage, or forage, you're securing a system built to last—ensuring long-term storage reliability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Built with European standards and adapted for African conditions, Agacli hopper silos and silage silos are the smart choice for grain traders, cooperatives, feed processors, and commercial farmers.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/silo1.png"
                alt="Tractor with Agacli equipment"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Hopper Silos Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            {/* Title and Description */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Hopper Silos – Efficient Bulk Storage with <span className="text-[#e63946]">Fast Discharge</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Hopper bottom silos are ideal for clean, controlled discharge of dry grains such as maize, sorghum, wheat, barley, and soybeans. Designed for both short and long-term storage, these silos are perfect for commercial farms, grain buyers, and millers.
              </p>
            </div>

            {/* Horizontal Layout: Key Features, Image, Benefits */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
              {/* Key Features */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#e63946] mt-1">—</span>
                    <span className="text-gray-700 text-sm">Capacities from 50 to 1,000 tons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e63946] mt-1">—</span>
                    <span className="text-gray-700 text-sm">45° and 60° hopper angles for smooth grain flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e63946] mt-1">—</span>
                    <span className="text-gray-700 text-sm">Hot-dip galvanized steel for maximum corrosion resistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e63946] mt-1">—</span>
                    <span className="text-gray-700 text-sm">Ventilation systems, ladders, and roof vents included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e63946] mt-1">—</span>
                    <span className="text-gray-700 text-sm">Modular design – easy to install and expand</span>
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="relative flex-shrink-0 mx-auto lg:mx-0">
                <Image
                  src="/silo2.png"
                  alt="Hopper silo"
                  width={500}
                  height={700}
                  className="w-full h-auto max-w-[400px]"
                />
              </div>

              {/* Benefits */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#e63946] mt-1">—</span>
                    <span className="text-gray-700 text-sm">Reduces grain damage and loss during unloading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e63946] mt-1">—</span>
                    <span className="text-gray-700 text-sm">Minimizes cleaning and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e63946] mt-1">—</span>
                    <span className="text-gray-700 text-sm">Compatible with augers, conveyors, and weighing systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#e63946] mt-1">—</span>
                    <span className="text-gray-700 text-sm">Suitable for loading into trucks, bagging lines, or processing units</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Button */}
            <div className="text-center mt-12">
              <button className="bg-[#1e3a5f] text-white px-8 py-3 rounded hover:bg-[#152b47] transition-colors">
                Explore Our Hopper Silo Range
              </button>
            </div>
          </div>
        </section>

        {/* Silage Silos Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <Image
                  src="/silo3.png"
                  alt="Silage silos"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Silage Silos – Preserve Your <span className="text-[#e63946]">Forage with Confidence</span>
                </h2>
                <p className="text-gray-600 mb-12 leading-relaxed">
                  Silage silos from Agacli are designed to preserve the nutritional value of forage crops like maize sorghum, and grasses. They offer excellent airtightness, three various storage systems and ensure consistent high-quality silage throughout the year.
                </p>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <span className="text-[#e63946] mt-1">—</span>
                      <span className="text-gray-700 text-sm">High-strength steel and sealed roof for anaerobic storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e63946] mt-1">—</span>
                      <span className="text-gray-700 text-sm">Available with compression rings and fermentation lock</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e63946] mt-1">—</span>
                      <span className="text-gray-700 text-sm">Equalthermie surfaces for slow discharge and clamping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e63946] mt-1">—</span>
                      <span className="text-gray-700 text-sm">Custom heights and diameter options to suit land availability</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#e63946] mt-1">—</span>
                      <span className="text-gray-700 text-sm">Preserves moisture and nutrients for longer feeding periods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e63946] mt-1">—</span>
                      <span className="text-gray-700 text-sm">Protects against weather and animal waste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e63946] mt-1">—</span>
                      <span className="text-gray-700 text-sm">Reduces silences in foggiest or unperfect feed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e63946] mt-1">—</span>
                      <span className="text-gray-700 text-sm">Built to integration with digital feed mixers and feed automatic systems</span>
                    </li>
                  </ul>
                </div>

                <button className="mt-8 bg-[#1e3a5f] text-white px-8 py-3 rounded hover:bg-[#152b47] transition-colors">
                  Explore Our Silo Range
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Solutions Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
              Custom Solutions for <span className="text-[#e63946]">East African Farmers</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              We understand that storage needs vary across different farm sizes and commodities. That's why we offer:
            </p>

            {/* Video Banner */}
            <section className="relative h-64 md:h-96">
              <Image
                src="/silo4.png"
                alt="Custom solutions video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8 px-4">
                <div className="text-center">
                  <div className="bg-white bg-opacity-90 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#e63946]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-xl font-semibold tracking-wide">VIDEO</p>
                </div>
              </div>
            </section>

            {/* Three Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#e63946] bg-opacity-10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" stroke="white" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">On-site consultation and sizing</h3>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#e63946] bg-opacity-10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" stroke="white" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Installation support and training</h3>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#e63946] bg-opacity-10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" stroke="white" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom silo configurations</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Combine Agacli Silos Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Combine Agacli silos with:
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src="/silo5.png"
                  alt="Conveyors and elevators"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8 px-4">
                  <div className="text-center">
                    <span className="text-white text-sm font-semibold mb-2 block">01.</span>
                    <h3 className="text-white text-xl font-bold">Conveyors & Elevators</h3>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src="/silo6.png"
                  alt="Bagging machines"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8 px-4">
                  <div className="text-center">
                    <span className="text-white text-sm font-semibold mb-2 block">02.</span>
                    <h3 className="text-white text-xl font-bold">Bagging machines</h3>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src="/wholesale2.png"
                  alt="Grain cleaners"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8 px-4">
                  <div className="text-center">
                    <span className="text-white text-sm font-semibold mb-2 block">03.</span>
                    <h3 className="text-white text-xl font-bold">Grain cleaners</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
              Why Choose Agacli Silos from <span className="text-[#e63946]">RM Patel & Partners?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#e63946] bg-opacity-10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" stroke="white" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Exclusive East Africa supplier of Agacli Silos</h3>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#e63946] bg-opacity-10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" stroke="white" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">We provide support for installations, cooperatives, and commercial operations</h3>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#e63946] bg-opacity-10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" stroke="white" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Full range of spare parts and accessories in stock</h3>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#e63946] bg-opacity-10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" stroke="white" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Durable European-build quality adapted for local conditions</h3>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex gap-4 md:col-span-2">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#e63946] bg-opacity-10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" stroke="white" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">End-to-end support: consultation, supply, installation, and service</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 md:py-32">
          <Image
            src="/home8.png"
            alt="Ready to improve storage"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Improve Your Grain or Forage Storage?
            </h2>
            <p className="text-white text-lg mb-8 opacity-90">
              Contact us today to learn how Agacli Silos can transform your farm or post-harvest operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-[#e63946]"
              />
              <button className="bg-[#1e3a5f] text-white px-8 py-3 rounded hover:bg-[#152b47] transition-colors whitespace-nowrap w-full sm:w-auto">
                Subscribe
              </button>
            </div>
            <button className="mt-6 text-white underline hover:text-gray-200 transition-colors">
              Speak to Our Post-Harvest Specialist
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}