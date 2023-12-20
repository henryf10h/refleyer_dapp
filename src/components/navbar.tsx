"use client";
// components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import WalletBar from './WalletBar';

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This code runs only on the client side
    setIsClient(true);
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent absolute top-0 left-0 w-full z-10 navbar-glow sm:justify-center">
      <div className="flex items-center justify-between max-w-2xl mx-auto w-full flex-wrap">
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <img src="/logo1.png" alt="REFLEYER Logo" className="h-12 sm:h-24 mr-2" />
            <span className="font-bold text-lg sm:text-xl text-white">REFLECTER</span>
          </a>
        </Link>
        {isClient && <WalletBar />}
      </div>
    </nav>
  );
};

export default Navbar;
