import Image from 'next/image'
import Link from 'next/link'

export default function LaptopPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/"
          className="mb-6 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← Back to Products
        </Link>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl md:flex">

          {/* IMAGE */}
          <div className="relative flex min-h-[450px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200 p-8 md:w-1/2">

            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/40" />

            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-indigo-200/40" />

            <div className="relative z-10 flex h-[350px] w-[90%] items-center justify-center rounded-3xl bg-white/70 p-6 shadow-2xl backdrop-blur">

              <Image
                src="/laptop.jpg"
                alt="Gaming Laptop"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-8 drop-shadow-2xl"
                priority
              />

            </div>

            <div className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-sm font-bold text-indigo-600 shadow-md">
              ★ FEATURED
            </div>

          </div>

          {/* DETAILS */}
          <div className="w-full p-8 md:w-1/2">

            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              Gaming &amp; Productivity
            </span>

            <h1 className="mt-5 text-4xl font-bold text-gray-900">
              Gaming Laptop
            </h1>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Powerful performance for gaming and productivity.
              Built to handle demanding games, applications,
              and everyday tasks with ease.
            </p>

            <h2 className="mt-8 text-xl font-bold text-gray-900">
              Product Details
            </h2>

            <div className="mt-4 grid grid-cols-2 gap-3">

              <div className="rounded-xl bg-blue-50 p-4">
                <p className="font-semibold text-blue-700">
                  ✓ Intel i7 Processor
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Powerful processing
                </p>
              </div>

              <div className="rounded-xl bg-purple-50 p-4">
                <p className="font-semibold text-purple-700">
                  ✓ RTX Graphics
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Immersive graphics
                </p>
              </div>

              <div className="rounded-xl bg-indigo-50 p-4">
                <p className="font-semibold text-indigo-700">
                  ✓ Gaming Performance
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Built for demanding games
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-4">
                <p className="font-semibold text-green-700">
                  ✓ Productivity
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Great for multitasking
                </p>
              </div>

            </div>

            <div className="mt-8 flex items-center justify-between border-t pt-6">

              <div>
                <p className="text-sm text-gray-500">
                  Price
                </p>

                <p className="text-3xl font-bold text-blue-600">
                  $1,299.99
                </p>
              </div>

              <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700">
                Buy Now
              </button>

            </div>

          </div>

        </div>
      </div>
    </main>
  )
}