
import React from 'react';
import Header from '@/components/Header';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';

const Skills = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
