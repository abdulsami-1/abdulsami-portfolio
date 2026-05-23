import React from 'react';
import { Award, Zap, Coffee, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-950/50 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative group order-2 lg:order-1 opacity-0 animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative w-96 h-96 mx-auto">
              {/* Geometric frame */}
              <div className="absolute inset-0 border-2 border-slate-700/50 rotate-6 group-hover:rotate-12 transition-transform duration-700 animate-float"></div>
              <div className="absolute inset-4 border border-slate-600/30 -rotate-3 group-hover:-rotate-6 transition-transform duration-700 animate-float stagger-2"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rotate-45 animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-slate-800 to-slate-900 rotate-12 animate-pulse-glow stagger-3"></div>
              
              {/* Profile image placeholder */}
              <div className="relative w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden rounded-lg hover-glow group/img">
                <img
                  src="/picture.png"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-700 rounded-lg hover-scale"
                  style={{ objectPosition: 'center 8%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8 order-1 lg:order-2 opacity-0 animate-slide-in-right" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div>
              <div className="inline-block px-4 py-2 bg-slate-800/30 border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium tracking-wider uppercase mb-6 hover-glow">
                Full Stack Developer
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                PASSIONATE<br />
                <span className="text-slate-400 font-light">DEVELOPER</span>
              </h2>
            </div>
            
            <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 opacity-0 animate-scale-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}></div>
            
            <div className="space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
              <p className="text-gray-300 text-lg leading-relaxed font-light hover-lift">
                I'm a self-taught full-stack developer passionate about building real-world web applications that solve actual problems. I specialize in <span className="text-white font-medium">modern JavaScript frameworks</span>, AI integrations, and shipping production-ready SaaS products from scratch.
              </p>

              <p className="text-gray-400 leading-relaxed hover-lift">
                My stack spans Next.js, TypeScript, PostgreSQL, and third-party APIs like Stripe and Google Gemini. I care deeply about <span className="text-gray-300">clean code</span>, great UX, and building things that actually work — not just look good in a demo.
              </p>

              <p className="text-gray-400 leading-relaxed hover-lift">
                When I'm not building, I'm learning. Whether it's a new framework, a better architecture pattern, or contributing to the developer community — I'm always leveling up.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              {[
                { icon: Award, label: 'Shipped to Production', desc: '6+ Live Projects' },
                { icon: Zap, label: 'AI Powered Apps', desc: '3 Built' },
                { icon: Coffee, label: 'GitHub Commits', desc: '500+ Pushed' },
                { icon: Code, label: 'Lines of Code', desc: '50K+ Written' }
              ].map((item, index) => (
                <div key={index} className={`group hover-lift stagger-${index + 1}`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-slate-700/50 transition-colors duration-300 hover-glow">
                      <item.icon size={18} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{item.label}</div>
                      <div className="text-gray-400 text-xs">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-800/50 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
              {[
                { number: '8+', label: 'Projects Completed' },
                { number: '6', label: 'Deployed & Running' },
                { number: '6', label: 'Live Deployments' },
                { number: '100%', label: 'Self Taught' }
              ].map((stat, index) => (
                <div key={index} className={`text-center group hover-lift stagger-${index + 1}`}>
                  <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-slate-300 transition-colors duration-300 hover-glow">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;