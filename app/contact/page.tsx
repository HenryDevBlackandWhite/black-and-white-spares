"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
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
    <main className="max-w-5xl mx-auto space-y-16 text-center pt-28 pb-20 px-4">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Need a quote or have a question about our spares? Reach us through any
          of the channels below.
        </p>
      </motion.section>

      {/* Contact Info Grid */}
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

      {/* Map Embed */}
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
