import React from 'react';
import BlogCard from '../components/BlogCard';

export default function Blog() {
  const posts = [
    {
      title: 'Top 5 Energy-Efficient HVAC Upgrades for California Homes in 2025',
      slug: '/blog/energy-efficient-hvac-upgrades-2025',
      date: '2024-01-01',
      dateFormatted: 'Jan 1, 2024',
      tags: ['Energy Efficiency', 'HVAC Upgrades', 'California'],
      excerpt: 'Discover the latest HVAC technologies that can significantly reduce your energy bills while keeping your California home comfortable year-round.',
      image: '/api/placeholder/800/400',
      imageAlt: 'Modern HVAC system installation'
    }
    // More posts will be added dynamically
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">HVAC Insights & Tips</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Expert advice on HVAC maintenance, energy efficiency, and cost savings for California homeowners.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}