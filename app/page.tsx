import ProjectList from '../components/ProjectList'

const products = [
  {
    title: 'Wireless Headphones',
    description: 'High‑quality sound with noise cancellation.',
    technologies: ['Bluetooth', 'Noise Cancelling'],
    link: '/products/headphones'
  },
  {
    title: 'Smart Watch',
    description: 'Track your fitness and stay connected.',
    technologies: ['Health Tracking', 'Notifications'],
    link: '/products/smartwatch'
  },
  {
    title: 'Gaming Laptop',
    description: 'Powerful performance for gaming and productivity.',
    technologies: ['Intel i7', 'RTX Graphics'],
    link: '/products/laptop'
  }
]

export default function Home() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-blue-600">
        Featured Products
      </h2>
      <ProjectList projects={products} />
    </section>
  )
}
