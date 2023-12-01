// components/Contact.tsx
import React from 'react';

const Contact = () => {
    return (
      <section className="flex justify-center items-center p-8">
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
          <h3 className="text-2xl mb-4 font-bold">Contact Us</h3>
          <p className="mb-6">Fill in the form on our contact page or use the information below to reach out to us.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get in Touch
          </button>
        </div>
      </section>
    );
  };
  
  export default Contact;
  