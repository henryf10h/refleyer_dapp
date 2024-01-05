// app/page.tsx
import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
