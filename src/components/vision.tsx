// components/Vision.tsx
import React from 'react';
import Image from 'next/image';
import ScrollAnimation from './ui/ScrollAnimation';

const Vision = () => {
  return (
    <section
      className="relative bg-cover bg-center p-8"
      style={{ backgroundImage: `url('/vision.png')`, backgroundSize: 'cover', backgroundPosition: 'center'  }}
    >
    <ScrollAnimation>
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
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left p-4">
        <h2 className="sm:text-3xl text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-start-gold to-end-torange font-pixeled leading-normal sm:leading-normal">
          What are reflective tokens?
        </h2>
          <p className="text-white mb-6">
          Reflective tokens, akin to the well-known deflationary tokens, apply a % fee to each transaction. This fee is instantly split among all holders, ensuring immediate benefits without staking or waiting. The smart contract automatically adjusts holder's balances, making the process seamless and efficient.
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
      </ScrollAnimation>
    </section>
  );
};

export default Vision;