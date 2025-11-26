"use client";
import { motion } from "framer-motion";

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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Black & White Spares</h1>
        <p className="text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto">
          Black &amp; White Truck Spares CC was incorporated in 2004, though our
          roots reach back to 1987 when we began sourcing parts for
          ex-military vehicles such as Land Rover, Bedford, and Mercedes.
          Today, our dedicated team of buyers, storemen, drivers, and
          salespeople make us one of the leading suppliers of replacement
          parts for Samil, Samag, Sakom, and Magirus trucks.
        </p>
      </motion.section>

       {/* Values Section */}
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
          },
          {
            title: "Quality",
            text: "Trusted OEM and aftermarket components backed by our service guarantee.",
          },
          {
            title: "Commitment",
            text: "Dedicated to keeping your fleet on the road with minimal downtime.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="border border-neutral-800 bg-neutral-950 p-6 rounded-lg hover:bg-neutral-900 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.text}</p>
          </div>
        ))}
      </motion.section>

      {/* History and Expertise */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6 text-gray-400 leading-relaxed text-lg"
      >
        <p>
          Our extensive experience with <strong>Deutz engines</strong> fitted
          in Samil, Sakom, and Magirus trucks has established us as a key
          supplier of Deutz air-cooled engines and their replacement parts.
          We now supply widely into the <strong>Mining</strong> and{" "}
          <strong>Construction</strong> sectors where Deutz engines
          predominate.
        </p>

        <p>
          To minimize vehicle downtime and reduce operational costs, we offer
          a comprehensive <strong>Service Exchange Program</strong> on all
          major components — including engines, gearboxes, transfer boxes,
          and cabs fitted in the Samil, Samag, Sakom, and Magirus ranges.
        </p>

        <p>
          Whatever truck parts you need, whether listed on our site or not,
          our knowledgeable team is ready to assist.{" "}
          <a
            href="/contact"
            className="text-white underline hover:text-gray-300 transition"
          >
            Contact us
          </a>{" "}
          for a free quotation today.
        </p>
      </motion.section>

     
    </main>
  );
}