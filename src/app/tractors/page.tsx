import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProductGrid from '@/components/ProductGrid';

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
            RM Patel & Partners Ltd, we offer a wide selection of field-proven tractors built to handle Africa&apos;s toughest conditions. Whether you&apos;re a smallholder or a large-scale commercial farmer, our trusted lineup delivers the power, reliability, and advanced technology you need.
          </p>
          <p className="text-white/90 text-base md:text-lg mb-8 max-w-3xl mx-auto">
            As exclusive distributors of McCormick and Versatile tractors, we provide Tier 2 to Tier 3-emission-compliant models optimized for East African agricultural environments.
          </p>
          <Link href="#products" className="bg-blue-900 text-white px-8 py-3.5 rounded font-semibold hover:bg-blue-800 transition-colors inline-block">
            Browse Models
          </Link>
        </div>
      </section>

      {/* McCormick Series Sections */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-24 py-16">

        {/* MB Series Sections */}
        <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">MB Series – 85HP</h2>
            <div className="space-y-4 mb-8 mt-6">
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Ideal for smallholder farms, orchards, and general-purpose use</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Simple mechanical design with low maintenance requirements</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Strong hydraulic lift and PTO for implements like ploughs, planters, and sprayers</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Fuel-efficient engines built for long operational hours</span>
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/products/mccormick-mb-series-85hp" className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                View MB Series Models
              </Link>
              <Link href="/contact" className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-50 transition-colors">
                Download Brochure
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] order-1 md:order-2 rounded-lg overflow-hidden">
            <Image
              src="/tractor3.png"
              alt="McCormick MB Series"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* BMAX Series */}
        <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/tractor1.png"
              alt="McCormick BMAX Series"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">BMAX Series – 105HP</h2>
            <div className="space-y-4 mb-8 mt-6">
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Heavy-duty utility tractors ideal for mid-size farming operations</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Available in 2WD and 4WD configurations</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Excellent for tillage, cultivation, planting, and transport tasks</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Strong backup support and high availability of spare parts</span>
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/products/mccormick-bmax-series" className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                View BMAX Series Models
              </Link>
              <Link href="/contact" className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-50 transition-colors">
                Download Brochure
              </Link>
            </div>
          </div>
        </section>

        {/* DMAX Series */}
        <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">DMAX Series (100–125 HP)</h2>
            <div className="space-y-4 mb-8 mt-6">
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Built for demanding fieldwork and multi-purpose use</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Tier 2–3 compliant engines with excellent torque and fuel economy</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Reinforced chassis and axles for tough terrain</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Ideal for ploughing, harrowing, planting, and baling operations</span>
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/products/mccormick-dmax-series" className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                View DMAX Series Models
              </Link>
              <Link href="/contact" className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-50 transition-colors">
                Download Brochure
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] order-1 md:order-2 rounded-lg overflow-hidden">
            <Image
              src="/tractor2.png"
              alt="McCormick DMAX Series"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* GMAX Series */}
        <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/tractor3.png"
              alt="McCormick GMAX Series"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">GMAX Series (125–165 HP)</h2>
            <div className="space-y-4 mb-8 mt-6">
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">High-performance tractors for medium to large-scale commercial farms</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Designed for heavy tillage, haulage, and power-intensive implements</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Proven reliability in sugarcane, cereal, and maize farming sectors</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Robust transmission and strong PTO for multi-use applications</span>
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/products/mccormick-gmax-series" className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                View GMAX Series Models
              </Link>
              <Link href="/contact" className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-50 transition-colors">
                Download Brochure
              </Link>
            </div>
          </div>
        </section>

        {/* X7/X8 Series */}
        <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">X7 and X8 Series (Tier 3 focus)</h2>
            <div className="space-y-4 mb-8 mt-6">
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Premium tractors with advanced hydraulics, comfort cabs, and precision technology</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Suitable for large operations seeking power and efficiency in a modern package</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Available upon request for high-demand environments requiring advanced Tier 3 models</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Ideal for ploughing, harrowing, planting, and baling operations</span>
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/products/mccormick-x7-x8-series" className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                View X Series Models
              </Link>
              <Link href="/contact" className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-50 transition-colors">
                Download Brochure
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] order-1 md:order-2 rounded-lg overflow-hidden">
            <Image
              src="/tractor1.png"
              alt="McCormick X Series"
              fill
              className="object-cover"
            />
          </div>
        </section>

      </div>

      {/* Versatile Header */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Versatile Tractors – Canadian Power<br />
          for <span className="text-red-600">Big Acreage Farming</span>
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto px-4 mt-6 leading-relaxed">
          Versatile tractors are engineered for maximum horsepower, durability, and field productivity. Known for their simplicity, strength, and serviceability, they are the go-to solution for large-scale growers looking for unmatched pulling power and performance. Versatile tractors come with extended service plans and regional support, making them a smart investment for serious growers.
        </p>
      </section>

      {/* Versatile Sections */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 space-y-24 pb-20">

        {/* MFWD Series */}
        <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/tractor2.png"
              alt="Versatile MFWD"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">MFWD Series – 300 - 400 HP</h2>
            <div className="space-y-4 mb-8 mt-6">
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Ideal for large row crop and commercial farms</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">High-capacity hydraulic systems for advanced implements</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Powerful Cummins engines with Tier 3 compliance</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Durable 4x4 driveline with excellent traction and fuel efficiency</span>
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/products/versatile-mfwd-tractors" className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                View MFWD Series Models
              </Link>
              <Link href="/contact" className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-50 transition-colors">
                Download Brochure
              </Link>
            </div>
          </div>
        </section>

        {/* 4WD Series */}
        <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">4WD Series – 400+ HP</h2>
            <div className="space-y-4 mb-8 mt-6">
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Built for heavy tillage, land clearing, and large-scale operations</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Exceptional torque and frame strength for extreme pulling tasks</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Large fuel tanks for extended field time</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="w-4 h-0.5 bg-red-600 mt-3 md:mt-2.5"></span>
                <span className="text-gray-600 leading-relaxed">Designed to work in challenging African terrain with ease</span>
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/products/versatile-4wd-tractors" className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                View 4WD Series Models
              </Link>
              <Link href="/contact" className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-50 transition-colors">
                Download Brochure
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] order-1 md:order-2 rounded-lg overflow-hidden">
            <Image
              src="/tractor3.png"
              alt="Versatile 4WD"
              fill
              className="object-cover"
            />
          </div>
        </section>

      </div>

      {/* Why Buy Section */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Why Buy from <span className="text-red-600">RM Patel & Partners Ltd?</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-red-50 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-2xl font-bold">★</span>
              </div>
              <p className="text-gray-700 font-bold mt-2">Exclusive distributor of McCormick and Versatile in East Africa</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-red-50 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-2xl font-bold">⚙</span>
              </div>
              <p className="text-gray-700 font-bold mt-2">Tractors suitable for all budgets – from smallholder to commercial scale</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-red-50 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-2xl">🚀</span>
              </div>
              <p className="text-gray-700 font-bold mt-2">Wide range of Tier 0 to Tier 3 compliant models</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-red-50 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-2xl">🤝</span>
              </div>
              <p className="text-gray-700 font-bold mt-2">Trusted for over 50 years by thousands of farmers and agribusinesses</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-red-50 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-2xl">🌐</span>
              </div>
              <p className="text-gray-700 font-bold mt-2">Full parts & service support across Kenya, Uganda, Rwanda</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-red-50 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-2xl">✓</span>
              </div>
              <p className="text-gray-700 font-bold mt-2">All our tractors come with a 2,000-hour warranty, with options to extend up to 6,000 hours on high-horsepower models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spare Parts Section */}
      <section className="bg-white py-20 border-t">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2">
              Genuine Spare Parts <span className="text-red-600">Always in Stock</span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              No waiting. No delays. RM Patel stocks thousands of genuine McCormick and Versatile spare parts ready for dispatch. Whether you need filters, hydraulic kits, clutches, or electrical components, we&apos;ve got it—ready for same-day or next-day delivery.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/wholesale3.png"
              alt="Genuine Spare Parts"
              fill
              className="object-cover"
            />
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
              Contact us today and get expert guidance on which tractor fits your needs – and help you implement efficiency and return your investment quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
              <Link href="/contact" className="bg-transparent text-white border-2 border-white px-8 py-3 rounded font-medium hover:bg-white hover:text-blue-900 transition-colors">
                Request Quotation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}