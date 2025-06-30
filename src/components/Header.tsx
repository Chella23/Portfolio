
import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Chellappan G</div>
        
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
            Contact
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
