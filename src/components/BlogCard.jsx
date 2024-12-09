import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <article className="flex flex-col items-start">
      <div className="relative w-full">
        <img 
          src={post.image || '/api/placeholder/800/400'} 
          alt={post.imageAlt || 'Blog post thumbnail'} 
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={post.date} className="text-gray-500">{post.dateFormatted}</time>
          {post.tags?.map((tag) => (
            <span key={tag} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              {tag}
            </span>
          ))}
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link to={post.slug}>
              <span className="absolute inset-0"></span>
              {post.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
        </div>
      </div>
    </article>
  );
}