"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const STORAGE_KEY = "bw-cookie-consent";

type ConsentValue = "accepted" | "rejected";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value: ConsentValue) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value);
    }

    // TODO: hook your analytics / tracking here, e.g.
    // if (value === "accepted") enableAnalytics();
    // else disableAnalytics();

    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
        >
          <div className="pointer-events-auto mx-auto max-w-4xl rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur shadow-xl">
            <div className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:px-6 sm:py-5">
              <div className="flex-1 space-y-1.5">
                <p className="text-sm font-semibold tracking-wide text-white">
                  Cookies on Black &amp; White Spares
                </p>
                <p className="text-xs sm:text-sm text-gray-300">
                  We use cookies to improve your experience, and to help us
                  understand how our website is used. You can choose to accept
                  all cookies or only those that are strictly necessary.
                </p>
                <p className="text-[11px] sm:text-xs text-gray-400">
                  Read more in our{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline underline-offset-2 hover:text-gray-200"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => handleChoice("rejected")}
                  className="inline-flex items-center justify-center rounded-full border border-gray-500/60 px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-100 hover:bg-gray-800 transition"
                >
                  Only necessary
                </button>
                <button
                  type="button"
                  onClick={() => handleChoice("accepted")}
                  className="inline-flex items-center justify-center rounded-full bg-gray-800 text-white px-4 py-1.5 text-xs sm:text-sm font-semibold shadow hover:bg-gray-700 transition"

                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
