"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white shadow-lg rounded-2xl p-6">
        {/* Left div - info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Delicious Snacks</h2>
          <p className="text-gray-600">
            Enjoy a variety of tasty and healthy snacks made with fresh
            ingredients. Perfect for a quick bite or sharing with friends.
          </p>
          <button
            onClick={() => router.push("/snacks")}
            className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            See More
          </button>
        </div>

        {/* Right div - image */}
        <div className="flex justify-center">
          <Image
            src="/snack.jpg" // put your image in /public/snack.jpg
            alt="Snacks"
            width={350}
            height={250}
            className="rounded-xl object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
