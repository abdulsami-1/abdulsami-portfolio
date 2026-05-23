import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
        <div className="flex items-center justify-center lg:justify-between">
          <div className="hidden lg:flex items-center space-x-3 group cursor-pointer hover-lift">
            <div className="p-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 group-hover:border-slate-600 transition-all duration-300 hover-glow animate-pulse-glow">
              <Code2 size={20} className="text-white" />
            </div>
            <div className="text-white font-bold text-xl tracking-wider">
              ABDUL<span className="text-slate-400 font-light">.DEV</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-1 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {navItems.map((item) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative px-4 py-2 transition-all duration-300 font-medium tracking-wider uppercase text-sm group hover-lift"
                  style={{ color: isActive ? '#ffffff' : '#d1d5db' }}
                >
                  {item}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 transition-all duration-300"
                    style={{ width: isActive ? '100%' : '0%' }}
                  ></span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-300 hover-rotate hover-glow"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-slate-800/50 bg-black/95 backdrop-blur-xl rounded-lg animate-slide-in-left">
            {navItems.map((item) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 px-4 hover:bg-slate-800/30 transition-all duration-300 font-medium tracking-wider uppercase text-sm rounded-lg hover-lift"
                  style={{ color: isActive ? '#ffffff' : '#d1d5db' }}
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
