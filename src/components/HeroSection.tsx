
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-primary/70 flex items-center justify-center text-6xl font-bold text-primary-foreground">
              CG
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Chellappan G
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Full Stack Developer | Cybersecurity Enthusiast
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate software developer with expertise in web development, cybersecurity, and modern tech stacks. 
            Building secure, scalable applications that blend user-focused design with robust backend systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="mt-12">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="animate-bounce"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
