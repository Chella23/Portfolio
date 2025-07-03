
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Zap, Shield, MessageSquare, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "Built using Flask and Socket.IO to enable live messaging functionality with real-time communication features and user authentication.",
      techStack: ["Flask", "Socket.IO", "Python", "JavaScript", "HTML", "CSS"],
      githubLink: "#",
      liveLink: "#",
      icon: <MessageSquare className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Website Blocking System",
      description: "Admin tool for managing URL blocks using user-specific categories, dynamic UI with AJAX, and Flask backend for efficient content filtering.",
      techStack: ["Flask", "Python", "AJAX", "JavaScript", "Bootstrap", "SQLite"],
      githubLink: "#",
      liveLink: "#",
      icon: <Shield className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const achievements = [
    { label: "Active Projects", value: "12", icon: <Zap className="h-4 w-4" /> },
    { label: "GitHub Stars", value: "150+", icon: <Github className="h-4 w-4" /> },
    { label: "Live Deployments", value: "8", icon: <Globe className="h-4 w-4" /> }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Showcasing innovative solutions and technical expertise through real-world applications
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12 sm:mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-0" style={{animationDelay: `${index * 200}ms`}}>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{achievement.value}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in group overflow-hidden bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-0" style={{animationDelay: `${(index + 3) * 300}ms`}}>
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                    {project.icon}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 bg-muted/30 backdrop-blur-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 flex-1">
                      <Github className="h-4 w-4" />
                      View Code
                    </Button>
                    <Button size="sm" className="flex items-center gap-2 hover:scale-105 transition-all duration-300 flex-1 bg-gradient-to-r from-primary to-primary/80">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in delay-1000">
          <div className="bg-gradient-to-r from-card to-card/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions to the developer community.
            </p>
            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105">
              <Github className="mr-2 h-4 w-4" />
              Visit GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
