import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

interface ProjectsProps {
  onViewAll: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewAll }) => {
  const projects = [
    {
      title: 'QuoteFlow',
      longDescription: 'AI-powered lead intake & quote automation SaaS for service businesses.',
      image: '/quoteflow.png',
      tags: ['Next.js', 'TypeScript', 'Gemini AI', 'Stripe', 'PostgreSQL'],
      year: '2026',
      team: 'Solo',
      status: 'Live',
      github: 'https://github.com/abdulsami-1/QuoteFlow',
      demo: 'https://quote-flow-chi.vercel.app'
    },
    {
      title: 'Resumatch',
      longDescription: 'AI resume tailoring tool that scores resumes against job descriptions and suggests improvements.',
      image: '/resumatch.png',
      tags: ['Next.js', 'TypeScript', 'Gemini AI', 'Prisma'],
      year: '2026',
      team: 'Solo',
      status: 'Live',
      github: 'https://github.com/abdulsami-1/resumatch',
      demo: 'https://resumatch-sable.vercel.app'
    },
    {
      title: 'MealMap',
      longDescription: 'Weekly meal planner with AI recipe suggestions, pantry tracking, and household sharing.',
      image: '/mealmap.png',
      tags: ['Next.js', 'TypeScript', 'Gemini AI', 'dnd-kit'],
      year: '2026',
      team: 'Solo',
      status: 'Live',
      github: 'https://github.com/abdulsami-1/MealMap',
      demo: 'https://meal-map-nu.vercel.app'
    },
    {
      title: 'SwissDine',
      longDescription: 'A premium marketing website for a 2-Michelin-star private dining counter in Zürich. Features cinematic video hero, multi-step reservation system, Sanity editorial journal, and full SEO optimization.',
      image: '/SwissDine.png',
      tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Sanity', 'Supabase'],
      year: '2026',
      team: 'Solo',
      status: 'Concept',
      github: null,
      demo: 'https://swiss-dine.vercel.app'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-slate-950/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-br from-slate-900/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-56 h-56 bg-gradient-to-br from-slate-800/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="inline-block px-4 py-2 bg-slate-800/30 border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium tracking-wider uppercase mb-6 hover-glow">
            Portfolio Showcase
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 opacity-0 animate-bounce-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            FEATURED<br />
            <span className="text-slate-400 font-light">PROJECTS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto mb-8 opacity-0 animate-scale-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            A curated selection of innovative solutions and technical excellence, showcasing scalable applications that drive real business value
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-900/20 to-slate-900/5 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-700 backdrop-blur-sm hover-lift hover-glow stagger-${(index % 4) + 1}`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 hover-rotate"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm animate-pulse-glow ${
                    project.status === 'Concept'
                      ? 'bg-amber-500/20 border border-amber-500/30 text-amber-400'
                      : 'bg-green-500/20 border border-green-500/30 text-green-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-black/80 backdrop-blur-sm rounded-full text-white hover:bg-black hover:scale-110 transition-all duration-300 border border-slate-700/50 hover-rotate hover-glow"
                        aria-label="View source code"
                      >
                        <Github size={22} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-black/80 backdrop-blur-sm rounded-full text-white hover:bg-black hover:scale-110 transition-all duration-300 border border-slate-700/50 hover-rotate hover-glow"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Project Meta */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-slate-400">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>{project.team}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-slate-200 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed font-light">
                  {project.longDescription}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-800/50 text-gray-300 text-sm rounded-full border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-700/50 transition-all duration-300 hover-lift"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex space-x-3">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white text-black font-medium text-center rounded-lg hover:bg-slate-100 transition-colors duration-300 text-sm hover-lift hover-glow"
                    >
                      View Live
                    </a>
                  ) : (
                    <span className="flex-1 px-4 py-2 bg-slate-800/30 text-slate-500 font-medium text-center rounded-lg text-sm cursor-not-allowed border border-slate-700/30">
                      View Live
                    </span>
                  )}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-slate-600 text-white font-medium text-center rounded-lg hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-300 text-sm hover-lift"
                    >
                      Source Code
                    </a>
                  ) : (
                    <span className="flex-1 px-4 py-2 border border-slate-600 text-white font-medium text-center rounded-lg text-sm" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                      Proprietary Code
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 opacity-0 animate-bounce-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <button
            onClick={onViewAll}
            className="group px-8 py-4 border border-slate-600/50 text-white font-semibold tracking-wider hover:bg-slate-800/30 hover:border-slate-500/50 transition-all duration-300 rounded-xl backdrop-blur-sm hover-lift hover-glow"
          >
            <span className="flex items-center space-x-2">
              <span>VIEW ALL PROJECTS</span>
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;