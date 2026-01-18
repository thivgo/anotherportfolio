import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';
import { EDUCATION, EXPERIENCE, SKILLS } from '../constants';

const Resume: React.FC = () => {
  return (
    <article className="animate-slide-up">
      <header className="mb-10 flex items-center gap-3">
        <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">
          Currículo
        </h2>
        <div className="h-1 flex-grow bg-[#333] relative">
            <div className="absolute left-0 top-0 h-full w-20 bg-[#ccff00]"></div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-12 mb-12">
        <section className="relative">
          <div className="flex items-center gap-4 relative z-10">
            <div className="bg-[#0a0a0a] p-3 rounded-sm border border-[#333] w-[50px] h-[50px] flex items-center justify-center shrink-0 shadow-sm relative z-20">
              <BookOpen className="w-6 h-6 text-[#ccff00]" />
            </div>
            <h3 className="text-2xl font-bold text-white font-mono uppercase">Educação</h3>
          </div>

          <div className="relative pt-1 space-y-12 -mt-2">
            <div className="absolute left-[24.5px] top-0 bottom-0 w-[1px] bg-[#333]"></div>

            {EDUCATION.map((edu) => (
              <div key={edu.id} className="relative pl-[60px] group">
                 <div className="absolute left-[17px] top-[6px] w-4 h-4 rounded-none rotate-45 bg-[#000] border border-[#ccff00] group-hover:bg-[#ccff00] transition-colors z-10"></div>
                
                <h4 className="text-white font-bold text-xl mb-1">{edu.degree}</h4>
                <span className="text-[#ccff00] text-xs font-bold font-mono mb-2 inline-block border border-[#ccff00]/30 px-2 py-1 bg-[#ccff00]/5">{edu.period}</span>
                <span className="text-gray-300 text-sm mb-4 block font-medium uppercase tracking-wide">{edu.institution}</span>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl bg-[#0a0a0a] p-4 border-l-2 border-l-[#333] hover:border-l-[#ccff00] transition-colors">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative">
          <div className="flex items-center gap-4 relative z-10">
            <div className="bg-[#0a0a0a] p-3 rounded-sm border border-[#333] w-[50px] h-[50px] flex items-center justify-center shrink-0 shadow-sm relative z-20">
              <Briefcase className="w-6 h-6 text-[#ccff00]" />
            </div>
            <h3 className="text-2xl font-bold text-white font-mono uppercase">Experiência</h3>
          </div>

          <div className="relative pt-1 space-y-12 -mt-2">
            <div className="absolute left-[24.5px] top-0 bottom-0 w-[1px] bg-[#333]"></div>

            {EXPERIENCE.map((job) => (
              <div key={job.id} className="relative pl-[60px] group">
                <div className="absolute left-[17px] top-[6px] w-4 h-4 rounded-none rotate-45 bg-[#000] border border-[#ccff00] group-hover:bg-[#ccff00] transition-colors z-10"></div>
                
                <h4 className="text-white font-bold text-xl mb-1">{job.role}</h4>
                <span className="text-[#ccff00] text-xs font-bold font-mono mb-2 inline-block border border-[#ccff00]/30 px-2 py-1 bg-[#ccff00]/5">{job.period}</span>
                <span className="text-gray-300 text-sm mb-4 block font-medium uppercase tracking-wide">{job.company}</span>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl bg-[#0a0a0a] p-4 border-l-2 border-l-[#333] hover:border-l-[#ccff00] transition-colors">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-[#0a0a0a] p-8 rounded-sm border border-[#333] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-50">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-[#ccff00] rounded-full"></div>
            <div className="w-2 h-2 bg-transparent border border-[#ccff00] rounded-full"></div>
            <div className="w-2 h-2 bg-transparent border border-[#ccff00] rounded-full"></div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-6 font-mono uppercase flex items-center gap-2">
           <span className="text-[#ccff00]">{'>'}</span> Skills & Tech
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-mono text-sm group-hover:text-white transition-colors">{skill.name}</span>
                <span className="text-[#ccff00] font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-[#1a1a1a] rounded-full overflow-hidden border border-[#333] group-hover:border-[#555] transition-colors">
                <div 
                  className="h-full bg-[#ccff00] relative shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                  style={{ width: `${skill.level}%` }}
                >
                    <div className="absolute right-0 top-0 h-full w-1 bg-white opacity-50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Resume;