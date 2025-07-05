
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Award, Target, Zap } from 'lucide-react';
import SkeletonLoader from './SkeletonLoader';

const AboutSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      year: "2024",
      description: "Advanced studies in computer applications and software development",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Diploma in Cybersecurity",
      year: "2021-2024",
      description: "Specialized training in offensive and defensive cybersecurity (parallel to MCA)",
      icon: <Award className="h-6 w-6" />
    },
    {
      degree: "BSc in Mathematics",
      year: "2021",
      description: "Strong foundation in mathematical concepts and analytical thinking",
      icon: <Target className="h-6 w-6" />
    }
  ];

  const highlights = [
    { label: "Years of Experience", value: "3+", icon: <Zap className="h-5 w-5" /> },
    { label: "Projects Completed", value: "50+", icon: <Target className="h-5 w-5" /> },
    { label: "Technologies Mastered", value: "15+", icon: <Award className="h-5 w-5" /> }
  ];

  if (isLoading) {
    return (
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <SkeletonLoader type="text" lines={1} className="max-w-md mx-auto mb-4" />
          </div>
          
          {/* Stats skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonLoader key={index} type="card" className="h-32" />
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Content skeleton */}
            <div className="space-y-6">
              <div className="animate-pulse bg-muted rounded-2xl w-full h-64 sm:h-80"></div>
              <SkeletonLoader type="text" lines={1} className="mb-6" />
              <SkeletonLoader type="text" lines={8} />
            </div>
            
            {/* Education skeleton */}
            <div>
              <SkeletonLoader type="text" lines={1} className="mb-8" />
              <div className="space-y-6">
                {Array.from({ length: 3 }).map((_, index) => (
                  <SkeletonLoader key={index} type="card" className="h-32" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full animate-shimmer"></div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm group" style={{animationDelay: `${index * 200}ms`}}>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:animate-pulse">
                    {highlight.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 animate-shimmer">{highlight.value}</div>
                <div className="text-sm text-muted-foreground">{highlight.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* About Content */}
          <div className="space-y-6 animate-fade-in delay-300">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
                alt="Developer workspace with code on screen"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-medium animate-pulse">My Development Environment</div>
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 flex items-center gap-3 animate-fade-in">
              <div className="w-2 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full animate-shimmer"></div>
              Who I Am
            </h3>
            <div className="text-muted-foreground space-y-4 text-base sm:text-lg leading-relaxed">
              <p className="hover:text-foreground transition-colors duration-300 animate-fade-in">
                I'm <span className="text-primary font-semibold">Chellappan G</span>, a passionate software developer with a strong background in web development, 
                cybersecurity, and modern tech stacks. With hands-on experience building secure, scalable applications, 
                I'm committed to creating impactful digital solutions that blend user-focused design with robust backend systems.
              </p>
              <p className="hover:text-foreground transition-colors duration-300 animate-fade-in delay-200">
                Currently expanding my expertise in <span className="text-primary font-semibold">offensive and defensive cybersecurity</span>, I thrive on solving 
                real-world problems through code and continuous learning. My goal is to contribute to innovative 
                projects that make a meaningful difference in the digital landscape.
              </p>
              <p className="hover:text-foreground transition-colors duration-300 animate-fade-in delay-400">
                I believe in the power of technology to transform businesses and improve lives, and I'm always 
                eager to take on new challenges that push the boundaries of what's possible.
              </p>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div className="animate-fade-in delay-500">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full animate-shimmer"></div>
              Education Timeline
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-gradient-to-r from-card to-card/80 backdrop-blur-sm group" style={{animationDelay: `${(index + 3) * 200}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group-hover:animate-pulse">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="h-4 w-4 text-muted-foreground animate-pulse" />
                          <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full animate-shimmer">{edu.year}</span>
                        </div>
                        <h4 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
