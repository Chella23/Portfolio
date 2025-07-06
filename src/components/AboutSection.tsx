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
    { label: "Years of Experience", value: "3+", icon: <Zap className="h-5 w-5" /> },
    { label: "Projects Completed", value: "50+", icon: <Target className="h-5 w-5" /> },
    { label: "Technologies Mastered", value: "15+", icon: <Award className="h-5 w-5" /> }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-code-function to-code-keyword bg-clip-text text-transparent">
            <span className="text-code-keyword">function</span> <span className="text-code-function">aboutMe()</span> <span className="text-code-operator">{</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-code-function to-code-keyword mx-auto rounded-full"></div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm" style={{animationDelay: `${index * 200}ms`}}>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-code-function/10 rounded-full">
                    {highlight.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-code-number mb-1">{highlight.value}</div>
                <div className="text-sm text-code-comment">{highlight.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* About Content */}
          <div className="space-y-6 animate-fade-in delay-300">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
                alt="Developer workspace with code on screen"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-medium text-code-string">workspace.setup()</div>
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-code-function to-code-keyword rounded-full"></div>
              <span className="text-code-keyword">const</span> <span className="text-code-variable">identity</span> <span className="text-code-operator">=</span>
            </h3>
            <div className="text-code-comment space-y-4 text-base sm:text-lg leading-relaxed">
              <p className="hover:text-code-variable transition-colors duration-300">
                <span className="text-code-comment">/* I'm </span><span className="text-code-string">"Chellappan G"</span><span className="text-code-comment">, a passionate software developer with a strong background in web development, 
                cybersecurity, and modern tech stacks. */</span>
              </p>
              <p className="hover:text-code-variable transition-colors duration-300">
                <span className="text-code-keyword">while</span> <span className="text-code-operator">(</span><span className="text-code-variable">learning</span><span className="text-code-operator">)</span> <span className="text-code-operator">{</span><br/>
                &nbsp;&nbsp;<span className="text-code-function">expandSkills</span><span className="text-code-operator">(</span><span className="text-code-string">"cybersecurity"</span><span className="text-code-operator">);</span><br/>
                &nbsp;&nbsp;<span className="text-code-function">solveProblems</span><span className="text-code-operator">();</span><br/>
                <span className="text-code-operator">}</span>
              </p>
              <p className="hover:text-code-variable transition-colors duration-300">
                <span className="text-code-comment">// I believe in the power of technology to transform businesses</span><br/>
                <span className="text-code-keyword">return</span> <span className="text-code-string">"Always eager for new challenges"</span><span className="text-code-operator">;</span>
              </p>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div className="animate-fade-in delay-500">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-code-function to-code-keyword rounded-full"></div>
              <span className="text-code-variable">education</span><span className="text-code-operator">[]</span>
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
            <div className="mt-6 text-code-operator text-xl">
              <span>}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
