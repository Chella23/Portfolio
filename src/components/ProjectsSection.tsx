
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Zap, Shield, MessageSquare, Globe } from 'lucide-react';
import chatAppImg from '@/assets/chat-app.png';
import websiteBlockerImg from '@/assets/Website_Blocking_System.png';



const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "Built using Node.js and Socket.IO to enable live messaging functionality with real-time communication features and user authentication.",
      techStack: ["Node.js", "Express.js", "JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/Chella23/Real-Time-Chat-Application.git",
      liveLink: "#",
      icon: <MessageSquare className="h-6 w-6" />,
      image: chatAppImg,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Website Blocking System",
      description: "Tool for managing URL blocks using user-specific categories, and Flask backend for efficient content filtering.",
      techStack: ["Flask", "Python","JavaScript", "Bootstrap", "MYSQL"],
      githubLink: "https://github.com/Chella23/Website_Blocking_System.git",
      liveLink: "#",
      icon: <Shield className="h-6 w-6" />,
      image: websiteBlockerImg,
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const achievements = [
    { label: "Active Projects", value: "12", icon: <Zap className="h-4 w-4" /> },
    { label: "GitHub Stars", value: "150+", icon: <Github className="h-4 w-4" /> },
    { label: "Live Deployments", value: "8", icon: <Globe className="h-4 w-4" /> }
  ];

  return (
    <section id="projects" className="section-padding  from-background via-muted/10 to-background relative overflow-hidden">

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-responsive-xl font-black mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-responsive-base font-medium">
            Showcasing innovative solutions and technical expertise through real-world applications
          </p>
        </div>


        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in group overflow-hidden bg-card/80 backdrop-blur-sm border-border/50" style={{animationDelay: `${(index + 3) * 300}ms`}}>
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-background/90 backdrop-blur-sm rounded-lg border border-border/30">
                    {project.icon}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl mb-3 text-foreground group-hover:text-primary transition-colors flex items-center gap-2 font-bold">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-medium">{project.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2 text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 bg-muted/30 backdrop-blur-sm border-border/50 text-foreground font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 border-border/50 text-foreground font-semibold"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </Button>
                    </a>

                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in delay-1000">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-border/50">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">Want to see more?</h3>
            <p className="text-muted-foreground mb-6 font-medium">
              Check out my GitHub for more projects and contributions to the developer community.
            </p>
            <a href="https://github.com/Chella23/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-semibold">
              <Github className="mr-2 h-4 w-4" />
              Visit GitHub Profile
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
