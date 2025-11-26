"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-brandBlack border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 relative">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.jpg"
            alt="Black and White Spares Logo"
            width={150}
            height={100}
            priority
            className="rounded-sm object-contain"
          />
        </Link>

        {/* Center: Search Bar */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <SearchBar />
        </div>

        {/* Right: Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-xl font-medium">
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/products" className="hover:text-gray-300">Products</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 border border-gray-700 rounded"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-brandBlack text-center py-4 space-y-4">
          <SearchBar /> {/* Mobile: search shown inside dropdown */}
          <Link href="/about" onClick={() => setOpen(false)} className="block hover:text-gray-300">About</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="block hover:text-gray-300">Services</Link>
          <Link href="/products" onClick={() => setOpen(false)} className="block hover:text-gray-300">Products</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block hover:text-gray-300">Contact</Link>
        </div>
      )}
    </header>
  );
}


