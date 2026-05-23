import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,41,59,0.1),transparent_70%)]"></div>
      </div>
      
      {/* Geometric accent elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-slate-700/30 rotate-45 opacity-40 animate-float"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-br from-slate-800/20 to-slate-900/20 rotate-12 animate-rotate"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-slate-500 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-slate-400 rounded-full animate-pulse-glow stagger-2"></div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32 md:pt-24">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
          <span className="block opacity-0 animate-bounce-in bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            ABDUL
          </span>
          <span className="block opacity-0 animate-slide-in-right text-slate-400 font-light" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            SAMI
          </span>
        </h1>

        {/* Professional badge - positioned after name */}
        <div className="flex justify-center mb-8">
          <div className="inline-block px-6 py-3 bg-slate-800/40 border border-slate-700/60 rounded-full text-slate-200 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm opacity-0 animate-scale-in hover-glow" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Full-Stack Developer
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Crafting exceptional digital experiences with <span className="text-white font-medium">precision</span>, <span className="text-white font-medium">innovation</span>, and unwavering attention to detail.
        </p>

        {/* Availability pill */}
        <div className="flex justify-center mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/30 border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Available for freelance &amp; full-time</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-slide-in-left" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
          <button 
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-white text-black font-semibold tracking-wide hover:bg-slate-100 transition-all duration-300 rounded-lg flex items-center space-x-2 hover-lift hover-glow"
          >
            <span>VIEW MY WORK</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <a
            href="/Resume%20-%20Abdul%20Sami%20-%20Final.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border border-slate-600 text-white font-semibold tracking-wide hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-300 rounded-lg flex items-center space-x-2 hover-lift"
          >
            <Download size={18} />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-4 mb-16 opacity-0 animate-slide-in-right" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          {[
            { icon: Github, href: 'https://github.com/abdulsami-1', label: 'GitHub', external: true, disabled: false },
            { icon: Linkedin, href: 'https://linkedin.com/in/abdul-sami-582084298', label: 'LinkedIn', external: true, disabled: false },
            { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&to=imabdulsami.5@gmail.com', label: 'Email', external: true, disabled: false }
          ].map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target={social.external ? '_blank' : undefined}
              rel={social.external ? 'noopener noreferrer' : undefined}
              className={`p-4 border border-slate-700/50 rounded-full hover:border-slate-500 hover:bg-slate-800/30 transition-all duration-300 group backdrop-blur-sm hover-lift hover-glow stagger-${index + 1}`}
              aria-label={social.label}
              style={social.disabled ? { opacity: 0.4, pointerEvents: 'none', cursor: 'not-allowed' } : undefined}
            >
              <social.icon size={22} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce opacity-0 animate-fade-in-up hover:text-white transition-colors duration-300 hover-glow"
          style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}
        >
          <ChevronDown size={36} className="text-slate-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;