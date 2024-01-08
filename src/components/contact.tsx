// components/Contact.tsx
import React from 'react';
import ScrollAnimation from './ui/ScrollAnimation';

const Contact = () => {
  return (
    <section
      className="relative bg-cover bg-center p-8 flex justify-center items-center min-h-screen"
      style={{ backgroundImage: `url('/contact.png')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <ScrollAnimation>
      <div className="bg-white bg-opacity-30 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md w-full space-y-4">
        <h2 className="sm:text-3xl text-xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-start-gold to-end-torange font-pixeled leading-normal sm:leading-normal">
          Let's get creative!
        </h2>
        <p className="text-white text-center mb-6">
          Interested in exploring or have ideas to share? Contact us to delve into the possibilities and innovations within StarkNet's token landscape.
        </p>
        <div className="text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSedzopGfdVRbPlURv2T49VoyfJ9WQjXc_TGNij_mbeQTe09ZQ/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-transparent hover:text-white border border-white"
          >
            Contact
          </a>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Contact;

