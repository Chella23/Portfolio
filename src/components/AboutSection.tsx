
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      year: "2024",
      description: "Advanced studies in computer applications and software development"
    },
    {
      degree: "Diploma in Cybersecurity",
      year: "2021-2024",
      description: "Specialized training in offensive and defensive cybersecurity (parallel to MCA)"
    },
    {
      degree: "BSc in Mathematics",
      year: "2021",
      description: "Strong foundation in mathematical concepts and analytical thinking"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>
                I'm Chellappan G, a passionate software developer with a strong background in web development, 
                cybersecurity, and modern tech stacks. With hands-on experience building secure, scalable applications, 
                I'm committed to creating impactful digital solutions that blend user-focused design with robust backend systems.
              </p>
              <p>
                Currently expanding my expertise in offensive and defensive cybersecurity, I thrive on solving 
                real-world problems through code and continuous learning. My goal is to contribute to innovative 
                projects that make a meaningful difference in the digital landscape.
              </p>
              <p>
                I believe in the power of technology to transform businesses and improve lives, and I'm always 
                eager to take on new challenges that push the boundaries of what's possible.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education Timeline</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-primary">{edu.year}</span>
                        </div>
                        <h4 className="font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
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
