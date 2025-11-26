"use client";
import { motion } from "framer-motion";

export default function Home() {
  const featured = [
    { name: "Truck Engine", image: "/images/spares/engine.jpg" },
    { name: "Hydraulic Pump", image: "/images/spares/pump.jpg" },
    { name: "Brake Assembly", image: "/images/spares/brakes.jpg" },
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

      {/* FEATURED SPARES */}
      <section className="text-center w-full py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Featured Spares</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Truck Engine",
                image: "/images/spares/engine.jpg",
                desc: "Heavy-duty engine units built for endurance and consistent torque delivery.",
              },
              {
                name: "Hydraulic Pump",
                image: "/images/spares/pump.jpg",
                desc: "Precision-engineered pumps ensuring steady hydraulic flow under pressure.",
              },
              {
                name: "Brake Assembly",
                image: "/images/spares/brakes.jpg",
                desc: "Complete braking systems for safety and performance across all terrains.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="border border-neutral-800 bg-neutral-950 rounded-lg overflow-hidden hover:bg-neutral-900 hover:scale-[1.03] transition-transform"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-semibold mb-3">{item.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
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
