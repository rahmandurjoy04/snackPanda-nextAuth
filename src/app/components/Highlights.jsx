import Link from "next/link";

export default async function Highlights() {
  let products = [];
  let error = null;

  try {
    // Fetch data from the API route
    const res = await fetch(`${process.env.BASE_URL}/api/products`, {
      cache: "no-store", // Ensure fresh data
    });
    const { data } = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    // Limit to 4 products
    products = data ? data.slice(0, 4) : [];
  } catch (err) {
    console.error("Error fetching products:", err);
    error = "Failed to load highlights";
  }

  return (
    <section className="py-8 max-w-11/12 mx-auto">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Highlights</h2>
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}
        {products.length === 0 && !error && (
          <p className="text-center text-gray-600">No products available.</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-base-100 rounded-lg shadow-xl overflow-hidden hover:shadow-lg hover:shadow-blue-200 transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-t-lg h-40 object-contain p-5"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-lg font-bold text-gray-900 mb-3">${product.price}</p>
                <Link href={`/products/${product._id}`}>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}