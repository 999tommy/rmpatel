'use client'
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
        <section className="relative h-[500px] lg:h-[600px]">
          <Image
            src="/hero.png"
            alt="Tractor in field"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <p className="text-white/90 text-sm mb-3">East Africa's Trusted Home in Tractor Parts & Farm Mechanization</p>
              <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                RM Patel & Partners Ltd
              </h1>
              <p className="text-white/90 text-base lg:text-lg mb-8 leading-relaxed max-w-xl">
                Welcome to RM Patel & Partners Ltd, your reliable partner in farm mechanization and tractor spare parts. With over 40 years of experience, we farm equipment that ensures your agricultural needs are met—quality parts today, sustainable food for Africa tomorrow.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Team
              </Link>
            </div>
          </div>
        </section>

        {/* One-Stop Shop Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Your One-Stop Shop for Tractor<br />Parts and Accessories
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We stock over 7,000 and replacement tractor parts! You've come to the right place. Whether you need parts for routine maintenance, repairs, or performance upgrades, we have you covered.
              </p>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto mb-12">
              {[
                { icon: '/icons/icon1.png', label: 'Filters, hydraulic components & hoses' },
                { icon: '/icons/icon2.png', label: 'Clutches, belts, bearings & gaskets' },
                { icon: '/icons/icon3.png', label: 'Electrical and ignition systems' },
                { icon: '/icons/icon4.png', label: 'Transmission and driveline components' },
                { icon: '/icons/icon5.png', label: 'Engine and cooling parts' },
                { icon: '/icons/icon6.png', label: 'Tools' },
              ].map((category, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-red-600 flex items-center justify-center">
                      <Image
                        src={category.icon}
                        alt={category.label}
                        width={32}
                        height={32}
                        className="w-6 h-6 lg:w-8 lg:h-8"
                      />
                    </div>
                  </div>
                  <p className="text-sm lg:text-base text-gray-900 font-medium">{category.label}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/tractors"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded font-medium hover:bg-blue-800 transition-colors"
              >
                Explore Store
              </Link>
            </div>
          </div>
        </section>

        {/* Why Farmers Trust Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Why Farmers Trust
                </h2>
                <h3 className="text-3xl lg:text-4xl font-bold text-red-600 mb-8">
                  RM Patel & Partners
                </h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Over 40 years of experience in farm equipment and tractor parts',
                    "East Africa's largest selection of tractor parts and accessories",
                    'Knowledgeable and responsive customer support team',
                    'Fast, reliable delivery across East Africa and beyond',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">—</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/tractors"
                  className="inline-block bg-blue-900 text-white px-8 py-3 rounded font-medium hover:bg-blue-800 transition-colors"
                >
                  Explore Store
                </Link>
              </div>
              <div className="relative h-64 md:h-96">
                <Image
                  src="/home1.png"
                  alt="Orange tractor in field"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Brand Logos */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                {[
                  '/logos/logo1.png',
                  '/logos/logo2.png',
                  '/logos/logo3.png',
                  '/logos/logo4.png',
                  '/logos/logo5.png',
                ].map((logo, index) => (
                  <div key={index} className="h-12 relative w-32">
                    <Image
                      src={logo}
                      alt={`Brand logo ${index + 1}`}
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Agriculture Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Committed to Supporting
              </h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-red-600 mb-4">
                Sustainable Agriculture
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our mission is to empower farmers with the latest and technology they need to grow more efficiently. We work closely with clients to provide.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/home2.png"
                    alt="Precision agriculture"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold mb-1">Precision agriculture</h4>
                    <p className="text-sm">solutions (from Topcon)</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm">
                    Whether you're an individual farmer or a smallholder farmer, we're here to support your success with the latest agricultural products and services.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/home3.png"
                    alt="Feed mixers and storage silos"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold mb-1">Feed mixers and storage silos</h4>
                    <p className="text-sm">(from Ageti)</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm">
                    Our mission is to empower farmers with the latest and technology they need to grow more efficiently. We work closely with clients to provide.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/home4.png"
                    alt="Irrigation systems"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-gray-50">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Irrigation systems for smallholders and large farms alike
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our mission is to empower farmers with the latest and technology they need to grow more efficiently. We work closely with clients to provide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shop Online Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Shop Online with Confidence
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We have a feature-rich and East Africa's most experienced online retailer for tractor parts and agricultural implements. We offer:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <div className="text-5xl font-bold text-gray-900 mb-4">01.</div>
                <div className="bg-white rounded-lg p-4 inline-block mb-4">
                  <Image
                    src="/home5.png"
                    alt="M-PESA"
                    width={80}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Secure online shopping</h4>
              </div>

              {/* Card 2 */}
              <div className="bg-black rounded-lg p-8 text-center text-white">
                <div className="text-5xl font-bold mb-4">02.</div>
                <div className="relative h-32 mb-4">
                  <Image
                    src="/home6.png"
                    alt="Quality spare parts"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold">Quality spare parts</h4>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg p-8 text-center shadow-sm relative overflow-hidden">
                <div className="text-5xl font-bold text-gray-900 mb-4">03.</div>
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/home7.png"
                    alt="Expert advice"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Expert advice</h4>
                <p className="text-sm text-gray-600">+254 792 614914</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
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
                RM Patel & Partners – Powering East<br />Africa's Farms for Over 40 Years
              </h2>
              <p className="text-white/90 mb-6">
                Thank you for choosing us as your agricultural parts supplier. We're here to keep your equipment running your crops growing, and your livelihood intact.
              </p>
              <Link
                href="/more"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors"
              >
                Explore More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}