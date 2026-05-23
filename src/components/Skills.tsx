import React from 'react';
import { Code, Database, Globe, Server, Zap, Palette, Shield } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Next.js' },
        { name: 'JavaScript (ES6+)' },
        { name: 'Tailwind CSS' },
        { name: 'Bootstrap' }
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      skills: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'RESTful APIs' },
        { name: 'Session Management' },
        { name: 'Passport.js Authentication' }
      ]
    },
    {
      icon: Database,
      title: 'Database',
      skills: [
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
        { name: 'Firebase' },
        { name: 'Prisma ORM' },
        { name: 'Mongoose ODM' }
      ]
    },
    {
      icon: Zap,
      title: 'AI & Integrations',
      skills: [
        { name: 'Google Gemini API' },
        { name: 'Stripe Payments' },
        { name: 'Nodemailer (SMTP)' },
        { name: 'NewsAPI' }
      ]
    },
    {
      icon: Globe,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Docker' },
        { name: 'Cloudinary' },
        { name: 'Git & GitHub' },
        { name: 'Vercel' },
        { name: 'Railway' },
        { name: 'GitHub Actions (CI/CD)' }
      ]
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: [
        { name: 'Figma' },
        { name: 'Adobe XD' },
        { name: 'UI/UX Design' },
        { name: 'Adobe Photoshop' },
        { name: 'Adobe Illustrator' }
      ]
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      skills: [
        { name: 'Data Validation (Joi & Zod)' },
        { name: 'JWT Authentication' },
        { name: 'Bcrypt Password Hashing' },
        { name: 'API Rate Limiting' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-slate-900/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-slate-800/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="inline-block px-4 py-2 bg-slate-800/30 border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium tracking-wider uppercase mb-6 hover-glow">
            Technical Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 opacity-0 animate-bounce-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            SKILLS &<br />
            <span className="text-slate-400 font-light">EXPERTISE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto mb-8 opacity-0 animate-scale-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Mastering the full spectrum of modern web development technologies with a focus on scalability, performance, and user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-slate-900/30 to-slate-900/10 border border-slate-800/50 rounded-xl p-8 hover:border-slate-600/50 hover:bg-slate-900/40 transition-all duration-500 backdrop-blur-sm hover-lift hover-glow stagger-${(index % 6) + 1}`}
            >
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl group-hover:from-slate-700/50 group-hover:to-slate-800/50 transition-all duration-300 border border-slate-700/30 hover-rotate">
                  <category.icon size={28} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white ml-4 tracking-wider">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300 block py-2 px-3 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 hover-lift">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Summary */}
        <div className="text-center opacity-0 animate-bounce-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-slate-900/30 border border-slate-800/50 rounded-full backdrop-blur-sm hover-glow">
            <div className="text-center hover-lift">
              <div className="text-2xl font-bold text-white hover-glow">20+</div>
              <div className="text-slate-400 text-sm">Technologies</div>
            </div>
            <div className="w-px h-8 bg-slate-700"></div>
            <div className="text-center hover-lift">
              <div className="text-2xl font-bold text-white hover-glow">8+</div>
              <div className="text-slate-400 text-sm">Frameworks</div>
            </div>
            <div className="w-px h-8 bg-slate-700"></div>
            <div className="text-center hover-lift">
              <div className="text-2xl font-bold text-white hover-glow">1+</div>
              <div className="text-slate-400 text-sm">Years Exp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;