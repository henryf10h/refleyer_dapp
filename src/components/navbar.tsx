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
    <nav className="flex flex-col sm:flex-row items-center justify-center sm:justify-between p-4 bg-transparent top-0 left-0 w-full z-10 shadow-lg shadow-white">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between max-w-2xl mx-auto w-full">
        <Link href="/" legacyBehavior>
          <a className="flex items-center mb-4 sm:mb-0">
            <img src="/logo1.png" alt="REFLECTER Logo" className="h-12 sm:h-24 mr-2" />
            <span className="font-bold text-lg sm:text-base text-white font-pixeled">REFLECTER</span> 
          </a>
        </Link>
        {isClient && <WalletBar />}
      </div>
    </nav>
  );
};

export default Navbar;
