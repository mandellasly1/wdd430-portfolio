import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        {/* Left side: Title */}
        <div id="header-title" className="text-2xl font-bold">
          Nelson Mandella Akpomah
        </div>


        {/* Right side: Navigation */}
        <nav>
          <ul className="flex gap-6 justify-end">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
