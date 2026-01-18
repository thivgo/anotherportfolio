import React, { useState } from 'react';
import { Eye, Github, X, Maximize2, Star } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { useModal } from '../hooks/useModal';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const { 
    selectedItem: selectedImage, 
    openModal, 
    closeModal 
  } = useModal();
  
  const categories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  return (
    <article className="animate-slide-up relative">
      <header className="mb-10 flex items-center gap-3">
        <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">
          Portfólio
        </h2>
        <div className="h-1 flex-grow bg-[#333] relative">
            <div className="absolute left-0 top-0 h-full w-20 bg-[#ccff00]"></div>
        </div>
      </header>

      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs px-4 py-2 rounded-sm font-bold font-mono uppercase tracking-wider transition-all duration-300 border ${
              filter === cat 
                ? 'bg-[#ccff00] text-black border-[#ccff00] shadow-[0_0_10px_rgba(204,255,0,0.4)]' 
                : 'bg-transparent text-gray-400 border-[#333] hover:text-[#ccff00] hover:border-[#ccff00]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project: Project) => {
          const isFeatured = project.id === 1;
          return (
            <div 
                key={project.id} 
                className={`group relative bg-[#0a0a0a] rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 
                ${isFeatured 
                    ? 'border border-[#ccff00] shadow-[0_0_15px_rgba(204,255,0,0.15)]' 
                    : 'border border-[#333] hover:border-[#ccff00] hover:shadow-[0_0_20px_rgba(204,255,0,0.15)]'
                }`}
            >
                {isFeatured && (
                    <div className="absolute top-0 left-0 bg-[#ccff00] text-black text-[10px] font-bold px-3 py-1 z-20 font-mono tracking-wider uppercase flex items-center gap-1">
                        <Star className="w-3 h-3 fill-black" /> Destaque
                    </div>
                )}

                <div className="relative overflow-hidden cursor-pointer h-48" onClick={() => openModal(project.image)}>
                <div className="absolute inset-0 bg-[#050505]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <div className="absolute top-2 right-2 p-1 bg-black border border-[#ccff00] text-[#ccff00]">
                        <Maximize2 className="w-4 h-4"/>
                    </div>
                    <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                        {project.githubUrl && (
                        <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="bg-black p-3 rounded-sm hover:bg-[#ccff00] hover:text-black text-[#ccff00] transition-colors border border-[#ccff00]"
                            title="Código GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        )}
                        {project.demoUrl && (
                        <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="bg-black p-3 rounded-sm hover:bg-[#ccff00] hover:text-black text-[#ccff00] transition-colors border border-[#ccff00]"
                            title="Ver Demo"
                        >
                            <Eye className="w-5 h-5" />
                        </a>
                        )}
                    </div>
                </div>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
                </div>
                <div className="p-5 relative">
                <div className={`absolute top-0 left-0 w-full h-[1px] transition-colors ${isFeatured ? 'bg-[#ccff00]' : 'bg-[#333] group-hover:bg-[#ccff00]'}`}></div>
                
                <h3 className={`font-bold text-lg mb-1 transition-colors font-mono uppercase truncate ${isFeatured ? 'text-[#ccff00]' : 'text-white group-hover:text-[#ccff00]'}`}>
                    {project.title}
                </h3>
                <p className="text-gray-500 text-[10px] mb-3 font-mono uppercase tracking-widest">{project.category}</p>
                <div className="flex gap-2 flex-wrap">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] bg-[#111] text-[#ccff00] px-2 py-1 border border-[#333] font-mono">
                            {t}
                        </span>
                    ))}
                </div>
                </div>
            </div>
          );
        })}
      </div>

      {selectedImage && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 backdrop-blur-md p-4 animate-fade-in"
            onClick={closeModal}
        >
            <button 
                className="absolute top-5 right-5 z-50 text-gray-400 hover:text-[#ccff00] transition-colors border border-transparent hover:border-[#ccff00] p-1 bg-black/50 rounded-sm"
                onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                }}
            >
                <X className="w-8 h-8" />
            </button>
            <div 
                className="max-w-5xl max-h-[90vh] overflow-hidden rounded-sm shadow-2xl relative border border-[#ccff00]"
                onClick={(e) => e.stopPropagation()} 
            >
                <img 
                    src={selectedImage} 
                    alt="Project Preview" 
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
      )}
    </article>
  );
};

export default Portfolio;