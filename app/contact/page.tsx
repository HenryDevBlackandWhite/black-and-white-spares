"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  // =========================================================
  // FORM STATE
  // =========================================================
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Get updated URL params on every search
  const searchParams = useSearchParams();

  // =========================================================
  // READ SEARCH TERM FROM URL AND PREFILL MESSAGE
  // WORKS EVEN WHEN ALREADY ON CONTACT PAGE
  // =========================================================
  useEffect(() => {
    const searchedTerm = searchParams.get("search");

    if (searchedTerm) {
      setMessage((prev) => prev || `I'm looking for: ${searchedTerm}`);

      const el = document.getElementById("contact-form");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]); // ← FIX: runs anytime the search query changes

  // =========================================================
  // FORM SUBMIT
  // =========================================================
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");
    setSuccessMsg("");

    if (!name || !email) {
      setErrorMsg("Please enter your name and email.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send message.");

      setSuccessMsg("Your message has been sent successfully.");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  // =========================================================
  // CONTACT INFO
  // =========================================================
  const contactInfo = [
    { icon: Phone, label: "Call", text: "+27 (0)11 123 4567" },
    { icon: Mail, label: "Email", text: "info@bwts.co.za" },
    { icon: MessageSquare, label: "WhatsApp", text: "+27 (0)82 987 6543" },
    {
      icon: MapPin,
      label: "Address",
      text: "Plot 175, 32nd Street, Doornkloof East, Pretoria, South Africa",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto space-y-16 pt-28 pb-20 px-4 text-center">
      {/* HEADER */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Need a quote or have a question about our spares? Reach us through the form below
          or any of the channels provided.
        </p>
      </motion.section>

      {/* FORM SECTION */}
      <motion.section
        id="contact-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6 text-left max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold">Enquire now</h2>
        <p className="text-gray-400 text-sm">
          Send us your enquiry and our team will respond as soon as possible with pricing,
          availability or assistance.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* NAME */}
          <div>
            <label className="block text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-white"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-gray-300 mb-1">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-white"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-white"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-gray-300 mb-1">Your Message</label>
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
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-3 rounded disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.section>

      {/* CONTACT INFO GRID */}
      <motion.section
        className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {contactInfo.map(({ icon: Icon, label, text }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col justify-center h-full border border-neutral-800 bg-neutral-950 p-6 rounded-lg hover:bg-neutral-900 transition"
          >
            <Icon className="mx-auto mb-3 text-gray-400" size={28} />
            <h3 className="text-lg font-semibold">{label}</h3>
            <p className="text-gray-400 text-sm mt-2">{text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* MAP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="rounded-lg overflow-hidden border border-neutral-800"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d39740.504178991985!2d28.254056424797646!3d-25.902945681039746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20175%2032nd%20St%2C%20Doornkloof%20East%2C%20Pretoria%2C%200153%20google%20maps%20embed!5e1!3m2!1sen!2sza!4v1762420348744!5m2!1sen!2sza"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>
    </main>
  );
}

