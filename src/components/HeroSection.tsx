
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown, Code, Terminal, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-primary/2 to-transparent rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Floating code elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20 animate-float text-2xl font-mono">&lt;/&gt;</div>
        <div className="absolute top-40 right-20 text-primary/20 animate-float text-xl font-mono delay-500">{ }</div>
        <div className="absolute bottom-40 left-20 text-primary/20 animate-float text-lg font-mono delay-1000">&&</div>
        <div className="absolute bottom-20 right-10 text-primary/20 animate-float text-xl font-mono delay-1500">==</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Profile section with your uploaded image */}
          <div className="mb-12 animate-fade-in">
            <div className="relative inline-block mb-8">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105 relative ring-4 ring-primary/20 hover:ring-primary/40">
                <img 
                  src="/lovable-uploads/23adfec1-7009-4533-b904-30f3d1e8942d.png" 
                  alt="Chellappan G - Full Stack Developer" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-background animate-pulse"></div>
            </div>
          </div>
          
          {/* Enhanced typography with animations */}
          <div className="space-y-6 animate-fade-in delay-300">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-gradient-x leading-tight">
              Chellappan G
            </h1>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-muted/70 transition-colors">
                <Code className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm sm:text-base font-medium">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-muted/70 transition-colors">
                <Terminal className="h-4 w-4 text-primary animate-pulse delay-300" />
                <span className="text-sm sm:text-base font-medium">Cybersecurity Enthusiast</span>
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Passionate software developer crafting secure, scalable applications that blend 
              <span className="text-primary font-semibold"> innovative design</span> with 
              <span className="text-primary font-semibold"> robust backend systems</span>. 
              Building the future, one line of code at a time.
            </p>
          </div>
          
          {/* Enhanced action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-500">
            <Button size="lg" className="text-base sm:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
              <Download className="mr-2 h-5 w-5 animate-bounce" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:bg-primary hover:text-primary-foreground group"
              asChild
            >
              <Link to="/contact">
                <GitBranch className="mr-2 h-5 w-5 group-hover:animate-spin" />
                Get In Touch
              </Link>
            </Button>
          </div>
          
          {/* Animated scroll indicator */}
          <div className="animate-fade-in delay-700">
            <Button 
              variant="ghost" 
              className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110 rounded-full p-4"
              asChild
            >
              <Link to="/about">
                <ArrowDown className="h-6 w-6" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Explore My Journey</p>
          </div>
        </div>
      </div>

      {/* Developer-themed gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
