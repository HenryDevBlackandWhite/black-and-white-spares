"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-neutral-950 border-t border-neutral-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-14">
        
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Column 1 — Brand / CTA */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Need reliable truck & plant spares?
            </h2>
            <p className="text-gray-400 max-w-md">
              We supply high-quality parts for Samil, Samag, Sakom, Magirus and 
              a wide range of plant equipment — nationwide.
            </p>
            
            <Link
              href="/contact"
              className="
                inline-block bg-white text-black font-semibold px-6 py-3 
                rounded-md hover:bg-gray-200 transition shadow-md
              "
            >
              Get a Quote
            </Link>
          </div>

          {/* Column 2 — Trading Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Trading Hours</h3>
            <ul className="space-y-1 text-sm">
              <li>Mon–Thu: 8:00 AM – 5:00 PM</li>
              <li>Fri: 8:00 AM – 4:30 PM</li>
              <li>Sat: 8:00 AM – 1:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm">

              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 text-gray-400" />
                <p className="text-gray-400">
                  175 32nd Street, Warehouse 18<br />
                  Doornkloof East, Centurion, Pretoria
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-gray-400" />
                <a href="tel:+27113164980" className="hover:text-white">
                  +27 (0)11 316 4980
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-gray-400" />
                <a
                  href="mailto:info@bwts.co.za"
                  className="hover:text-white"
                >
                  info@bwts.co.za
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Black & White Spares. All rights reserved.</p>

          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gray-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}






