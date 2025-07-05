
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Wrench, Shield, Database, Zap, Globe } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Java", "JavaScript", "C", "HTML", "CSS", "C#", ".NET"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Frameworks",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Flask", "MERN Stack", "Bootstrap", "React", "Node.js"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Tools & Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["VS Code", "NetBeans", "Git", "Android Studio", "MySQL", "MongoDB"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "Domains",
      icon: <Shield className="h-6 w-6" />,
      skills: ["Web Development", "Cybersecurity", "Networking", "Operating Systems", "DSA"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    }
  ];

  const techStack = [
    { name: "Frontend", tools: ["React", "TypeScript", "Tailwind"], icon: <Globe className="h-5 w-5" />, gradient: "from-blue-500 to-purple-500" },
    { name: "Backend", tools: ["Node.js", "Python", "Flask"], icon: <Database className="h-5 w-5" />, gradient: "from-green-500 to-teal-500" },
    { name: "Security", tools: ["Penetration Testing", "Network Security"], icon: <Shield className="h-5 w-5" />, gradient: "from-red-500 to-pink-500" },
    { name: "Performance", tools: ["Optimization", "Scalability"], icon: <Zap className="h-5 w-5" />, gradient: "from-yellow-500 to-orange-500" }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-rainbow opacity-5 rounded-full blur-3xl animate-gradient-x"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient-rainbow">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-4 animate-gradient-x"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Comprehensive technical skills spanning multiple domains and technologies
          </p>
        </div>

        {/* Enhanced Tech Stack Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12 sm:mb-16">
          {techStack.map((tech, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in card-gradient card-hover border-0 glass-colorful" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className={`p-2 sm:p-3 bg-gradient-to-r ${tech.gradient} bg-opacity-20 rounded-full animate-pulse-glow`}>
                    <div className={`text-transparent bg-gradient-to-r ${tech.gradient} bg-clip-text`}>
                      {tech.icon}
                    </div>
                  </div>
                </div>
                <h4 className={`font-semibold text-sm sm:text-base mb-2 bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent`}>{tech.name}</h4>
                <div className="text-xs text-muted-foreground">
                  {tech.tools.join(" • ")}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced Main Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in group card-gradient card-hover border-0 glass-colorful" style={{animationDelay: `${(index + 4) * 200}ms`}}>
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto p-4 bg-gradient-to-r ${category.bgGradient} rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                  <div className={`text-transparent bg-gradient-to-r ${category.gradient} bg-clip-text`}>
                    {category.icon}
                  </div>
                </div>
                <CardTitle className={`text-xl sm:text-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${category.gradient} group-hover:bg-clip-text transition-all duration-300`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className={`text-xs hover:bg-gradient-to-r hover:${category.gradient} hover:text-white transition-all duration-300 cursor-default hover:scale-105 glass backdrop-blur-sm border-0`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Developer Image */}
        <div className="text-center animate-fade-in delay-1000">
          <div className="relative inline-block group">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
              alt="Developer coding workspace"
              className="w-full max-w-4xl h-48 sm:h-64 object-cover rounded-2xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 group-hover:scale-105 animate-pulse-glow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-purple-500/20 rounded-2xl transition-all duration-500 group-hover:from-black/40"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Where the Magic Happens</h4>
              <p className="text-sm opacity-90 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Crafting code that transforms ideas into reality</p>
            </div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-rainbow opacity-20 rounded-full blur-xl animate-gradient-x"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
