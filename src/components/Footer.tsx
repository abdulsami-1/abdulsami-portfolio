import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm">
            © 2026 <span className="text-gray-400 font-medium">Abdul Sami</span>. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2 border border-slate-700/50 rounded-full text-gray-400 hover:text-white hover:border-slate-500 hover:bg-slate-800/30 transition-all duration-300 text-sm font-medium tracking-wider hover-lift hover-glow"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
