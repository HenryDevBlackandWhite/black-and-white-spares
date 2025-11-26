"use client";

import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import indexData from "@/data/search-index.json";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();

  const fuse = new Fuse(indexData, {
    keys: ["term"],
    threshold: 0.3
  });

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = fuse.search(query).slice(0, 8);
    setResults(filtered);
  }, [query]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (results.length > 0) {
        router.push(results[0].item.href);
        setQuery("");
        setResults([]);
      }
    }
  }

  function chooseResult(item) {
    router.push(item.href);
    setQuery("");
    setResults([]);
  }

  return (
    <div className="relative w-full max-w-lg">
      {/* Input */}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search parts, models, systems or categories..."
        className="w-full px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-600"
      />

      {/* Animated Dropdown */}
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 mt-2 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl z-50 overflow-hidden"
          >
            {results.map((r) => (
              <button
                key={r.item.term}
                onClick={() => chooseResult(r.item)}
                className="w-full flex justify-between px-4 py-2 hover:bg-neutral-800 text-white border-b border-neutral-800 last:border-none text-left"
              >
                <span>{r.item.term}</span>
                <span className="text-neutral-400 text-sm">{r.item.type}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}





