import Link from 'next/link';
import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
export const dynamic = "force-dynamic";

export default async function ProductDetails({ params }) {
  let product = null;
  let error = null;

  try {
    const { id } =await params;

    if (!ObjectId.isValid(id)) {
      throw new Error("Invalid product ID");
    }

    // Fetch product directly from MongoDB
    product = await dbConnect('products').findOne({ _id: new ObjectId(id) });

    if (!product) {
      throw new Error("Product not found");
    }
  } catch (err) {
    console.error("Error fetching product:", err);
    error = err.message || "Failed to load product";
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <p className="text-red-500 text-center text-lg">{error}</p>
          <Link href="/products" className="block text-center text-blue-600 hover:underline mt-4">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <Link href="/products" className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Back to Products
        </Link>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-contain rounded-md mb-6"
          />
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-bold text-gray-900 mb-2">Price: ${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-4">Quantity: {product.quantity}</p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Nutritional Value</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {product.nutritional_value.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
