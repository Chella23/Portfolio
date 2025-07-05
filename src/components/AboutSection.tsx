
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Award, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      year: "2024",
      description: "Advanced studies in computer applications and software development",
      icon: <GraduationCap className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Diploma in Cybersecurity",
      year: "2021-2024",
      description: "Specialized training in offensive and defensive cybersecurity (parallel to MCA)",
      icon: <Award className="h-6 w-6" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      degree: "BSc in Mathematics",
      year: "2021",
      description: "Strong foundation in mathematical concepts and analytical thinking",
      icon: <Target className="h-6 w-6" />,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const highlights = [
    { label: "Years of Experience", value: "3+", icon: <Zap className="h-5 w-5" />, gradient: "from-yellow-500 to-orange-500" },
    { label: "Projects Completed", value: "50+", icon: <Target className="h-5 w-5" />, gradient: "from-green-500 to-teal-500" },
    { label: "Technologies Mastered", value: "15+", icon: <Award className="h-5 w-5" />, gradient: "from-purple-500 to-indigo-500" }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full blur-xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient-rainbow">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-gradient-x"></div>
        </div>
        
        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in card-gradient card-hover border-0" style={{animationDelay: `${index * 200}ms`}}>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className={`p-3 bg-gradient-to-r ${highlight.gradient} bg-opacity-10 rounded-full animate-pulse-glow`}>
                    <div className={`text-transparent bg-gradient-to-r ${highlight.gradient} bg-clip-text`}>
                      {highlight.icon}
                    </div>
                  </div>
                </div>
                <div className={`text-2xl sm:text-3xl font-bold mb-1 bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent`}>{highlight.value}</div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-purple-500/20 rounded-2xl transition-all duration-500 group-hover:from-black/40"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">My Development Environment</div>
              </div>
            </div>
            
            <div className="glass-colorful rounded-2xl p-6">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <span className="text-gradient-primary">Who I Am</span>
              </h3>
              <div className="text-muted-foreground space-y-4 text-base sm:text-lg leading-relaxed">
                <p className="hover:text-foreground transition-colors duration-300">
                  I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">Chellappan G</span>, a passionate software developer with a strong background in web development, 
                  cybersecurity, and modern tech stacks. With hands-on experience building secure, scalable applications, 
                  I'm committed to creating impactful digital solutions that blend user-focused design with robust backend systems.
                </p>
                <p className="hover:text-foreground transition-colors duration-300">
                  Currently expanding my expertise in <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent font-semibold">offensive and defensive cybersecurity</span>, I thrive on solving 
                  real-world problems through code and continuous learning. My goal is to contribute to innovative 
                  projects that make a meaningful difference in the digital landscape.
                </p>
                <p className="hover:text-foreground transition-colors duration-300">
                  I believe in the power of technology to transform businesses and improve lives, and I'm always 
                  eager to take on new challenges that push the boundaries of what's possible.
                </p>
              </div>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div className="animate-fade-in delay-500">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-gradient-primary">Education Timeline</span>
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className={`border-l-4 border-l-transparent bg-gradient-to-r ${edu.gradient} bg-opacity-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-gradient card-hover backdrop-blur-sm`} style={{animationDelay: `${(index + 3) * 200}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${edu.gradient} bg-opacity-10 rounded-lg hover:scale-110 transition-all duration-300 animate-pulse-glow`}>
                        <div className={`text-transparent bg-gradient-to-r ${edu.gradient} bg-clip-text`}>
                          {edu.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className={`text-sm font-medium px-2 py-1 rounded-full bg-gradient-to-r ${edu.gradient} bg-opacity-10 text-transparent bg-clip-text`}>{edu.year}</span>
                        </div>
                        <h4 className={`font-semibold text-lg mb-2 hover:text-transparent hover:bg-gradient-to-r hover:${edu.gradient} hover:bg-clip-text transition-all duration-300`}>{edu.degree}</h4>
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
