// components/Hero.tsx
import React from 'react';
import Link from 'next/link';
import ScrollAnimation from './ui/ScrollAnimation';

const Hero = () => {
  return (
    <section
      className="flex justify-center md:justify-start items-center min-h-screen p-8"
      style={{ backgroundImage: `url('/hero.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <ScrollAnimation>
      <div className="w-full md:max-w-md mx-auto md:ml-56 text-center md:text-left p-4">
        <h1 className="sm:text-4xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-torange leading-normal sm:leading-normal font-pixeled">
          BUILDING PRIMITIVES ON STARKNET
        </h1>
        <p className="text-white mb-6 mt-6">
          Introducing a new  
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-torange font-bold"> Token Standard </span>
          with an in-built Reflection Mechanism. With 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-torange font-bold"> REFLECTER.FINANCE</span>
          , experience the ease of token creation through our no-code dApp.
        </p>
        <Link href="/app" legacyBehavior>
          <a className="relative inline-block bg-white text-black font-bold py-2 px-4 rounded hover:bg-transparent hover:text-white border border-white overflow-visible">
            <span className="animate-ping absolute -top-1 -right-1 inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
            <span className="absolute -top-1 -right-1 inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            START
          </a>
        </Link>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Hero;
