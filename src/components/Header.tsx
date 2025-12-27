import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, Home, User, Wrench, FolderOpen, Mail } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  /* ---------------------------------- */
  /* Scroll to section */
  /* ---------------------------------- */
  const goToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  /* ---------------------------------- */
  /* Detect visible section */
  /* ---------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id)
        );
      },
      { threshold: 0.4 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/90 via-background/95 to-background/90 backdrop-blur-2xl border-b shadow-2xl">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => goToSection(e, 'home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-code-function to-code-keyword flex items-center justify-center shadow-lg group-hover:scale-110 transition">
            <span className=" font-black text-lg">C</span>
          </div>
          <span className="text-xl font-black group-hover:text-code-function transition">
            Chellappan G
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50">
          <div className="flex bg-muted/30 backdrop-blur-sm rounded-full p-1 border shadow-lg">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => goToSection(e, id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
                  active === id
                    ? 'bg-code-function text-code-keyword shadow-lg font-bold'
                    : 'hover:bg-background/60 text-foreground font-semibold'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t shadow-xl">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => goToSection(e, id)}
              className={`flex items-center gap-4 px-6 py-4 ${
                active === id
                  ? 'text-code-function font-bold'
                  : 'text-foreground'
              }`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
