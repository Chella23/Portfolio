
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Wrench, Shield, Database, Zap, Globe } from 'lucide-react';
import SkeletonLoader from './SkeletonLoader';

const SkillsSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Java", "JavaScript", "C", "HTML", "CSS", "C#", ".NET"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Frameworks",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Flask", "MERN Stack", "Bootstrap", "React", "Node.js"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Tools & Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["VS Code", "NetBeans", "Git", "Android Studio", "MySQL", "MongoDB"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Domains",
      icon: <Shield className="h-6 w-6" />,
      skills: ["Web Development", "Cybersecurity", "Networking", "Operating Systems", "DSA"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10"
    }
  ];

  const techStack = [
    { name: "Frontend", tools: ["React", "TypeScript", "Tailwind"], icon: <Globe className="h-5 w-5" /> },
    { name: "Backend", tools: ["Node.js", "Python", "Flask"], icon: <Database className="h-5 w-5" /> },
    { name: "Security", tools: ["Penetration Testing", "Network Security"], icon: <Shield className="h-5 w-5" /> },
    { name: "Performance", tools: ["Optimization", "Scalability"], icon: <Zap className="h-5 w-5" /> }
  ];

  if (isLoading) {
    return (
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <SkeletonLoader type="text" lines={1} className="max-w-md mx-auto mb-4" />
            <SkeletonLoader type="text" lines={2} className="max-w-2xl mx-auto" />
          </div>

          {/* Tech stack skeleton */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12 sm:mb-16">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonLoader key={index} type="card" className="h-32" />
            ))}
          </div>

          {/* Skills grid skeleton */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonLoader key={index} type="card" className="h-64" />
            ))}
          </div>

          {/* Image skeleton */}
          <div className="text-center">
            <div className="animate-pulse bg-muted rounded-2xl w-full max-w-4xl h-48 sm:h-64 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Comprehensive technical skills spanning multiple domains and technologies
          </p>
        </div>

        {/* Tech Stack Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12 sm:mb-16">
          {techStack.map((tech, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-0 group" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-full group-hover:animate-pulse">
                    {tech.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-sm sm:text-base mb-2">{tech.name}</h4>
                <div className="text-xs text-muted-foreground">
                  {tech.tools.join(" • ")}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Main Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in group bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-0" style={{animationDelay: `${(index + 4) * 200}ms`}}>
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto p-4 ${category.bgColor} rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse`}>
                  <div className="text-primary">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105 bg-muted/50 backdrop-blur-sm animate-fade-in"
                      style={{animationDelay: `${(index * 8 + skillIndex) * 100}ms`}}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Developer Image */}
        <div className="text-center animate-fade-in delay-1000">
          <div className="relative inline-block">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
              alt="Developer coding workspace"
              className="w-full max-w-4xl h-48 sm:h-64 object-cover rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg sm:text-xl font-semibold animate-pulse">Where the Magic Happens</h4>
              <p className="text-sm opacity-90">Crafting code that transforms ideas into reality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
