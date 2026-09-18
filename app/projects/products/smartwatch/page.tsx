import Image from 'next/image'
import Link from 'next/link'

export default function SmartWatchPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Back button */}
        <Link
          href="/"
          className="mb-6 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← Back to Products
        </Link>

        {/* Main Product Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl md:flex">

          {/* IMAGE */}
          <div className="relative flex min-h-[450px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-200 p-8 md:w-1/2">

            {/* Background decoration */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/40" />

            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-blue-200/40" />

            {/* Image container */}
            <div className="relative z-10 flex h-[350px] w-[90%] items-center justify-center rounded-3xl bg-white/70 p-6 shadow-2xl backdrop-blur">

              <Image
                src="/smartwatch.jpg"
                alt="Smart Watch"
                fill
                className="object-contain p-8 drop-shadow-2xl"
                priority
              />

            </div>

            {/* Badge */}
            <div className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-sm font-bold text-blue-600 shadow-md">
              ★ FEATURED
            </div>

          </div>

          {/* DETAILS */}
          <div className="w-full p-8 md:w-1/2">

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Smart Technology
            </span>

            <h1 className="mt-5 text-4xl font-bold text-gray-900">
              Smart Watch
            </h1>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Track your fitness and stay connected.
              Monitor your daily activities and receive
              important notifications directly from your wrist.
            </p>

            {/* Features */}
            <h2 className="mt-8 text-xl font-bold text-gray-900">
              Product Details
            </h2>

            <div className="mt-4 grid grid-cols-2 gap-3">

              <div className="rounded-xl bg-cyan-50 p-4">
                <p className="font-semibold text-cyan-700">
                  ✓ Health Tracking
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Monitor your health
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-4">
                <p className="font-semibold text-blue-700">
                  ✓ Notifications
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Stay connected
                </p>
              </div>

              <div className="rounded-xl bg-indigo-50 p-4">
                <p className="font-semibold text-indigo-700">
                  ✓ Fitness
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Track activities
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-4">
                <p className="font-semibold text-green-700">
                  ✓ Connectivity
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Stay connected
                </p>
              </div>

            </div>

            {/* Price */}
            <div className="mt-8 flex items-center justify-between border-t pt-6">

              <div>
                <p className="text-sm text-gray-500">
                  Price
                </p>

                <p className="text-3xl font-bold text-blue-600">
                  $149.99
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