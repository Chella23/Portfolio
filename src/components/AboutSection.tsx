
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Award, Target, Zap } from 'lucide-react';

const AboutSection = () => {
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
    
    { label: "Projects Completed", value: "50+", icon: <Target className="h-5 w-5" /> },
    { label: "Technologies Mastered", value: "15+", icon: <Award className="h-5 w-5" /> }
  ];

  return (
    <section id="about" className="section-padding  from-muted/30 via-background to-muted/20 relative overflow-hidden">



      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-code-function to-code-keyword bg-clip-text text-transparent">
            <span className="text-code-function">AboutMe</span> 
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-code-function to-code-keyword mx-auto rounded-full"></div>
        </div>
    
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* About Content */}
          <div className="space-y-6 animate-fade-in delay-300">
          
            
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-code-function to-code-keyword rounded-full"></div>
               <span className="text-code-variable">Identity</span> 
            </h3>
            <div className="text-code-comment space-y-4 text-base sm:text-lg leading-relaxed">
              <p className="hover:text-code-variable transition-colors duration-300">
                <span className="text-code-comment">I'm </span><span className="text-code-string">Chellappan G</span><span className="text-code-comment">, a passionate software developer with a strong background in web development, 
                cybersecurity, and modern tech stacks.</span>
              </p>

              <p className="hover:text-code-variable transition-colors duration-300">
                <span className="text-code-comment">I believe in the power of technology to transform businesses</span><br/>
                <span className="text-code-string">"Always eager for new challenges"</span>
              </p>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div className="animate-fade-in delay-500">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-code-function to-code-keyword rounded-full"></div>
              <span className="text-code-variable">Education</span>
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-code-function hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-card to-card/80 backdrop-blur-sm" style={{animationDelay: `${(index + 3) * 200}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-code-function/10 rounded-lg hover:bg-code-function/20 transition-colors">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="h-4 w-4 text-code-comment" />
                          <span className="text-sm font-medium text-code-string bg-code-string/10 px-2 py-1 rounded-full">{edu.year}</span>
                        </div>
                        <h4 className="font-semibold text-lg mb-2 hover:text-code-keyword transition-colors text-code-function">{edu.degree}</h4>
                        <p className="text-sm text-code-comment leading-relaxed">{edu.description}</p>
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
