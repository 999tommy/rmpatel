import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-16">
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
                  src="/tractor1.png"
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
                  src="/tractor2.png"
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
                  src="/tatu-mouldboard-plough.jpg"
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
                  src="/tatu-cultivator-in-field.jpg"
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
                  src="/tatu-sugarcane-implement.jpg"
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
                  src="/terra-boom-sprayer.jpg"
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
                  src="/terra-tipping-trailer.jpg"
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
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/icon-soil-preparation.png"
                    alt="Soil preparation"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="font-semibold text-gray-900">Soil preparation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/icon-fertilizer-spreading.png"
                    alt="Fertilizer spreading"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="font-semibold text-gray-900">Fertilizer spreading</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/icon-crop-spraying.png"
                    alt="Crop spraying"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="font-semibold text-gray-900">Crop spraying</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/icon-seed-bed-management.png"
                    alt="Seed bed management"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="font-semibold text-gray-900">Seed bed management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/icon-harvesting.png"
                    alt="Harvesting"
                    width={48}
                    height={48}
                  />
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
                      src="/implement-rotary-tillers.jpg"
                      alt="Rotary tillers"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Image
                        src="/avatar-placeholder.jpg"
                        alt="User"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
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
                      src="/implement-subsoilers.jpg"
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
                      src="/implement-fertilizer-spreaders.jpg"
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
                      src="/implement-mowers.jpg"
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
                  <Image
                    src="/icon-exclusive-access.png"
                    alt="Exclusive access"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Exclusive access to Tatu Marchesan, Terra Implements, and Agro Master</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/icon-expert-support.png"
                    alt="Expert support"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Expert support for sizing and field matching</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/icon-tailored-implements.png"
                    alt="Tailored implements"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Implements tailored to East African soil and crop types</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/icon-spare-parts.png"
                    alt="Spare parts"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Spare parts and after-sales service from stock</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/icon-compatibility.png"
                    alt="Compatibility"
                    width={40}
                    height={40}
                  />
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