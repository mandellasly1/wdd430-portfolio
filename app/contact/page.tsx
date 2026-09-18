import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Get In Touch
          </span>

          <h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Let&apos;s Work Together
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question, project idea, or just want to say hello?
            I&apos;d love to hear from you. Send me a message and
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl md:flex">

          {/* LEFT SIDE */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 text-white md:w-[40%] md:p-10">

            {/* Decorative circles */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-white/10" />

            <div className="relative z-10">

              <h2 className="text-3xl font-bold">
                Contact Information
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Feel free to reach out. Whether you have a project
                in mind or want to connect, I&apos;m always happy to
                hear from you.
              </p>

              {/* Email */}
              <div className="mt-10 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl">
                  ✉
                </div>

                <div>
                  <p className="text-sm text-blue-200">
                    Email
                  </p>

                  <a
                    href="mailto:your@email.com"
                    className="mt-1 block font-medium hover:text-blue-200"
                  >
                    akpomah_nelson@yahoo.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl">
                  ☎
                </div>

                <div>
                  <p className="text-sm text-blue-200">
                    Phone
                  </p>

                  <a
                    href="tel:+2340000000000"
                    className="mt-1 block font-medium hover:text-blue-200"
                  >
                    +234 9032345914
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-sm text-blue-200">
                    Location
                  </p>

                  <p className="mt-1 font-medium">
                    Nigeria
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 border-t border-white/20 pt-8">
                <p className="text-sm text-blue-200">
                  Connect with me
                </p>

                <div className="mt-4 flex gap-3">

                  <a
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 font-bold transition hover:bg-white hover:text-blue-600"
                  >
                    FB
                  </a>

                  <a
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 font-bold transition hover:bg-white hover:text-blue-600"
                  >
                    in
                  </a>

                  <a
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 font-bold transition hover:bg-white hover:text-blue-600"
                  >
                    X
                  </a>

                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="p-8 md:w-[60%] md:p-10">

            <h2 className="text-2xl font-bold text-gray-900">
              Send Me a Message
            </h2>

            <p className="mt-2 text-gray-600">
              Fill out the form below and I&apos;ll get back to you.
            </p>

            <form className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:from-blue-700 hover:to-indigo-700"
              >
                Send Message →
              </button>

            </form>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center">
          <p className="font-medium text-gray-800">
            Looking for a developer for your next project?
          </p>

          <p className="mt-1 text-sm text-gray-600">
            Let&apos;s turn your ideas into a functional and beautiful web experience.
          </p>
        </div>

      </div>
    </main>
  )
}