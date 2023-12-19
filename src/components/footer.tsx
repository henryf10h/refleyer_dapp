// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center p-8 text-white"
      style={{ backgroundImage: `url('/footer.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo and Made with love text */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center w-full mb-4">
          {/* Logo */}
          <img src="/starknet.svg" alt="REFLEYER Logo" className="w-16 h-16 lg:w-32 lg:h-32" />

          {/* Made with love by text */}
          <p className="mt-4 lg:mt-0">
            Made With ❤️ By <Link href="https://twitter.com/Fenrir_67" legacyBehavior><a className="hover:underline" target="_blank" rel="noopener noreferrer">0xFenrir</a></Link>
          </p>
        </div>
        
        {/* Horizontal line */}
        <hr className="border-t border-gray-700 w-full my-4" />

        {/* Footer bottom content */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <p className="text-xs mb-2 md:mb-0">
            © 2023 REFLECTER.FINANCE. All right reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" legacyBehavior>
              <a className="text-xs hover:underline">
                Privacy Policy
              </a>
            </Link>
            <Link href="/terms-of-service" legacyBehavior>
              <a className="text-xs hover:underline">
                Terms of Service
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
