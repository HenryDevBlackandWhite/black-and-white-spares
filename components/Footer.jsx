"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brandBlack border-t border-neutral-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Column 1: CTA */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold text-white">
              Need reliable truck and plant spares?
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
            >
              Get a Quote
            </Link>
          </div>

          {/* Column 2: Trading Hours */}
          <div>
            <h3 className="text-white font-semibold mb-2">Trading Hours</h3>
            <p>Mon - Thu: 8:00 AM – 5:00 PM</p>
            <p>Fri: 8:00 AM – 4:30 PM</p>
            <p>Sat: 8:00 AM – 1:00 PM</p>
            <p>Sun: Closed</p>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 text-gray-400" />
                <p>Plot 175, 32nd Street, Doornkloof East, Pretoria, South Africa</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-400" />
                <a href="tel:+27110000000" className="hover:text-white">
                  +27 (0)11 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-400" />
                <a
                  href="mailto:info@blackandwhitespares.co.za"
                  className="hover:text-white"
                >
                  info@blackandwhitespares.co.za
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider and Legal Links */}
        <div className="border-t border-neutral-800 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Black and White Spares. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


