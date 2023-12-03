// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center p-4 bg-transparent absolute top-0 left-0 w-full z-10 navbar-glow">
      <div className="flex items-center justify-between max-w-2xl mx-auto w-full">
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <img src="/logo.png" alt="REFLEYER Logo" className="h-24 mr-2" />
            <span className="font-bold text-xl text-white">REFLEYER</span>
          </a>
        </Link>
        <Link href="/some-path" legacyBehavior>
          <a className="text-white border border-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded">
            Connect
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
