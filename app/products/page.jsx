"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation"; 

export default function Products() {
  // =========================================================
  // CATEGORY DATA
  // =========================================================
  const categories = [
    // -------------------------------------------------------
    // CATEGORY 1 — SAMIL / SAMAG / SAKOM TRUCK SPARES
    // -------------------------------------------------------
    {
      id: "samil",
      title: "Samil, Samag & Sakom Truck Spares",
      description: `
We supply every spare part for these trucks — from a wheel nut to a complete axle. 
Request a quotation and keep your vehicle downtime to a minimum with our Service Exchange Program.
      `,
      type: "cards",
      items: [
        { model: "Magirus 232D16", drive: "4x2", engine: "Deutz F8L413", cab: "Normal Control" },
        { model: "Magirus 232D26", drive: "6x6", engine: "Deutz F8L413", cab: "Normal Control" },
        { model: "Sakom 50", drive: "4x2", engine: "Deutz F6L913", cab: "Fwd. Control" },
        { model: "Sakom 120", drive: "6x4", engine: "Deutz F8L413", cab: "Normal Control" },
        { model: "Samag 70", drive: "4x2", engine: "ADE352T", cab: "Normal Control" },
        { model: "Samag 120", drive: "6x4", engine: "ADE407", cab: "Normal Control" },
        { model: "Samag 130F12", drive: "4x2", engine: "ADE352", cab: "Fwd. Control" },
        { model: "Samag 280F26", drive: "6x4", engine: "ADE407T", cab: "Fwd. Control" },
        { model: "Samag 168-16", drive: "4x2", engine: "ADE352T", cab: "Normal Control" },
        { model: "Samag 280-26", drive: "6x4", engine: "ADE407T", cab: "Normal Control" },
        { model: "Samil 20", drive: "4x4", engine: "Deutz F6L913", cab: "Fwd. Control" },
        { model: "Samil 20 Mk2", drive: "4x4", engine: "ADE352", cab: "Fwd. Control" },
        { model: "Samil 50", drive: "4x4", engine: "Deutz F6L413F", cab: "Normal Control" },
        { model: "Samil 50 Mk2", drive: "4x4", engine: "ADE409", cab: "Normal Control" },
        { model: "Samil 100", drive: "6x6", engine: "Deutz F10L413F", cab: "Normal Control" },
      ],
    },

    // -------------------------------------------------------
    // CATEGORY 2 — DEUTZ ENGINE SERIES
    // -------------------------------------------------------
    {
      id: "deutz",
      title: "Deutz Engines & Replacement Parts",
      description: `
Deutz engines are widely used across Southern Africa in compressors, earth-moving equipment,
tractors, pumps, generators, underground machinery, and Samil trucks.
      `,
      type: "series",
      series: [
        { name: "912 Series", engines: ["F2L912", "F3L912", "F4L912", "F5L912", "F6L912"] },
        { name: "913 Series", engines: ["F2L913", "F3L913", "F4L913", "F5L913", "F6L913"] },
        { name: "413 Series", engines: ["F6L413", "F8L413", "F10L413", "F12L413"] },
        { name: "413F Series", engines: ["F6L413F", "F8L413F", "F10L413F", "F12L413F"] },
        {
          name: "226B Water-cooled Series",
          engines: ["D226B-3", "TD226B-3", "TD226B-4", "TD226B-6", "TBD226B-6", "TBD226B-6DS"],
        },
      ],
    },

    // -------------------------------------------------------
    // CATEGORY 3 — ARMOURED VEHICLES (WITH IMAGES)
    // -------------------------------------------------------
    {
      id: "armoured",
      title: "Armoured Vehicle Spares",
      description: `
We have supplied ex-Military & ex-Police vehicle spares since 1987. Below are the primary armoured vehicles we support.
      `,
      type: "cards",
      items: [
        { model: "Casspir", drive: "4x4", engine: "ADE352 / ADE352T", image: "/images/armoured/casspir.jpg" },
        { model: "Mamba", drive: "4x2 / 4x4", engine: "OM352 / ADE352", image: "/images/armoured/mamba.jpg" },
        { model: "Nyala", drive: "4x2 / 4x4", engine: "ADE366", image: "/images/armoured/nyala.jpg" },
        { model: "Ingwe", drive: "4x4", engine: "ADE366", image: "/images/armoured/ingwe.jpg" },
        { model: "Kwevoel", drive: "4x4 / 6x6", engine: "Various Deutz", image: "/images/armoured/kwevoel.png" },
        { model: "Land Rover 3/3S Armoured", drive: "4x4", engine: "Petrol / ADE236", image: "/images/armoured/landrover.png" },
        { model: "Buffel / Unimog 416", drive: "-", engine: "OM352 / ADE352", image: "/images/armoured/buffel.jpeg" },
        { model: "Ford Scout APC", drive: "4x2 / 4x4", engine: "Ford V6 Petrol", image: "/images/armoured/scout.jpg" },
      ],
    },

    // -------------------------------------------------------
    // CATEGORY 4 — DIESEL ENGINES
    // -------------------------------------------------------
    {
      id: "diesel",
      title: "Diesel Engines",
      description: `We stock new, remanufactured, and used diesel engines with a Start-up Guarantee.`,
      type: "cards",
      items: [
        { model: "ADE 236T", engine: "ADE 236T" },
        { model: "ADE 352", engine: "ADE 352" },
        { model: "ADE 366", engine: "ADE 366" },
        { model: "ADE 407", engine: "ADE 407" },
        { model: "Bedford 330", engine: "330 Diesel" },
        { model: "Detroit 4 Cylinder", engine: "Detroit 4cyl" },
        { model: "Mack ETAB676B", engine: "ETAB676B" },
        { model: "Mercedes-Benz OM352", engine: "OM352" },
      ],
    },

    // -------------------------------------------------------
    // CATEGORY 5 — OFF-ROAD TYRES
    // -------------------------------------------------------
    {
      id: "tyres",
      title: "Off-Road Tyres & Rims",
      description: `
We stock new & used 20” off-road tyres and rims suitable for 4x4 and 6x6 trucks.
      `,
      type: "cards",
      items: [
        { model: "12.5 R20", drive: "Radial = 335/80R20", engine: "New: Yes | Used: Yes" },
        { model: "12.5 x 20", drive: "Cross Ply", engine: "New: No | Used: Yes" },
        { model: "14.5 R20", drive: "Radial = 365/80R20", engine: "New: Yes | Used: Yes" },
        { model: "14.5 x 20", drive: "Cross Ply", engine: "New: No | Used: Yes" },
        { model: "1400 x 20", drive: "Cross Ply", engine: "New: Yes | Used: Yes" },
        { model: "1600 x R20", drive: "Cross Ply", engine: "New: No | Used: Yes" },
        { model: "Rims (20-inch)", drive: "Casspir / Kwevoel", engine: "Used: Yes" },
      ],
    },

    // -------------------------------------------------------
    // CATEGORY 6 — SINO TRUCK (SUB-SECTIONS)
    // -------------------------------------------------------
    {
      id: "sinotruk",
      title: "Sino Truck Spares",
      description: `
We support the full range of Sino HOWO and A7 truck parts. 
      `,
      type: "subsections",
      subsections: [
        { name: "Suspension & Chassis", parts: ["Front leaf spring pack", "Rear hangers", "Torque rod assembly"] },
        { name: "Engine", parts: ["WD615 cylinder head", "Fuel injection pump", "Turbocharger assembly"] },
        { name: "Gearbox & Axles", parts: ["HW19710 gearbox", "Crown wheel & pinion", "Axle housing"] },
        { name: "Cab Components", parts: ["Window regulator", "Dashboard cluster", "Wiper motor"] },
        { name: "Tyres & Rims", parts: ["315/80R22.5 tyre", "22.5 inch rim"] },
        { name: "Service Parts", parts: ["Oil filter", "Fuel filter", "Air dryer cartridge"] },
      ],
    },

    // -------------------------------------------------------
    // CATEGORY 7 — SINO PLANT SPARES
    // -------------------------------------------------------
    {
      id: "sinoplant",
      title: "Sino Plant Machinery Spares",
      description: `We supply replacement components for Sino construction machinery.`,
      type: "cards",
      items: [
        { model: "Front End Loader Parts", engine: "Hydraulics, buckets, pins" },
        { model: "Excavator Parts", engine: "Track components, cylinders" },
        { model: "Tipper Components", engine: "Hydraulic pumps, cylinders" },
        { model: "Hydraulic Pump Assembly", engine: "Piston pump, gear pump units" },
        { model: "Track Chain Links", engine: "Chains, rollers, idlers" },
        { model: "Swing Gear Motor", engine: "Rotary actuator, drive motor" },
        { model: "Bucket Teeth & Cutting Edges", engine: "Teeth, pins, retainers" },
      ],
    },
  ];

  // =========================================================
  // STATE
  // =========================================================
  const [showMore, setShowMore] = useState({});
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedSpare, setSelectedSpare] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const scrollToForm = () => {
    const el = document.getElementById("spare-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

   // =========================================================
  // NEW: READ SEARCH TERM FROM URL AND PREFILL MESSAGE
  // =========================================================
  const searchParams = useSearchParams();
  const searchedTerm = searchParams.get("search");

  useEffect(() => {
    if (searchedTerm) {
      setMessage(prev => prev || `I'm looking for: ${searchedTerm}`);
      scrollToForm();
    }
  }, [searchedTerm]);  

  const selectedCategory = categories.find((c) => c.id === selectedCategoryId);

  const allSpareOptions = selectedCategory
    ? selectedCategory.type === "cards"
      ? selectedCategory.items.map((i) => i.model)
      : selectedCategory.type === "series"
      ? selectedCategory.series.flatMap((s) => s.engines)
      : selectedCategory.subsections.flatMap((s) => s.parts)
    : [];

  const chooseSpare = (categoryId, spare) => {
    setSelectedCategoryId(categoryId);
    setSelectedSpare(spare);
    scrollToForm();
  };

  // =========================================================
  // FORM HANDLER
  // =========================================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg("");
    setErrorMsg("");

    if (!selectedCategoryId || !selectedSpare || !name || !email) {
      setErrorMsg("Please select a spare and fill in your name and email.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/spare-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: selectedCategoryId,
          spare: selectedSpare,
          name,
          phone,
          email,
          message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send request.");

      setSuccessMsg("Your request has been sent successfully.");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  // =========================================================
  // PAGE RENDER
  // =========================================================
  return (
    <main className="max-w-6xl mx-auto space-y-20 pt-28 pb-20 px-4">
      {/* HEADER */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Products</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our complete range of spares categorized for easy browsing.
        </p>
      </motion.section>

      {/* CATEGORY LOOP */}
      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="space-y-6">
          <h2 className="text-3xl font-semibold border-b border-neutral-700 pb-2">
            {cat.title}
          </h2>
          <p className="text-gray-400 whitespace-pre-line">{cat.description}</p>

          {/* CARDS CATEGORY */}
          {cat.type === "cards" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {(showMore[cat.id] ? cat.items : cat.items.slice(0, 3)).map((item) => (
                  <div
                    key={item.model}
                    className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 shadow-md"
                  >

                    {/* ARMOUR IMAGE CARD STYLE */}
                    {item.image && (
                      <div className="overflow-hidden rounded-lg mb-4">
                        <Image
                          src={item.image}
                          alt={item.model}
                          width={600}
                          height={400}
                          className="w-full h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}

                    <h3 className="text-xl font-semibold mb-2">{item.model}</h3>

                    {item.drive && (
                      <p className="text-gray-300">
                        Drive: <span className="text-gray-400">{item.drive}</span>
                      </p>
                    )}

                    {item.engine && (
                      <p className="text-gray-300 mb-4">
                        Engine: <span className="text-gray-400">{item.engine}</span>
                      </p>
                    )}

                    <button
                      onClick={() => chooseSpare(cat.id, item.model)}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded"
                    >
                      Request This Spare
                    </button>
                  </div>
                ))}
              </div>

              {/* SHOW MORE BUTTON */}
              <button
                onClick={() =>
                  setShowMore({ ...showMore, [cat.id]: !showMore[cat.id] })
                }
                className="flex items-center justify-end ml-auto mt-3 text-blue-400 hover:text-blue-300"
              >
                <span>{showMore[cat.id] ? "Show Less" : "Show More"}</span>
                <span
                  className={`ml-2 transform transition-transform ${showMore[cat.id] ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>
            </>
          )}

          {/* SERIES CATEGORY */}
          {cat.type === "series" && (
            <div className="space-y-6">
              {cat.series.map((series) => (
                <div
                  key={series.name}
                  className="bg-neutral-900 border border-neutral-800 rounded-xl p-5"
                >
                  <h3 className="text-2xl font-semibold mb-3">{series.name}</h3>

                  <details className="group">
                    <summary className="cursor-pointer text-blue-400 hover:text-blue-300 flex justify-between items-center text-lg">
                      Engine Models
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>

                    <ul className="mt-4 space-y-2">
                      {series.engines.map((e) => (
                        <li
                          key={e}
                          className="flex justify-between items-center bg-neutral-800 px-4 py-2 rounded border border-neutral-700"
                        >
                          <span>{e}</span>
                          <button
                            onClick={() => chooseSpare(cat.id, e)}
                            className="bg-blue-600 hover:bg-blue-500 text-sm px-3 py-1 rounded text-white"
                          >
                            Request
                          </button>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              ))}
            </div>
          )}

          {/* SUBSECTION CATEGORY */}
          {cat.type === "subsections" && (
            <div className="space-y-10">
              {cat.subsections.map((section) => (
                <div
                  key={section.name}
                  className="bg-neutral-900 border border-neutral-800 rounded-xl p-5"
                >
                  <h3 className="text-2xl font-semibold mb-4">{section.name}</h3>

                  <ul className="space-y-2">
                    {section.parts.map((part) => (
                      <li
                        key={part}
                        className="flex justify-between items-center bg-neutral-800 px-4 py-2 rounded border border-neutral-700"
                      >
                        <span>{part}</span>
                        <button
                          onClick={() => chooseSpare(cat.id, part)}
                          className="bg-blue-600 hover:bg-blue-500 text-sm px-3 py-1 rounded text-white"
                        >
                          Request
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      {/* ========================================================
         FORM
      ======================================================== */}
      <section id="spare-form" className="space-y-8 pt-10">
        <h2 className="text-3xl font-semibold border-b border-neutral-700 pb-2">
          Request a Spare
        </h2>

        <p className="text-gray-400 text-sm">
          Note: This is not our full list. If you have a part number, include it in the message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6"
        >
          {/* CATEGORY SELECT */}
          <div>
            <label className="block text-gray-300 mb-1">Category</label>
            <select
              value={selectedCategoryId}
              onChange={(e) => {
                setSelectedCategoryId(e.target.value);
                setSelectedSpare("");
              }}
              className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-white"
            >
              <option value="">Select a category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>

          {/* SPARE SELECT */}
          <div>
            <label className="block text-gray-300 mb-1">Specific Part / Model</label>
            <select
              value={selectedSpare}
              onChange={(e) => setSelectedSpare(e.target.value)}
              disabled={!selectedCategory}
              className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-white disabled:opacity-50"
            >
              <option value="">
                {selectedCategory ? "Select a part/model" : "Select a category first"}
              </option>

              {selectedCategory &&
                allSpareOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
            </select>
          </div>

          {/* CONTACT FIELDS */}
          <div>
            <label className="block text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Additional Message</label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-white"
            />
          </div>

          {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}
          {successMsg && <p className="text-green-400 text-sm">{successMsg}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-3 rounded disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </section>
    </main>
  );
}











