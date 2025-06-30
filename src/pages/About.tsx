
import React from 'react';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
