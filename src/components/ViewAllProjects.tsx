import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Filter, Search } from 'lucide-react';

interface ViewAllProjectsProps {
  onBack: () => void;
}

const ViewAllProjects: React.FC<ViewAllProjectsProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const allProjects = [
    {
      title: 'QuoteFlow',
      description: 'AI-powered lead intake & quote automation SaaS for service businesses.',
      image: '/quoteflow.png',
      tags: ['Next.js', 'TypeScript', 'Gemini AI', 'Stripe', 'PostgreSQL'],
      year: '2026',
      team: 'Solo',
      status: 'Live',
      github: 'https://github.com/abdulsami-1/QuoteFlow',
      demo: 'https://quote-flow-chi.vercel.app',
      category: 'Full Stack'
    },
    {
      title: 'SwissDine',
      description: 'A premium marketing website for a 2-Michelin-star private dining counter in Zürich. Features cinematic video hero, multi-step reservation system, Sanity editorial journal, and full SEO optimization.',
      image: '/SwissDine.png',
      tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Sanity', 'Supabase'],
      year: '2025',
      team: 'Solo',
      status: 'Concept',
      github: null,
      demo: 'https://swiss-dine.vercel.app',
      category: 'Full Stack',
      privateRepo: true
    },
    {
      title: 'HabitLoop',
      description: 'Personal habit tracker with weekly AI behavioral insights powered by Gemini.',
      image: '/habbitloop.png',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Gemini AI'],
      year: '2025',
      team: 'Solo',
      status: 'Live',
      github: 'https://github.com/abdulsami-1/Habitloop',
      demo: 'https://habitloop-ob9n.vercel.app/home',
      category: 'Full Stack'
    },
    {
      title: 'Resumatch',
      description: 'AI resume tailoring tool that scores resumes against job descriptions and suggests improvements.',
      image: '/resumatch.png',
      tags: ['Next.js', 'TypeScript', 'Gemini AI', 'Prisma'],
      year: '2025',
      team: 'Solo',
      status: 'Live',
      github: 'https://github.com/abdulsami-1/resumatch',
      demo: 'https://resumatch-sable.vercel.app',
      category: 'Full Stack'
    },
    {
      title: 'MealMap',
      description: 'Weekly meal planner with AI recipe suggestions, pantry tracking, and household sharing.',
      image: '/mealmap.png',
      tags: ['Next.js', 'TypeScript', 'Gemini AI', 'dnd-kit'],
      year: '2025',
      team: 'Solo',
      status: 'Live',
      github: 'https://github.com/abdulsami-1/MealMap',
      demo: 'https://meal-map-nu.vercel.app',
      category: 'Full Stack'
    },
    {
      title: 'HAVEN',
      description: 'Airbnb-style travel accommodation platform with map search, reviews, and image uploads.',
      image: '/Haven.png',
      tags: ['Express.js', 'MongoDB', 'Cloudinary', 'MapTiler'],
      year: '2024',
      team: 'Solo',
      status: 'Live',
      github: 'https://github.com/abdulsami-1/HAVEN',
      demo: 'https://haven-wheat.vercel.app',
      category: 'Full Stack'
    },
    {
      title: 'Nexus News',
      description: 'Real-time news aggregator with 7 categories, infinite scroll, and dark/light mode.',
      image: '/nexusnews.png',
      tags: ['React', 'NewsAPI', 'React Router', 'Bootstrap'],
      year: '2024',
      team: 'Solo',
      status: 'Live',
      github: 'https://github.com/abdulsami-1/nexus-news',
      demo: 'https://nexus-news-dusky.vercel.app',
      category: 'Frontend'
    },
    {
      title: 'Textify',
      description: 'Text manipulation utility with transformations, word/character counts, and clipboard tools.',
      image: '/textify.jpg',
      tags: ['React', 'JavaScript'],
      year: '2024',
      team: 'Solo',
      status: '',
      github: 'https://github.com/abdulsami-1/Textify',
      demo: null,
      category: 'Frontend'
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = selectedFilter === 'All' || project.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-950">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-slate-800/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Portfolio</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-6">
            ALL<br />
            <span className="text-slate-400 font-light">PROJECTS</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto mb-8"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Explore my complete portfolio of innovative solutions and technical achievements
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors duration-300"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-slate-400" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:border-slate-500 transition-colors duration-300"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-900">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/20 to-slate-900/5 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-700 backdrop-blur-sm hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>

                {/* Status Badge */}
                {project.status && (
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                      project.status === 'Concept'
                        ? 'bg-amber-500/20 border border-amber-500/30 text-amber-400'
                        : 'bg-green-500/20 border border-green-500/30 text-green-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-medium rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-black/80 backdrop-blur-sm rounded-full text-white hover:bg-black hover:scale-110 transition-all duration-300 border border-slate-700/50"
                        aria-label="View source code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-black/80 backdrop-blur-sm rounded-full text-white hover:bg-black hover:scale-110 transition-all duration-300 border border-slate-700/50"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Meta */}
                <div className="flex items-center space-x-3 mb-3 text-xs text-slate-400">
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={12} />
                    <span>{project.team}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-slate-200 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed font-light text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-800/50 text-gray-300 text-xs rounded-full border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-700/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-2">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 bg-white text-black font-medium text-center rounded-lg hover:bg-slate-100 transition-colors duration-300 text-xs"
                    >
                      View Live
                    </a>
                  ) : (
                    <span className="flex-1 px-3 py-2 bg-slate-800/30 text-slate-500 font-medium text-center rounded-lg text-xs cursor-not-allowed border border-slate-700/30">
                      View Live
                    </span>
                  )}
                  {project.privateRepo ? (
                    <span className="flex-1 px-3 py-2 border border-slate-600 text-white font-medium text-center rounded-lg text-xs" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                      Proprietary Code
                    </span>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 border border-slate-600 text-white font-medium text-center rounded-lg hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-300 text-xs"
                    >
                      Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 text-lg">No projects found matching your criteria.</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFilter('All');
              }}
              className="mt-4 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAllProjects;