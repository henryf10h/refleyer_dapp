// components/Footer.tsx
import React from 'react';

const Footer = () => {
    return (
      <footer className="p-4 bg-gray-800 text-white">
        <div className="flex justify-between items-center">
          <div>
            <img src="/path-to-footer-logo.png" alt="Footer Logo" className="h-8 mb-2" />
            <p>Short text goes here.</p>
          </div>
          <div>
            <p>Made with love by 0xFenrir</p>
            <a href="https://twitter.com/0xFenrir" target="_blank" rel="noopener noreferrer" className="block mt-1">
              {/* Insert Twitter icon using img tag or SVG */}
            </a>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <div>
            <a href="/privacy-policy" className="mr-4">Privacy Policy</a>
            <a href="/terms-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  