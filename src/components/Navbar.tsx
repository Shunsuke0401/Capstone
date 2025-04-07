
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    {
      name: 'Home',
      href: '#home'
    }, 
    {
      name: 'About',
      href: '#about'
    }, 
    {
      name: 'Journey',
      href: '#journey'
    },
    {
      name: 'Passions',
      href: '#passions'
    },
    {
      name: 'Reflections',
      href: '#reflections'
    },
    {
      name: 'Future',
      href: '#future'
    }
  ];
  
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold tracking-tight font-playfair">
              My<span className="text-blue-600">Capstone</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm font-medium hover:text-blue-600 transition-colors">
                {link.name}
              </a>)}
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(link => <a key={link.name} href={link.href} className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>)}
          </div>
        </div>}
    </header>;
};

export default Navbar;
