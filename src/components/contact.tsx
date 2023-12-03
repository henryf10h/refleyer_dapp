// components/Contact.tsx
import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section
      className="relative bg-cover bg-center p-8 flex justify-center items-center min-h-screen"
      style={{ backgroundImage: `url('/contact.png')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="bg-white bg-opacity-30 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md w-full space-y-4">
        {/* The bg-opacity-30 controls the opacity */}
        {/* The backdrop-blur-sm adds a blur effect to the background elements behind the card */}
        <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-start-gold to-end-orange">
          Let's get creative!
        </h2>
        <p className="text-white text-center mb-6">
          Have any questions or want to get started with our services? Reach out to us.
        </p>
        <div className="text-center">
          {/* Use Link component properly by passing only one child */}
          <Link href="/contact" legacyBehavior>
            <a className="inline-block bg-white text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-transparent hover:text-white border border-white">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
