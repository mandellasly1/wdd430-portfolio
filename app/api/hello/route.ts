export async function GET() {
  return Response.json({
    message: "Welcome to our store! Check out our products below.",
    products: [
      {
        id: 1,
        title: 'Wireless Headphones',
        price: 99.99,
        description: 'High‑quality sound with noise cancellation.'
      },
      {
        id: 2,
        title: 'Smart Watch',
        price: 149.99,
        description: 'Track your fitness and stay connected.'
      },
      {
        id: 3,
        title: 'Gaming Laptop',
        price: 1299.99,
        description: 'Powerful performance for gaming and productivity.'
      }
    ]
  })
  
}



/*
export const dynamic = 'force-dynamic';

export default async function StorePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hello`);
  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600">Store</h1>
      <p className="mt-2 text-gray-700">{data.message}</p>
      <ul className="mt-4 space-y-4">
        {data.products.map((p: any) => (
          <li key={p.id} className="border p-4 rounded-md shadow-sm">
            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-500">{p.description}</p>
            <p className="text-green-600 font-bold">${p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


*/