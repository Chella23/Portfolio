
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown, Code, Terminal, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-rainbow opacity-5 rounded-full blur-3xl animate-gradient-x"></div>
        <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl animate-float delay-500"></div>
      </div>

      {/* Enhanced floating code elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-blue-500/30 animate-float text-2xl font-mono">&lt;/&gt;</div>
        <div className="absolute top-40 right-20 text-purple-500/30 animate-float text-xl font-mono delay-500">{ }</div>
        <div className="absolute bottom-40 left-20 text-green-500/30 animate-float text-lg font-mono delay-1000">&&</div>
        <div className="absolute bottom-20 right-10 text-pink-500/30 animate-float text-xl font-mono delay-1500">==</div>
        <div className="absolute top-1/2 left-10 text-cyan-500/30 animate-float text-lg font-mono delay-2000">[]</div>
        <div className="absolute top-60 right-40 text-yellow-500/30 animate-float text-lg font-mono delay-2500">()</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Profile section with your uploaded image */}
          <div className="mb-12 animate-fade-in">
            <div className="relative inline-block mb-8">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105 relative ring-4 ring-primary/20 hover:ring-primary/40 animate-pulse-glow">
                <img 
                  src="/lovable-uploads/23adfec1-7009-4533-b904-30f3d1e8942d.png" 
                  alt="Chellappan G - Full Stack Developer" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-purple-500/10"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-background animate-bounce-slow"></div>
            </div>
          </div>
          
          {/* Enhanced typography with colorful animations */}
          <div className="space-y-6 animate-fade-in delay-300">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gradient-rainbow leading-tight">
              Chellappan G
            </h1>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
              <div className="flex items-center gap-2 glass-colorful px-4 py-2 rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <Code className="h-4 w-4 text-blue-500 animate-pulse" />
                <span className="text-sm sm:text-base font-medium bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 glass-colorful px-4 py-2 rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <Terminal className="h-4 w-4 text-green-500 animate-pulse delay-300" />
                <span className="text-sm sm:text-base font-medium bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Cybersecurity Enthusiast</span>
              </div>
            </div>
            
            <div className="relative p-8 glass rounded-2xl max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-rainbow opacity-5 rounded-2xl"></div>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed relative z-10">
                Passionate software developer crafting secure, scalable applications that blend 
                <span className="text-gradient-primary font-semibold"> innovative design</span> with 
                <span className="text-gradient-primary font-semibold"> robust backend systems</span>. 
                Building the future, one line of code at a time.
              </p>
            </div>
          </div>
          
          {/* Enhanced action buttons with gradients */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-500">
            <Button size="lg" className="text-base sm:text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 animate-gradient-x">
              <Download className="mr-2 h-5 w-5 animate-bounce" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 glass-colorful hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 group backdrop-blur-sm"
              asChild
            >
              <Link to="/contact">
                <GitBranch className="mr-2 h-5 w-5 group-hover:animate-spin text-purple-500" />
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Get In Touch</span>
              </Link>
            </Button>
          </div>
          
          {/* Animated scroll indicator */}
          <div className="animate-fade-in delay-700">
            <Button 
              variant="ghost" 
              className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110 rounded-full p-4 hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10"
              asChild
            >
              <Link to="/about">
                <ArrowDown className="h-6 w-6 text-gradient-primary" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">Explore My Journey</p>
          </div>
        </div>
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/20 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
