import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-gray-200 py-6">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">mintair.co</Link>
          </div>
          <div className="ml-10 space-x-8">
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">About</Link>
            <Link to="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">Blog</Link>
            <Link to="/contact" className="inline-block rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}