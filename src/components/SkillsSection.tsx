
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Wrench, Shield, Database } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Java", "JavaScript", "C", "HTML", "CSS", "C#", ".NET"]
    },
    {
      title: "Frameworks",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Flask", "MERN Stack", "Bootstrap", "React", "Node.js"]
    },
    {
      title: "Tools",
      icon: <Database className="h-6 w-6" />,
      skills: ["VS Code", "NetBeans", "Git", "Android Studio", "MySQL", "MongoDB"]
    },
    {
      title: "Domains",
      icon: <Shield className="h-6 w-6" />,
      skills: ["Web Development", "Cybersecurity", "Networking", "Operating Systems", "DSA"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit mb-2">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
