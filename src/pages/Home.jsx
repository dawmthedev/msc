// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8 gradient-text">
            Expert HVAC Solutions for California Homes
          </h1>
          <p className="text-lg leading-8 text-gray-600 mb-12">
            Professional heating and cooling services that keep your home
            comfortable year-round. Energy-efficient solutions tailored to
            California's unique climate.
          </p>
          <div className="flex gap-x-6 justify-center">
            <Link
              to="/contact"
              className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/services"
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
