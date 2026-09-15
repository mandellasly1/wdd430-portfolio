import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md h-screen flex flex-col items-center justify-center rounded-xl shadow-lg bg-white p-8">
        <Image
          src="/profile.jpg"
          alt="Profile picture"
          width={180}
          height={180}
          className="rounded-full border-4 border-brand"
          priority
        />
        <h1 className="mt-6 text-3xl font-bold text-brand">
          Tailwind CSS Practice
        </h1>
        <p className="mt-4 text-purple-500 text-center">
          Tailwind CSS helps you style quickly with utility classes.
        </p>
        <div className="mt-6 w-full bg-background p-6 rounded-xl text-center text-foreground">
          This card now uses my purple background.
        </div>
      </div>
    </main>
  );
}


