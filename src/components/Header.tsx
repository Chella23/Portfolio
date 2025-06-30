
import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, Home, User, Wrench, FolderOpen, Mail } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/skills', label: 'Skills', icon: Wrench },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-primary transition-colors">
          Chellappan G
        </Link>
        
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-2 hover:text-primary transition-colors ${
                location.pathname === path ? 'text-primary' : ''
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
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
