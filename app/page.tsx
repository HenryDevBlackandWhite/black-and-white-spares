"use client";
import { motion } from "framer-motion";

export default function Home() {
  const featured = [
    {
      name: "Engines",
      image: "/images/spares/engine.jpg",
      desc: "Complete and service-exchange engines for Samil, Samag, Sakom, Magirus and plant equipment – built to handle hard work and long hours.",
      specs: ["Deutz Air-Cooled", "Service Exchange Units", "Dyno Tested"],
    },
    {
      name: "Axles & Diffs",
      image: "/images/spares/axle.jpg",
      desc: "Front and rear axles, differentials and components to keep heavy vehicles moving in off-road and on-road conditions.",
      specs: ["Complete Axle Assemblies", "Diff Centres", "Exchange Options"],
    },
    {
      name: "Fuel Injection Pumps",
      image: "/images/spares/fuel-pump.png",
      desc: "Reconditioned and new fuel injection pumps calibrated for reliability, fuel efficiency and Deutz-powered applications.",
      specs: ["Calibrated Units", "Tested on Bench", "Pump & Injector Sets"],
    },
    {
      name: "Brake Assemblies",
      image: "/images/spares/brakes.jpg",
      desc: "Brake drums, shoes, linings and complete axle sets to keep fleets safe on road, mine and quarry operations.",
      specs: ["Drums & Shoes", "Axle Sets", "OEM & Aftermarket"],
    },
    {
      name: "Oil & Filtration",
      image: "/images/spares/filters.png",
      desc: "Engine, fuel, hydraulic and air filters to protect critical components and extend service intervals.",
      specs: ["Engine & Fuel Filters", "Hydraulic Filtration", "Service Kits"],
    },
    {
      name: "Tyres",
      image: "/images/spares/tyres.jpg",
      desc: "Heavy-duty truck and plant tyres suitable for haul roads, construction sites and on-road applications.",
      specs: ["On & Off-Road Patterns", "Truck & Plant Sizes", "Premium Brands"],
    },
  ];

  return (
    <main className="flex flex-col space-y-20">
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Truck and plant equipment"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <motion.div
          className="relative z-10 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-6">
            Trusted Truck and Plant Spares
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Premium parts. Proven reliability. Service you can count on.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/services"
              className="px-8 py-3 border border-white text-lg font-medium hover:bg-white hover:text-black transition"
            >
              View Services
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-gray-500 text-lg font-medium text-gray-300 hover:text-white hover:border-white transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* FEATURED SPARES — EXPLODED PRODUCT CARDS */}
      <section className="w-full py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-4xl font-bold">Featured Spares</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
              A snapshot of key product lines we keep moving — from service exchange
              engines and axle sets to filtration, brakes and tyres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featured.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="
                  group relative flex flex-col rounded-xl overflow-hidden
                  border border-neutral-800 bg-neutral-950/90
                  hover:border-neutral-500 hover:bg-neutral-900
                  transition-all duration-300 hover:-translate-y-2
                  shadow-[0_0_0_rgba(0,0,0,0)]
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.65)]
                "
              >
                {/* Image / Visual */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  {/* Tag */}
                  <div className="absolute bottom-3 left-3 text-[11px] uppercase tracking-wide">
                    <span className="bg-white/10 text-gray-100 px-3 py-1 rounded-full border border-white/20">
                      Core Stock Item
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold mb-3">{item.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Spec strip */}
                  <div className="mt-auto pt-4 border-t border-neutral-800">
                    <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-gray-300">
                      {item.specs.map((spec) => (
                        <span
                          key={spec}
                          className="
                            px-3 py-1 rounded-full 
                            bg-white/5 border border-white/10 
                            group-hover:bg-white/10 group-hover:border-white/30
                            transition-colors
                          "
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="text-center w-full py-24 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Black and White Spares
          </h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            With decades of experience in trucking and heavy equipment,
            Black and White Spares is known for trustworthy service and
            premium components. Our reputation is built on reliability,
            precision, and long-term customer partnerships.
          </p>
          <a
            href="/about"
            className="inline-block text-white border-b border-gray-500 hover:border-white text-lg font-medium transition"
          >
            Learn more →
          </a>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="bg-neutral-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Let’s Get Your Fleet Moving Again
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Whether it’s sourcing rare parts or providing expert guidance,
              our team is ready to assist. We understand uptime matters —
              get in touch today and keep your equipment performing at its best.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden border border-neutral-800 shadow-lg">
              <img
                src="/images/spares/contact-tools.jpg"
                alt="Workshop tools and parts"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


