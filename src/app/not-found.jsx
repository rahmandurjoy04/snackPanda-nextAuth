'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function NotFound404() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-6 relative">
      {/* Big 404 */}
      <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
        404
      </h1>

      {/* Title */}
      <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-800">
        Page not found
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-gray-600 text-center max-w-lg">
        The page you are looking for doesn’t exist or may have been moved.
      </p>

      {/* Button */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition-all"
        >
          Go Home
        </button>
      </div>

      {/* Decorative blob */}
      <div className="absolute bottom-10 w-72 h-72 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    </div>
  );
}
