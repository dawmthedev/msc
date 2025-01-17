import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo & Brief Description */}
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="text-2xl font-bold text-orange-600">
              <img
                src="/assets/logo.webp"
                alt="MetaSwap Capital Logo"
                className="h-12"
              />
            </Link>
            <p className="text-gray-500 text-base">
              Empowering Businesses with Flexible Bitcoin ATM Leasing Solutions.
            </p>
          </div>

          {/* Nav Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* First Column */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Services
                </h3>
                <ul className="mt-4 space-y-4">
                  {/* Products */}
                  {/* <li>
                    <Link
                      to="/products"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Products
                    </Link>
                  </li> */}

                  {/* Leasing & Financing */}
                  {/* <li>
                    <Link
                      to="/leasing"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Leasing & Financing
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      to="/contact"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Maintenance & Support
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Second Column */}
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  {/* Blog */}
                  {/* <li>
                    <Link
                      to="/blog"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Blog
                    </Link>
                  </li> */}

                  {/* FAQ TODO  */}

                  {/* <li>
                    <Link
                      to="/faq"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      FAQ
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      to="/contact"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400 xl:text-center">
            &copy; 2025 Metaswap Capital, Inc. All rights reserved. | Powered by
            Metaswap™
          </p>
        </div>
      </div>
    </footer>
  );
}
