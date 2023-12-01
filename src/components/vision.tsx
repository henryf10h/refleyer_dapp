// components/Vision.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Vision = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Vision Title</h2>
      <p className="mb-6 text-center">Here is some text that describes the vision of the company.</p>
      <div className="flex justify-center mb-6">
        <Image src="/path-to-vision-image.png" alt="Vision Image" width={500} height={300} layout="responsive" />
      </div>
      <div className="text-center">
        <Link href="/contact" legacyBehavior>
          <a className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Vision;
