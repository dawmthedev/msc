// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Links
  const navLinks = [
    ["About us", "/about"],
    ["Leasing Solutions", "/solutions"],
    ["Services", "/services"],
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4 sm:py-6">
          {/* Logo / Brand */}
          <Link to="/" className="text-xl sm:text-2xl font-bold">
            <img
              src="/assets/logo.webp"
              alt="MetaSwap Capital Logo"
              className="h-10 sm:h-12"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-8">
            {navLinks.map(([title, path]) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? "text-primary-600"
                    : "text-gray-600 hover:text-primary-600"
                }`}
              >
                {title}
              </Link>
            ))}

            {/* BTC Orange Button (Shop) */}
            <Link
              to="/contact"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } py-4 space-y-4`}
        >
          {navLinks.map(([title, path]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-base font-medium transition-colors ${
                location.pathname === path
                  ? "text-primary-600"
                  : "text-gray-600 hover:text-primary-600"
              }`}
            >
              {title}
            </Link>
          ))}
          <Link
            to="/shop"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary transition-all"
          >
            Shop
          </Link>
        </div>
      </nav>
    </header>
  );
}
