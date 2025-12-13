import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function TractorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="/tractor1.png"
          alt="Tractor in field"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tractors for Every Farm – <span className="text-red-500">McCormick & Versatile</span><br />
            Power Solutions
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-4 max-w-3xl mx-auto leading-relaxed">
            RM Patel & Partners Ltd, we offer a wide selection of field-proven tractors built to handle Africa's toughest conditions. Whether you're a smallholder or a large-scale commercial farmer, our trusted lineup delivers the power, reliability, and advanced technology you need to get the job done efficiently and on time.
          </p>
          <p className="text-white/90 text-base md:text-lg mb-8 max-w-3xl mx-auto">
            As exclusive distributors of McCormick and Versatile tractors, we provide Tier 3 to Tier 3-emission-compliant models optimized for East African agricultural environments.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3.5 rounded font-semibold hover:bg-blue-800 transition-colors">
            Browse Models
          </button>
        </div>
      </section>

      {/* McCormick Section Header */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            McCormick Tractors – Italian Engineering,<br />
            <span className="text-red-600">African Toughness</span>
          </h2>
          <p className="text-gray-600 text-lg">
            McCormick tractors are renowned for their rugged build, ease of maintenance, and versatility. Built with simplicity and strength in mind, they offer a perfect balance of performance and affordability for African farmers.
          </p>
        </div>
      </section>

      {/* MB Series */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">MB Series – 85HP</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Ideal for smallholder farms, orchards, and general-purpose use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Simple mechanical design with low maintenance requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Strong hydraulic lift and PTO for implements like ploughs, planters, and sprayers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Fuel-efficient engines built for long operational hours</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-blue-900 text-white px-6 py-2.5 rounded font-medium hover:bg-blue-800 transition-colors">
                  View MB Series Models
                </button>
                <button className="border-2 border-red-600 text-red-600 px-6 py-2.5 rounded font-medium hover:bg-red-50 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/tractor2.png"
                alt="MB Series tractor"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BMAX Series */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <Image
                src="/tractor2.png"
                alt="BMAX Series tractor with hay bales"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">BMAX Series – 105HP</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Heavy-duty utility tractors ideal for mid-size farming operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Available in 2WD and 4WD configurations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Excellent for tillage, cultivation, planting, and transport tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Strong backup support and high availability of spare parts</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-blue-900 text-white px-6 py-2.5 rounded font-medium hover:bg-blue-800 transition-colors">
                  View BMAX Series Models
                </button>
                <button className="border-2 border-red-600 text-red-600 px-6 py-2.5 rounded font-medium hover:bg-red-50 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DMAX Series */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">DMAX Series (100–125 HP)</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Built for demanding fieldwork and multi-purpose use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Tier 2-3 compliant engines with excellent torque and fuel economy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Reinforced chassis and axles for tough terrain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Ideal for ploughing, harrowing, planting, and baling operations</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-blue-900 text-white px-6 py-2.5 rounded font-medium hover:bg-blue-800 transition-colors">
                  View DMAX Series Models
                </button>
                <button className="border-2 border-red-600 text-red-600 px-6 py-2.5 rounded font-medium hover:bg-red-50 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/tractor2.png"
                alt="DMAX Series tractor"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GMAX Series */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <Image
                src="/tractor2.png"
                alt="GMAX Series tractor"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">GMAX Series (125–165 HP)</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">High-performance tractors for medium to large-scale commercial farms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Designed for heavy tillage, haulage, and power-intensive implements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Proven reliability in sugarcane, cereal, and maize farming sectors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Robust transmission and strong PTO for multi-use applications</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-blue-900 text-white px-6 py-2.5 rounded font-medium hover:bg-blue-800 transition-colors">
                  View GMAX Series Models
                </button>
                <button className="border-2 border-red-600 text-red-600 px-6 py-2.5 rounded font-medium hover:bg-red-50 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* X7 and X8 Series */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">X7 and X8 Series (Tier 3 focus)</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Premium tractors with advanced hydraulics, comfort cabs, and precision technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Built for large operations seeking power and efficiency in the field</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Available upon request for high-demand environments requiring advanced Tier 3 models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Ideal for ploughing, harrowing, planting, and baling operations</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-blue-900 text-white px-6 py-2.5 rounded font-medium hover:bg-blue-800 transition-colors">
                  View X Series Models
                </button>
                <button className="border-2 border-red-600 text-red-600 px-6 py-2.5 rounded font-medium hover:bg-red-50 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/tractor2.png"
                alt="X7 and X8 Series tractor"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Versatile Section Header */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Versatile Tractors – Canadian Power<br />
            for <span className="text-red-600">Big Acreage Farming</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Versatile tractors are engineered for maximum horsepower, durability, and field productivity. Known for their simplicity, strength, and unmatched pulling power, they are ideal for large-scale plots and commercial-scale farms with extended service plans and regional support, making them a smart investment for serious growers.
          </p>
        </div>
      </section>

      {/* MFWD Series */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <Image
                src="/tractor2.png"
                alt="MFWD Series tractor"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">MFWD Series – 300 – 400 HP</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Ideal for large row crop and commercial farms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">High-capacity hydraulic systems for advanced implements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Powerful Cummins engines with Tier 3 compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Durable 4x4 drive with excellent traction and fuel efficiency</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-blue-900 text-white px-6 py-2.5 rounded font-medium hover:bg-blue-800 transition-colors">
                  View MFWD Series Models
                </button>
                <button className="border-2 border-red-600 text-red-600 px-6 py-2.5 rounded font-medium hover:bg-red-50 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4WD Series */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">4WD Series – 400+ HP</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Built for heavy tillage, land clearing, and large-scale operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Exceptional torque and frame strength for extreme pulling tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Large fuel tanks for extended field time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Designed to work in challenging African terrain with ease</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-blue-900 text-white px-6 py-2.5 rounded font-medium hover:bg-blue-800 transition-colors">
                  View 4WD Series Models
                </button>
                <button className="border-2 border-red-600 text-red-600 px-6 py-2.5 rounded font-medium hover:bg-red-50 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/tractor2.png"
                alt="4WD Series tractor"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Buy from <span className="text-red-600">RM Patel & Partners Ltd?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">★</span>
              </div>
              <p className="text-gray-700 font-medium">Exclusive distributor of McCormick and Versatile in East Africa</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">⚙</span>
              </div>
              <p className="text-gray-700 font-medium">Wide range of Tier 0 to Tier 3 compliant models</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">🔧</span>
              </div>
              <p className="text-gray-700 font-medium">Full parts & service support across Kenya, Uganda, Rwanda</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">📊</span>
              </div>
              <p className="text-gray-700 font-medium">Tractors suitable for all budgets – from smallholder to commercial scale</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">🤝</span>
              </div>
              <p className="text-gray-700 font-medium">Trusted for over 30 years by thousands of farmers and agribusinesses</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">✓</span>
              </div>
              <p className="text-gray-700 font-medium">All our tractors come with a 2,000+ hour warranty, with options to extend up to 6,000 hours on high-horsepower models.</p>
            </div>
          </div>

          {/* Spare Parts Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Genuine Spare Parts <span className="text-red-600">Always in Stock</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  No waiting. No delays. RM Patel stocks thousands of genuine McCormick and Versatile spare parts readily on demand. Whether you need filters, hydraulic kits, clutches, or electrical components, we are on-site – ready for same-day or next-day delivery.
                </p>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/tractor2.png"
                  alt="Spare parts inventory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-80 lg:h-96">
        <Image
          src="/home8.png"
          alt="Tractor at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
              Ready to Upgrade Your Farm?
            </h2>
            <p className="text-white/90 mb-6">
              Contact us today and get expert guidance on which tractor fits your needs – and help you select exactly the right product for your needs – and help you implement efficiency and return your investment quickly while performance improves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
                Contact Us at +254 792 61418
              </button>
              <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded font-medium hover:bg-white hover:text-blue-900 transition-colors">
                Request Quotation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}