import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoBanner from "../components/LogoBanner";
import { motion } from "framer-motion";

export default function Home() {
  const [reviews, setReviews] = useState([
    {
      name: "John D.",
      rating: 5,
      review:
        "Outstanding service! They were professional, efficient, and solved our AC issues quickly.",
      pfp: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Sarah M.",
      rating: 5,
      review: "Great experience! Very knowledgeable team and fair pricing.",
      pfp: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Mike R.",
      rating: 5,
      review: "Excellent service from start to finish. Highly recommend!",
      pfp: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative isolate">
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            {/* /* /* /* /* Main Hero Here */}
            <div className="mx-auto max-w-2xl text-center py-8 ">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-10 bg-clip-text text-transparent bg-gradient-to-b from-primary to-[#1D354C] leading-normal pb-1">
                Empower Your Business with Flexible Bitcoin ATM Leasing ⚡️
                <br />
              </h1>
              <p className="text-lg leading-8 text-gray-600 mb-14">
                Metaswap Capital simplifies crypto adoption, unlocks new
                revenue, minimizes risk, and embraces the future of digital
                finance.
              </p>
              <div className="flex gap-x-6 justify-center">
                <Link
                  to="/contact"
                  className="rounded-md bg-primary px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="rounded-md bg-white px-4 py-2 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
            {/* FUN ANIMATON HERE */}
            <div className="pt-10">
              <LogoBanner />
            </div>
            {/* 3 CERTIFICATIONS HERE */}
            <div className="mt-16">
              <h2 className="text-center text-2xl font-bold mb-8">
                Certified & Accredited Crypto Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <div className="text-center">
                    <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
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
                      Equipment Leasing Certified
                    </h3>
                    <p className="text-gray-600">
                      Recognized by industry authorities for delivering seamless
                      and compliant lease services.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <div className="text-center">
                    <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
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
                      Regulatory Compliance Focus
                    </h3>
                    <p className="text-gray-600">
                      Adhering to strict KYC/AML standards, ensuring your BTM
                      operations remain secure and trusted.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <div className="text-center">
                    <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
                      <svg
                        className="w-8 h-8 text-primary"
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
                      Crypto & Fintech Innovators
                    </h3>
                    <p className="text-gray-600">
                      Awarded for our commitment to advancing BTM technology and
                      driving results for our partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 3.  Banner TO GET STARTED with start.gif */}
            <div className="bg-primary mt-16">
              <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                <div className="text-white max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Ready to Start Your BTM Business?
                  </h2>
                  <p className="text-lg leading-8 text-gray-100">
                    Join the digital currency revolution with our flexible
                    leasing solutions.
                  </p>
                </div>
                <div className="mt-8 md:mt-0 text-center">
                  <Link
                    to="/contact"
                    className="inline-block rounded-md bg-white px-8 py-3 text-lg font-semibold text-primary shadow-sm hover:bg-gray-100 transition-all"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </div>
            {/* Google reviews here , last 3 with (see more option and total review count) */}
            {/* <div className="mt-16">
              <h2 className="text-center text-2xl font-bold mb-8">
                What Our Customers Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={review.pfp}
                        alt={`${review.name}'s profile`}
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="ml-2 text-gray-600">{review.rating}.0</p>
                    </div>
                    <p className="text-gray-600 mb-4">"{review.review}"</p>
                    <p className="font-semibold">- {review.name}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <a
                  href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LKosMY5PSTIzYLRSMahITDFINUpNTDU0NDY0trBIsTKoSDVPTTa3MDI2MjJKtTAy8BIpy88pScxMVkjOzysuKSpNLsnMzwMAOIAXMQ&q=voltaic+construction&oq=votlaicconstrct&gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIJCAMQABgNGIAEMgkIBBAAGA0YgAQyCAgFEAAYDRgeMggIBhAAGA0YHjIKCAcQABgIGA0YHjIKCAgQABgIGA0YHtIBCDMzODFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#mpd=~16398593950503221256/customers/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-primary px-3 py-1.5 text-base font-semibold text-white hover:bg-primary/90 transition-all"
                >
                  See More Reviews
                </a>
              </div>
            </div> */}
            {/* Final Call to action to forward to the contact page. Make this absolutely amazing.  */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
