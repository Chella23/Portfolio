import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown, Code, Terminal, GitBranch } from 'lucide-react';
import Photo from '@/assets/Chellappan.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-40  from-background via-background to-muted/20 relative overflow-hidden">
 
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Profile section with your uploaded image */}
          <div className="mb-12 animate-fade-in">
            <div className="relative inline-block mb-8">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105 relative ring-4 ring-primary/20 hover:ring-primary/40">
                <img 
                  src={Photo} 
                  alt="Chellappan G - Full Stack Developer" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-background animate-pulse"></div>
            </div>
          </div>
          
          {/* Enhanced typography with code editor colors */}
          <div className="space-y-6 animate-fade-in delay-300">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-code-function via-code-keyword to-code-string bg-clip-text text-transparent animate-gradient-x leading-tight">
               <span className="text-code-string">Chellappan G</span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-muted/70 transition-colors">
                <Code className="h-4 w-4 text-code-function animate-pulse" />
                <span className="text-sm sm:text-base font-medium text-code-function">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-muted/70 transition-colors">
                <Terminal className="h-4 w-4 text-code-string animate-pulse delay-300" />
                <span className="text-sm sm:text-base font-medium text-code-string">Cybersecurity Enthusiast</span>
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-code-comment mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              <span className="text-code-comment">Passionate software developer crafting secure, scalable applications</span><br/>
             
            </p>
          </div>
          <br />
          {/* Enhanced action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-500">
           <Button
  asChild
  variant="outline" 
  size="lg"
className="text-base sm:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-code-variable hover:bg-code-variable group"

>
  <a href="./Chellappan_Resume.pdf" download className="flex items-center">
    <Download className="mr-2 h-5 w-5  animate-bounce" />
    <span className="text-code-variable  font-bold">Download Resume</span>
  </a>
</Button>


            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-code-variable hover:bg-code-variable group"
              asChild
            >
              <a href="#contact">
                <GitBranch className="mr-2 h-5 w-5 group-hover:animate-spin" />
                <span className="text-code-variable  font-bold">connect()</span>
              </a>
            </Button>
          </div>

        </div>
      </div>

      {/* Developer-themed gradient overlay */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/10 to-transparent pointer-events-none"></div> */}
    </section>
  );
};

export default HeroSection;
