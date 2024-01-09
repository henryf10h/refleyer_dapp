// app/page.tsx
import React from 'react';
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Vision from "../components/vision";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Page = () => {
  return (
<div className='flex flex-col min-h-screen bg-black'>
  <Navbar/>
  {/* `Hero`, `Vision`, `Contact`, and `Footer` will follow and be part of the normal document flow */}
  <Hero />
  <Vision />
  <Contact />
  <Footer />
  {/* The background image can be part of the `Hero` component or set as a background to this main container */}
</div>

  );
};

export default Page;
