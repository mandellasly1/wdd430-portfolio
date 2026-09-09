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
