// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" legacyBehavior>
        <a className="flex items-center">
          <img src="/path-to-your-logo.png" alt="REFLEYER Logo" className="h-8 mr-2" />
          <span className="font-bold text-xl">REFLEYER</span>
        </a>
      </Link>
      <Link href="/some-path" legacyBehavior>
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button Text
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;

