import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              <img
                src="/assets/logo.png"
                alt="Mintair Logo"
                className="h-12" // Changed from h-13px to h-12 for better sizing
              />
            </Link>
            <p className="text-gray-500 text-base">
              Expert HVAC solutions for California homeowners.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/services"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/maintenance"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/installation"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Installation
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/contact"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            {" "}
            &copy; 2024 mintair.co. All rights reserved. | Powered by Voltaic
          </p>
        </div>
      </div>
    </footer>
  );
}
