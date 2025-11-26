"use client";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-10 leading-relaxed text-white bg-neutral-950">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Terms and Conditions
      </motion.h1>

      <section className="space-y-6">
        <p>
          These terms and conditions outline the rules and regulations for the use of Black & White Truck Spares (Pty) Ltd’s website.
        </p>

        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, you agree to comply with these Terms and Conditions. If you do not agree, please discontinue use of the site.
        </p>

        <h2 className="text-2xl font-semibold">2. Use of Website</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>You may use this website for lawful purposes only.</li>
          <li>You may not copy, distribute, or modify any content without written consent.</li>
          <li>We reserve the right to restrict access to certain areas of the website at any time.</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Products and Services</h2>
        <p>
          Product descriptions, pricing, and availability are subject to change without notice. We make reasonable efforts to ensure accuracy but do not guarantee completeness or correctness.
        </p>

        <h2 className="text-2xl font-semibold">4. Limitation of Liability</h2>
        <p>
          Black & White Truck Spares (Pty) Ltd shall not be held liable for any loss or damage resulting from use or inability to use the website, including indirect or consequential damages.
        </p>

        <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
        <p>
          All content, trademarks, logos, and images are the property of Black & White Truck Spares (Pty) Ltd or its licensors. Unauthorized use is prohibited.
        </p>

        <h2 className="text-2xl font-semibold">6. External Links</h2>
        <p>
          Our website may contain links to external websites. We are not responsible for their content or privacy practices.
        </p>

        <h2 className="text-2xl font-semibold">7. Privacy</h2>
        <p>
          Your use of our website is also governed by our{" "}
          <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
            Privacy Policy
          </a>.
        </p>

        <h2 className="text-2xl font-semibold">8. Changes to These Terms</h2>
        <p>
          We may revise these terms at any time by updating this page. Continued use of the website means you accept the updated terms.
        </p>

        <h2 className="text-2xl font-semibold">9. Governing Law</h2>
        <p>
          These terms are governed by the laws of South Africa. Any disputes shall be handled in the appropriate South African courts.
        </p>

        <h2 className="text-2xl font-semibold">10. Contact Us</h2>
        <p>
          For questions about these terms, please contact us:<br />
          Email:{" "}
          <a href="mailto:info@bwts.co.za" className="text-gray-300 hover:text-white transition-colors">
            info@bwts.co.za
          </a>
          <br />
          Tel: +27 (0)11 316 4980
        </p>
      </section>
    </main>
  );
}
