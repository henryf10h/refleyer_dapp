// components/Hero.tsx
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="flex justify-center md:justify-start items-center min-h-screen p-8"
      style={{ backgroundImage: `url('/hero.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-full md:max-w-md mx-auto md:ml-56 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold to-orange">
          Deploy reflective tokens in StarkNet
        </h1>
        <p className="text-white mb-6">
          Ready to venture into the world of reflection mechanisms? The
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-orange font-bold"> REFLEYER </span>
          is where you come to think and deploy reflective tokens on StarkNet. Dive into innovation - start 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-orange font-bold"> building.</span>
        </p>
        <Link href="/app" legacyBehavior>
          <a className="inline-block bg-white text-black font-bold py-2 px-4 rounded hover:bg-transparent hover:text-white border border-white">
            Start!
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
