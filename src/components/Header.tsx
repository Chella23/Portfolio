
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, Home, User, Wrench, FolderOpen, Mail } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/skills', label: 'Skills', icon: Wrench },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/90 via-background/95 to-background/90 backdrop-blur-2xl border-b border-gradient-to-r from-transparent via-border to-transparent shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      
      <nav className="relative container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          
          {/* Logo/Name Section */}
          {!isHomePage && (
            <Link 
              to="/" 
              className="group flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-code-function to-code-keyword flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-code-function transition-all duration-300">
                Chellappan G
              </span>
            </Link>
          )}
          
          {/* Navigation Pills - Desktop */}
          <div className={`hidden md:flex items-center space-x-2 ${isHomePage ? 'mx-auto' : ''}`}>
            <div className="flex items-center bg-muted/30 backdrop-blur-sm rounded-full p-1 border border-border/50 shadow-lg">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 relative group ${
                    location.pathname === path 
                      ? 'bg-code-function text-background shadow-lg shadow-code-function/25' 
                      : 'hover:bg-background/60 hover:text-code-keyword hover:shadow-md text-code-comment'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium text-sm">{label}</span>
                  
                  {/* Animated dot indicator */}
                  {location.pathname === path && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-code-string rounded-full animate-pulse"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full bg-muted/50 backdrop-blur-sm border border-border/30 hover:bg-code-function/10 hover:border-code-function/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {theme === 'light' ? 
                  <Moon className="h-4 w-4 text-code-function" /> : 
                  <Sun className="h-4 w-4 text-code-variable" />
                }
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden w-10 h-10 rounded-full bg-muted/50 backdrop-blur-sm border border-border/30 hover:bg-code-function/10 hover:border-code-function/30 hover:scale-110 transition-all duration-300 shadow-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4 text-code-function" /> : <Menu className="h-4 w-4 text-code-function" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-2xl border-b border-border/50 shadow-2xl animate-fade-in">
          <div className="container mx-auto px-6 py-6">
            <div className="grid grid-cols-1 gap-3">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group ${
                    location.pathname === path 
                      ? 'bg-code-function/10 text-code-function border border-code-function/20 shadow-lg' 
                      : 'hover:bg-muted/50 hover:text-code-keyword border border-transparent hover:border-border/50 text-code-comment'
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-all duration-300 ${
                    location.pathname === path 
                      ? 'bg-code-function/20' 
                      : 'bg-muted/50 group-hover:bg-code-function/10'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{label}</span>
                  
                  {location.pathname === path && (
                    <div className="ml-auto w-2 h-2 bg-code-function rounded-full animate-pulse"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
