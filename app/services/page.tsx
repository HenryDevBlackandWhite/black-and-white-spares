"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Truck,
  Settings2,
  Wrench,
  PackageSearch,
  Factory,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Services() {
  const railRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSection = (index: number) => {
    if (!railRef.current) return;
    const w = railRef.current.clientWidth;
    railRef.current.scrollTo({
      left: w * index,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  // Arrow buttons
  const scrollRail = (dir: "left" | "right") => {
    const totalSections = 2;
    let nextIndex = currentIndex + (dir === "right" ? 1 : -1);
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex > totalSections - 1) nextIndex = totalSections - 1;
    scrollToSection(nextIndex);
  };

  // Wheel scroll behavior
  useEffect(() => {
    const container = railRef.current;
    if (!container) return;

    let isScrolling = false;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 20 || isScrolling) return;
      e.preventDefault();
      isScrolling = true;

      const next =
        e.deltaY > 0
          ? Math.min(currentIndex + 1, 1)
          : Math.max(currentIndex - 1, 0);

      scrollToSection(next);

      setTimeout(() => {
        isScrolling = false;
      }, 900);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [currentIndex]);

  const spares = [
    {
      icon: Truck,
      title: "Truck Spares",
      desc: "Full range of OEM and quality aftermarket parts for Samil, Samag, Sakom, Magirus, and other heavy-duty trucks.",
    },
    {
      icon: Settings2,
      title: "Plant Equipment Spares",
      desc: "Durable, tested components for mining and construction machinery — built to handle demanding environments.",
    },
    {
      icon: PackageSearch,
      title: "Custom Part Sourcing",
      desc: "If a part isn’t in stock, we locate it quickly. Specialized in sourcing discontinued and hard-to-find components.",
    },
  ];

  const repairs = [
    {
      icon: Wrench,
      title: "Full Workshop Services",
      desc: "Professional repairs, rebuilds, and servicing for trucks, gearboxes, and engines.",
    },
    {
      icon: Factory,
      title: "Service Exchange Program",
      desc: "Reduce downtime with exchange-ready engines, gearboxes, transfer boxes, and cabs.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Expertise",
      desc: "Backed by years of technical experience through our partner, Black & White Truck Repairs.",
    },
  ];

  return (
    <main className="w-full text-center overflow-hidden relative">
      {/* Static header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto py-20 px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          From reliable truck and plant spares to complete repair and
          maintenance solutions, we keep your fleet operating with minimal
          downtime. Together with{" "}
          <strong>Black &amp; White Truck Repairs</strong>, we provide
          end-to-end service you can trust.
        </p>
      </motion.section>

      {/* Horizontal full-section scroll */}
      <div
        ref={railRef}
        className="flex overflow-x-hidden snap-x snap-mandatory w-full h-full"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* PANEL 1 — Spares */}
        <section className="min-w-[100vw] snap-start bg-neutral-900 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-6 text-center"
          >
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Black &amp; White Spares
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
              We supply parts for everything from a single wheel nut to a
              complete engine assembly. Whether for Samil, Samag, Sakom, or
              Magirus trucks, we deliver quality and speed to keep your
              operation running.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {spares.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="border border-neutral-800 bg-brandBlack p-8 rounded-lg hover:bg-neutral-900 transition"
                >
                  <Icon className="mx-auto mb-4 text-gray-400" size={36} />
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PANEL 2 — Repairs */}
        <section className="min-w-[100vw] snap-start bg-brandBlack py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-6 text-center"
          >
            <h2 className="text-3xl font-semibold text-white">
              Black &amp; White Truck Repairs
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
              Our trusted partner workshop handles all repairs, rebuilds, and
              maintenance needs. From major overhauls to minor adjustments,
              Black &amp; White Truck Repairs ensures lasting reliability and
              performance for every vehicle.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {repairs.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="border border-neutral-800 bg-neutral-950 p-8 rounded-lg hover:bg-neutral-900 transition"
                >
                  <Icon className="mx-auto mb-4 text-gray-400" size={36} />
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="pt-10">
              <a
                href="/contact"
                className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition"
              >
                Book a Repair
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Arrows */}
      <button
        onClick={() => scrollRail("left")}
        className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 border border-neutral-800"
      >
        <ChevronLeft className="text-white" size={28} />
      </button>
      <button
        onClick={() => scrollRail("right")}
        className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 border border-neutral-800"
      >
        <ChevronRight className="text-white" size={28} />
      </button>
    </main>
  );
}







