import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <Image
            src="/about1.png"
            alt="About RM Patel Hero"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4">
                About RM Patel & Partners
              </h1>
              <p className="text-white/90 text-lg">
                East Africa's Trusted Partner in Farm Mechanization for Over 40 Years
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Legacy in Agriculture
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With over 40 years of experience, RM Patel & Partners Ltd has established itself as East Africa's most trusted supplier of tractor parts and farm mechanization equipment. Our commitment to quality and service has made us the go-to partner for farmers across the region.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We understand the critical role that reliable equipment plays in modern agriculture. That's why we've dedicated ourselves to providing only the highest quality parts and implements that keep your operations running smoothly and efficiently.
                </p>
              </div>
              <div className="relative h-80 lg:h-96">
                <Image
                  src="/about2.png"
                  alt="Our Legacy"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Impact in Numbers
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">40+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">7,000+</div>
                <p className="text-gray-600">Tractor Parts</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">East</div>
                <p className="text-gray-600">Africa Coverage</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg">
                  <Image
                    src="/icons/icon7.png"
                    alt="Quality"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
                <p className="text-gray-600">We never compromise on the quality of our products and services.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg">
                  <Image
                    src="/icons/icon8.png"
                    alt="Customer Service"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Service</h3>
                <p className="text-gray-600">Our customers are at the heart of everything we do.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg">
                  <Image
                    src="/icons/icon9.png"
                    alt="Integrity"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">We conduct business with honesty and transparency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Partners Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Global Partners
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We partner with leading manufacturers worldwide to bring you the best agricultural equipment and parts.
              </p>
            </div>
            <div className="relative h-64 mb-12">
              <Image
                src="/about3.png"
                alt="Global Partners"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              <div className="relative h-12">
                <Image
                  src="/logos/logo1.png"
                  alt="Partner 1"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12">
                <Image
                  src="/logos/logo2.png"
                  alt="Partner 2"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12">
                <Image
                  src="/logos/logo3.png"
                  alt="Partner 3"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12">
                <Image
                  src="/logos/logo4.png"
                  alt="Partner 4"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12">
                <Image
                  src="/logos/logo5.png"
                  alt="Partner 5"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-12">
                <Image
                  src="/logos/logo6.png"
                  alt="Partner 6"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Expert Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the dedicated professionals who make RM Patel & Partners a leader in agricultural solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/about4.png"
                    alt="Team Member 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team Member</h3>
                <p className="text-gray-600">Agricultural Specialist</p>
              </div>
              <div className="text-center">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/about5.png"
                    alt="Team Member 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team Member</h3>
                <p className="text-gray-600">Technical Support</p>
              </div>
              <div className="text-center">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/about3.png"
                    alt="Team Member 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team Member</h3>
                <p className="text-gray-600">Customer Relations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg">
                  <Image
                    src="/icons/icon10.png"
                    alt="Tractor Parts"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tractor Parts</h3>
                <p className="text-gray-600 text-sm">Comprehensive range of quality parts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg">
                  <Image
                    src="/icons/icon11.png"
                    alt="Technical Support"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Support</h3>
                <p className="text-gray-600 text-sm">Expert assistance when you need it</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg">
                  <Image
                    src="/icons/icon12.png"
                    alt="Training"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Training</h3>
                <p className="text-gray-600 text-sm">Equipment operation and maintenance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-lg">
                  <Image
                    src="/icons/icon13.png"
                    alt="Consultation"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">Farm mechanization solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <Image
            src="/home8.png"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of satisfied farmers who trust RM Patel & Partners for their agricultural needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="bg-transparent text-white border-2 border-white px-8 py-3 rounded font-medium hover:bg-white hover:text-blue-900 transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}