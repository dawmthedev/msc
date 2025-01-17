// src/pages/About.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LeadCaptureForm from "../components/LeadCaptureform";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Only trigger the animation once
    });
  }, []);

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <div className="relative isolate" data-aos="fade-up">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-100/20" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your Gateway to the Future of Bitcoin ATMs
            </h1>
            <span className="text-6xl pt-5 pb-10 inline-block">⚡</span>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Metaswap Capital, we believe everyone should have easy, secure
              access to crypto—no matter where they are in the U.S. Our mission
              is simple: empower businesses with turnkey Bitcoin ATM solutions
              that spark new revenue and bring the world of decentralized
              finance a little closer to home. 🌎
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "8+", label: "Years in Crypto" },
              { number: "10k+", label: "Assets Deployed" },
              { number: "98%", label: "Lessee Satisfaction" },
              { number: "3", label: "Countries Served" },
            ].map((stat) => (
              <div key={stat.label} className="text-center" data-aos="fade-up">
                <div className="text-4xl font-bold tracking-tight text-orange-600">
                  {stat.number}
                </div>
                <div className="mt-2 text-base font-semibold text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications / Partnerships */}
      <div className="bg-gray-50 py-16" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-10">
            Trusted & Recognized 🏅
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              data-aos="fade-up"
            >
              <div className="text-center">
                <div className="inline-block p-3 rounded-full bg-orange-50 mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  KYC/AML Compliant
                </h3>
                <p className="text-gray-600">
                  Fully aligned with banking regulations to keep your business
                  safe.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              data-aos="fade-up"
            >
              <div className="text-center">
                <div className="inline-block p-3 rounded-full bg-orange-50 mb-4">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Strategic Exchange Partnerships
                </h3>
                <p className="text-gray-600">
                  Collaborations with top crypto platforms for seamless
                  transactions.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              data-aos="fade-up"
            >
              <div className="text-center">
                <div className="inline-block p-3 rounded-full bg-orange-50 mb-4">
                  <svg
                    className="w-7 h-7 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Industry-Leading Support
                </h3>
                <p className="text-gray-600">
                  Our dedicated team stands by 24/7 to ensure smooth operations.
                  🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nationwide Coverage */}
      <div className="bg-white py-16" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Serving Businesses Coast to Coast 🗺️
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From New York skyscrapers 🏙️ to sunny California beaches 🌴,
                Metaswap Capital is proud to bring secure and
                low-barrier-to-entry Bitcoin ATM solutions to every corner of
                the U.S. We’re on a mission to empower entrepreneurs, store
                owners, and corporations alike to access the next frontier of
                finance—no matter their size or location.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { area: "US", icon: "🇺🇸" },
                  { area: "Canada", icon: "🇨🇦" },
                  { area: "Mexico", icon: "🇲🇽" },
                  { area: "Coming Soon", icon: "🌏" },
                ].map(({ area, icon }) => (
                  <li
                    key={area}
                    className="flex items-center bg-orange-50 p-3 rounded-lg 
                             hover:bg-orange-100 transition-colors"
                  >
                    <span className="text-xl mr-2">{icon}</span>
                    <span className="text-gray-600 font-medium">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 shadow-lg">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full"
                  style={{ padding: "20px" }}
                >
                  {/* Simplified U.S. shape */}
                  <path
                    d="M50,50 L350,50 L350,250 L50,250 Z"
                    fill="#fff"
                    stroke="#d97706"
                    strokeWidth="3"
                  />
                  {/* Example location markers */}
                  <circle cx="110" cy="80" r="8" fill="#d97706" />
                  <text x="125" y="85" className="text-sm" fill="#b45309">
                    North America
                  </text>

                  <circle cx="250" cy="150" r="8" fill="#d97706" />
                  <text x="265" y="155" className="text-sm" fill="#b45309">
                    East Asia
                  </text>

                  <circle cx="80" cy="200" r="8" fill="#d97706" />
                  <text x="95" y="205" className="text-sm" fill="#b45309">
                    South America
                  </text>

                  {/* Surrounding Note */}
                  <text
                    x="60"
                    y="280"
                    className="text-lg font-bold"
                    fill="#d97706"
                  >
                    Around the Globe 🌎
                  </text>
                </svg>
              </div>
              <div className="absolute -right-6 -top-6 bg-orange-600 text-white p-3 rounded-full shadow-lg">
                <span className="text-2xl">🌐</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16" data-aos="fade-up">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <LeadCaptureForm className="shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
