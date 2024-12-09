// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import LeadCaptureForm from "../components/LeadCaptureform";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
              California's Trusted HVAC Experts
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
              Since 2010, we've been delivering premium heating and cooling
              solutions to homeowners across California, combining technical
              expertise with exceptional customer service.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "13+", label: "Years Experience" },
              { number: "5,000+", label: "Projects Completed" },
              { number: "99%", label: "Customer Satisfaction" },
              { number: "24/7", label: "Emergency Service" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold tracking-tight text-blue-600">
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

      {/* Certifications */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Licensed & Certified
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3">
            {[
              { name: "EPA Certified", image: "/images/epa-certified.svg" },
              { name: "NATE Certified", image: "/images/nate-certified.svg" },
              { name: "Energy Star Partner", image: "/images/energy-star.svg" },
            ].map((cert) => (
              <div key={cert.name} className="flex items-center justify-center">
                <img
                  className="h-16 object-contain"
                  src={cert.image}
                  alt={cert.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Serving All of Southern California
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our service area covers Los Angeles, Orange County, and San
                Diego, providing prompt, reliable HVAC services to homeowners
                across the region.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Los Angeles County",
                  "Orange County",
                  "San Diego County",
                  "Riverside County",
                  "San Bernardino County",
                  "Ventura County",
                ].map((area) => (
                  <li key={area} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-600">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                className="rounded-2xl object-cover"
                src="https://source.unsplash.com/random/800x600/?california-map"
                alt="Service area map"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <LeadCaptureForm className="shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
