'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, ChevronDown, ChevronUp, Github } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
}

const projects = {
  featured: {
    title: "FreediveAnalyzer",
    subtitle: "Personal Project – Full Stack App (2024)",
    description: "FreediveAnalyzer is a full-stack web platform for logging and analyzing freediving sessions, designed with scalability and modularity in mind. Built with a React SPA frontend and a Laravel RESTful API backend, it supports multilingual interfaces (i18next), secure JWT-based authentication (email/password and Google OAuth), and real-time data visualization via Recharts. The system enables manual and bulk dive imports (.xml/.sml), tracks dive metrics, and delivers performance insights through dynamic charts and oxygen recovery ratios. Deployed with CI/CD pipelines (GitHub + Docker + Vercel), integrated with PostgreSQL, and optimized for cross-device responsiveness.",
    image: "/images/freediveanalyzerCROP.png",
    technologies: ['React', 'Laravel', 'Tailwind', 'Chart.js'],
    liveUrl: "https://frontend-freedive.vercel.app/",
    githubUrl: "https://github.com/OlenaHolu/frontend-freedive.git"
  },
  others: [
    {
      title: "PenyesAPP",
      subtitle: "Instituto Project",
      description: "Sorteo de peñas - Next.js project for managing lottery draws with interactive features.",
      image: "/images/penyesAPP.png",
      technologies: ['Next.js', 'MongoDB', 'Tailwind', 'Chart.js'],
      liveUrl: null,
      githubUrl: "https://github.com/OlenaHolu/Penyes-app.git"
    },
    {
      title: "SocialAPP", 
      subtitle: "Instituto Project",
      description: "Social networking application built with modern web technologies and responsive design.",
      image: "/images/socialApp.png",
      technologies: ['Next.js', 'MongoDB', 'Tailwind', 'Chart.js'],
      liveUrl: null,
      githubUrl: "https://github.com/OlenaHolu/socialapp.git"
    }
  ]
};

export default function Portfolio() {
  const [showOthers, setShowOthers] = useState(false);

  const ProjectCard = ({ project, featured = false }: { project: Project; featured?: boolean}) => (
    <div className={`bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      featured ? 'p-4 sm:p-6' : 'p-4'
    }`}>
      <div className={`flex ${featured ? 'flex-col lg:flex-row gap-6 lg:gap-8 items-center' : 'flex-col'}`}>
        {/* Image */}
        <div className={`${featured ? 'w-full lg:w-1/2' : 'w-full'} relative group`}>
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={featured ? 600 : 500}
              height={featured ? 400 : 300}
              className="object-cover w-full h-48 sm:h-56 lg:h-64 transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-full transition-colors"
                  title="View Live"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-300 text-black p-2 rounded-full transition-colors"
                  title="View Code"
                >
                  <Github size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`${featured ? 'w-full lg:w-1/2' : 'w-full'} space-y-3 sm:space-y-4 ${featured ? 'mt-4 lg:mt-0' : 'mt-4'} flex flex-col ${!featured ? 'h-full' : ''}`}>
          <div>
            <h3 className={`${featured ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl'} font-bold text-gray-900`}>
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-yellow-600 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>
          
          <p className={`text-gray-700 leading-relaxed ${featured ? 'text-sm sm:text-base' : 'text-sm'} ${!featured ? 'flex-1' : ''}`}>
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                  featured 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${
                    featured
                      ? 'bg-yellow-400 hover:bg-yellow-500 text-black shadow-md hover:shadow-lg'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">View Live</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Github size={16} />
                  <span className="text-sm">View Code</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="min-h-screen bg-gray-100 px-4 sm:px-12 lg:px-24 py-5">
     
      <div className="flex justify-center mb-12">
        <h2 className="text-4xl font-bold text-center w-full px-6 py-6 border-2 border-gray-400 inline-block">
          PORTFOLIO
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Explore my recent projects showcasing modern web development with clean code and great user experience.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <ProjectCard project={projects.featured} featured={true} />
        </div>

        {/* Toggle Button */}
        <div className="text-center mb-8 sm:mb-10">
          <button
            onClick={() => setShowOthers(!showOthers)}
            className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-200 group"
          >
            <span>{showOthers ? 'Hide Other Projects' : 'View More Projects'}</span>
            {showOthers ? (
              <ChevronUp size={20} className="transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown size={20} className="transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>

        {/* Other Projects */}
        <div className={`transition-all duration-500 ease-in-out ${
          showOthers 
            ? 'opacity-100 max-h-none transform translate-y-0' 
            : 'opacity-0 max-h-0 overflow-hidden transform -translate-y-4'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {projects.others.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in-up"
                style={{
                  animationDelay: showOthers ? `${index * 0.1}s` : '0s'
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}