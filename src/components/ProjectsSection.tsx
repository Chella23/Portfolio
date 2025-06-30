
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "Built using Flask and Socket.IO to enable live messaging functionality with real-time communication features and user authentication.",
      techStack: ["Flask", "Socket.IO", "Python", "JavaScript", "HTML", "CSS"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Website Blocking System",
      description: "Admin tool for managing URL blocks using user-specific categories, dynamic UI with AJAX, and Flask backend for efficient content filtering.",
      techStack: ["Flask", "Python", "AJAX", "JavaScript", "Bootstrap", "SQLite"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      View Code
                    </Button>
                    <Button size="sm" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
