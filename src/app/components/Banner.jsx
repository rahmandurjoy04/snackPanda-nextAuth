import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
    <div className=" max-w-11/12 mx-auto my-10 rounded-2xl min-w-sm bg-base-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 md:p-2">
        {/* Left div - info */}
        <div className="space-y-8 md:ml-10">
          <h2 className="text-4xl font-bold text-gray-800">Delicious Snacks</h2>
          <p className="text-gray-600 text-lg">
            Enjoy a variety of tasty and healthy snacks made with fresh
            ingredients. Perfect for a quick bite or sharing with friends.
          </p>
          <Link href={'/products'}
            className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            See More
          </Link>
        </div>

        {/* Right div - image */}
        <div className="flex justify-center">
          <Image
            src="/snacks-banner.png" 
            alt="Snacks"
            width={350}
            height={250}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}
