const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    description: "High-quality sound with noise cancellation.",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 149.99,
    description: "Track your fitness and stay connected.",
  },
  {
    id: 3,
    title: "Gaming Laptop",
    price: 1299.99,
    description: "Powerful performance for gaming and productivity.",
  },
];

export default function ProductsPage() {
  return (
    <main className="p-8">
      <h1 className="mb-8 text-3xl font-bold text-blue-600">
        Featured Products
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border p-6 shadow-md"
          >
            <h2 className="mb-2 text-xl font-bold">
              {product.title}
            </h2>

            <p className="mb-4 text-gray-600">
              {product.description}
            </p>

            <p className="text-lg font-semibold text-green-600">
              ${product.price.toFixed(2)}
            </p>

            <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              View Product
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}