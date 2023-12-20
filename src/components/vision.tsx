// components/Vision.tsx
import React from 'react';
import Image from 'next/image';

const Vision = () => {
  return (
    <section
      className="relative bg-cover bg-center p-8"
      style={{ backgroundImage: `url('/vision.png')`, backgroundSize: 'cover', backgroundPosition: 'center'  }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center min-h-screen">
        {/* Image container */}
      <div className="flex justify-center lg:w-1/2 mb-8 lg:mb-0">
          
          <Image 
            src="/vision-1.png" 
            alt="Vision Image" 
            width={500} 
            height={300}
            // className="glowing-border"
          />
        
      </div>

        {/* Text container */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-start-gold to-end-torange">
          What are reflective tokens?
        </h2>
          <p className="text-white mb-6">
            We aim to revolutionize the way reflective tokens are used, providing innovative solutions that enable new possibilities in StarkNet.
          </p>
          <a
            href="https://github.com/henryf10h/reflect_cairo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-bold py-2 px-4 rounded hover:bg-transparent hover:text-white border border-white"
          >
            GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default Vision;