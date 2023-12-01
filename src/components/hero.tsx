// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Title of the Hero Section</h1>
      <p className="mb-6">Description text goes here and elaborates on the title.</p>
      <div className="mb-6">
        <Image src="/path-to-hero-image.png" alt="Hero Image" width={500} height={300} layout="responsive" />
      </div>
      <Link href="/next-section" legacyBehavior>
        <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Call to Action
        </a>
      </Link>
    </section>
  );
};

export default Hero;
