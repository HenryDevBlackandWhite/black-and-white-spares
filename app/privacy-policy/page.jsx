"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-10 leading-relaxed text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Privacy Policy
      </motion.h1>

      <section className="space-y-6">
        <p>
          Our website privacy policy describes how we process information we collect and/or receive from you.
        </p>

        <h2 className="text-2xl font-semibold">Data Collection</h2>
        <p>Black & White Truck Spares (Pty) Ltd collects the following data:</p>
        <ul className="list-disc ml-6">
          <li>Personal identification information (Name, contact email address & phone number, ID number, physical address etc.)</li>
          <li>Cookies</li>
        </ul>

        <h2 className="text-2xl font-semibold">How data is collected</h2>
        <p>
          You directly provide Black & White Truck Spares (Pty) Ltd with most of the data we collect. We also collect and process data when you:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Access and use websites or social media platforms by using cookies, web beacons and other technologies</li>
          <li>Register online to receive newsletters, promotions or information regarding our services and product offerings</li>
          <li>Fill in forms on our website, or forms provided to you</li>
          <li>Place an order using our online web portal</li>
          <li>Voluntarily complete a customer survey or provide feedback</li>
          <li>Participate in any competition or promotion offered by us</li>
          <li>Use or view our website via your browser’s cookies</li>
          <li>Post comments or content on our social media pages</li>
          <li>Provide information via public records or where required by law</li>
        </ul>
        <p>
          We may also receive your data indirectly from Facebook Messenger, online reviews, or public feedback sites.
        </p>

        <h2 className="text-2xl font-semibold">Data Usage</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Communicate special offers and newsletters</li>
          <li>Respond to enquiries</li>
          <li>Perform online surveys</li>
          <li>Process orders and provide requested services</li>
          <li>We do not sell your personal information to third parties</li>
          <li>We may share information with group companies or service providers where necessary</li>
          <li>Disclose information if legally required</li>
        </ul>

        <h2 className="text-2xl font-semibold">Data Storage</h2>
        <p>
          Data is securely stored with our hosting providers:{" "}
          <a href="https://xneelo.co.za/" className="text-gray-300 underline hover:text-gray-100">Xneelo</a> and{" "}
          <a href="https://www.microsoft.com/en-za" className="text-gray-300 underline hover:text-gray-100">Microsoft</a>.  
          No banking or card payment details are stored on our website.
        </p>

        <h2 className="text-2xl font-semibold">Marketing</h2>
        <p>
          Black & White Truck Spares (Pty) Ltd sends information about products and services we believe may interest you.  
          You can opt out at any time by contacting us.
        </p>

        <h2 className="text-2xl font-semibold">Data Protection Rights</h2>
        <p>
          You may request to view, correct, update, or delete your personal data.  
          We respond to requests within one month. Contact details are below.
        </p>

        <h2 className="text-2xl font-semibold">Cookies</h2>
        <p>
          Cookies are text files placed on your device to collect standard internet log and visitor behaviour information.  
          Learn more at <a href="https://www.allaboutcookies.org" className="text-gray-300 underline hover:text-gray-100">allaboutcookies.org</a>.
        </p>
        <p>We use cookies to:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Keep you signed in</li>
          <li>Understand website usage</li>
          <li>Enable relevant advertising (e.g., via Facebook & Google)</li>
        </ul>

        <h2 className="text-2xl font-semibold">Privacy Policies of Other Websites</h2>
        <p>
          Black & White Truck Spares (Pty) Ltd website may contain links to other websites. This policy applies only to our site.
        </p>

        <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
        <p>Last updated: 01 July 2021.</p>

        <h2 className="text-2xl font-semibold">How to Contact Us</h2>
        <p>
          Email: <a href="mailto:info@bwts.co.za" className="text-gray-300 underline hover:text-gray-100">info@bwts.co.za</a><br />
          Tel: +27 (0)11 316 4980
        </p>

        <h2 className="text-2xl font-semibold">How to Contact the Appropriate Authority</h2>
        <p>
          Information Regulator’s Office  
          <br />Website: <a href="https://www.justice.gov.za/inforeg/" className="text-gray-300 underline hover:text-gray-100">justice.gov.za/inforeg</a>  
          <br />Email: <a href="mailto:inforeg@justice.gov.za" className="text-gray-300 underline hover:text-gray-100">inforeg@justice.gov.za</a>  
          <br />Address: 33 Hoofd Street, Forum III, 3rd Floor, Braampark, South Africa
        </p>
      </section>
    </main>
  );
}

