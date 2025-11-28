"use client";

import { motion } from "framer-motion";

// Simple inline icons (no external dependency)
function ExperienceIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2 2" />
    </svg>
  );
}

function QualityIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3 5 7v6a7 7 0 0 0 7 7 7 7 0 0 0 7-7V7z" />
      <path d="m9.5 12.5 2 2 3-3.5" />
    </svg>
  );
}

function CommitmentIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 8v2M12 14v2M8 12h2M14 12h2" />
    </svg>
  );
}

export default function About() {
  return (
    <main className="max-w-5xl mx-auto space-y-20 px-6 py-16">
      {/* Intro */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to Black & White Spares
        </h1>

        <p className="text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto">
          Black &amp; White Truck Spares CC was incorporated in 2004, though our
          roots reach back to 1987 when we began sourcing parts for ex-military
          vehicles such as Land Rover, Bedford, and Mercedes. Today, our
          dedicated team makes us one of the leading suppliers of replacement
          parts for Samil, Samag, Sakom, and Magirus trucks.
        </p>
      </motion.section>

      {/* Premium Values Cards (with inline icons) */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-3 gap-8 text-center"
      >
        {[
          {
            title: "Experience",
            text: "Nearly four decades of knowledge in truck and plant spares.",
            icon: (
              <ExperienceIcon className="w-12 h-12 text-white mb-4 mx-auto" />
            ),
          },
          {
            title: "Quality",
            text: "Trusted OEM and aftermarket components backed by our service guarantee.",
            icon: (
              <QualityIcon className="w-12 h-12 text-white mb-4 mx-auto" />
            ),
          },
          {
            title: "Commitment",
            text: "Dedicated to keeping your fleet on the road with minimal downtime.",
            icon: (
              <CommitmentIcon className="w-12 h-12 text-white mb-4 mx-auto" />
            ),
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="
              relative p-8 rounded-xl border border-neutral-800 
              bg-gradient-to-b from-neutral-900 to-neutral-950
              hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]
              hover:border-neutral-700
              transition-all duration-300
            "
          >
            {item.icon}
            <h3 className="text-2xl font-semibold mb-3 text-white">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* Spares Department Image (with hover animation) */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.01 }}
        className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 mx-auto"
      >
        <div className="w-full h-[380px] relative">
          <img
            src="/images/spares-department.jpg"
            alt="Spares Department"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        <div className="p-6 text-center space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            Our Spares Department
          </h2>

          <p className="text-gray-400 text-base">
            A fully stocked warehouse ensuring fast availability of parts for
            Samil, Samag, Sakom, and Magirus vehicles, as well as a wide range
            of plant equipment.
          </p>
        </div>
      </motion.section>

      {/* History and Expertise */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6 text-gray-400 leading-relaxed text-lg"
      >
        <p>
          Our extensive experience with <strong>Deutz engines</strong> fitted in
          Samil, Sakom, and Magirus trucks has established us as a key supplier
          of Deutz air-cooled engines and their replacement parts. We now supply
          widely into the <strong>Mining</strong> and{" "}
          <strong>Construction</strong> sectors where these engines dominate.
        </p>

        <p>
          To minimize downtime and reduce operational costs, we offer a{" "}
          <strong>Service Exchange Program</strong> on all major components —
          including engines, gearboxes, transfer boxes, and cabs.
        </p>

        <p>
          Whatever truck parts you need, listed or not, our knowledgeable team is
          ready to assist.{" "}
          <a
            href="/contact"
            className="text-white underline hover:text-gray-300 transition"
          >
            Contact us
          </a>{" "}
          for a free quotation.
        </p>
      </motion.section>

      {/* Separator between history and branches */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-12" />

      {/* Branch Locations – 2x2 grid, centered, separated by horizontal line, fade-in */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >
        <h2 className="text-3xl font-bold text-center">Our Branches</h2>

        <div className="w-full max-w-3xl mx-auto space-y-10">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">
                Centurion (Head Office)
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Call: +27 (0)11 316 4980<br />
                Email: info@bwts.co.za<br />
                175 32nd Street, Warehouse 18,<br />
                Doornkloof East, Centurion,<br />
                Pretoria, 0153
              </p>
            </div>

            <div className="space-y-2 md:ml-8">
              <h3 className="text-2xl font-semibold text-white">Cape Town</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Call: +27 (0)21 492 3605<br />
                Email: info@bwts.co.za<br />
                6 Stellenberg Road,<br />
                Parow Industria,<br />
                Parow, Cape Town, 7493
              </p>
            </div>
          </div>

          {/* Middle separator */}
          <div className="border-b border-neutral-800" />

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">Malelane</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Call: +27 (0)79 491 4334<br />
                Email: info@bwts.co.za<br />
                Kiepersol Street,<br />
                Malelane, Mpumalanga
              </p>
            </div>

            <div className="space-y-2 md:ml-8">
              <h3 className="text-2xl font-semibold text-white">Randburg</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Call: +27 (0)79 491 4334<br />
                Email: info@bwts.co.za<br />
                6 Samantha Street,<br />
                Strydom Park,<br />
                Randburg, Gauteng
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}


