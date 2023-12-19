// app/page.tsx
import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
