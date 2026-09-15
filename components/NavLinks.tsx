'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    {href: '/projects', label: 'Projects'},
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex gap-6">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={
            pathname === link.href
              ? 'text-yellow-400 font-bold'
              : 'hover:text-yellow-400'
          }
          aria-current={pathname === link.href ? 'page' : undefined}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
