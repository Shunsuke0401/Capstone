
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Passions from '@/components/Passions';
import Reflections from '@/components/Reflections';
import Future from '@/components/Future';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Passions />
      <Reflections />
      <Future />
      <Footer />
    </div>
  );
};

export default Index;
