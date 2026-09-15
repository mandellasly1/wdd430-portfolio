import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        {/* Left side: Title */}
        <div className="text-2xl font-bold">Nelson Mandella Akpomah</div>
        
        {/* Right side: Navigation */}
        <NavLinks />
      </div>
    </header>
  );
}
