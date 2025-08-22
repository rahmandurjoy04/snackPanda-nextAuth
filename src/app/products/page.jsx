import Link from 'next/link';
import dbConnect from '@/lib/dbConnect';
export const revalidate = 60; // Optional: ISR, refresh every 60s

export default async function Products() {
  let products = [];
  let error = null;

  try {
    // Directly fetch products from MongoDB
    products = await dbConnect('products')
      .find({})
      .toArray(); // Fetch all products
  } catch (err) {
    console.error("Error fetching products:", err);
    error = "Failed to load products";
  }

  return (
    <div className='bg-gray-100 py-8 min-w-sm'>
      <div className="min-h-screen max-w-11/12 mx-auto">
        <div className="mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {products.length === 0 && !error && (
            <p className="text-center text-gray-600">No products found.</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                  <p className="text-lg font-bold text-gray-900 mb-4">${product.price}</p>
                  <Link href={`/products/${product._id}`}>
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
