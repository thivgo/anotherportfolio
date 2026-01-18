import React, { useState, useMemo } from 'react';
import { Mail, Github, MapPin, ChevronDown, Calendar, Linkedin, Smartphone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { useScramble } from '../hooks/useScramble';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const roles = useMemo(() => [
    PERSONAL_INFO.role, 
    "Dev Front-end",
    "UI/UX Designer",
    "Code Solver"
  ], []);

  const displayText = useScramble(roles, 60, 2000);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside className="glass-card rounded-lg p-6 lg:p-6 shadow-xl w-full h-fit transition-all z-10 mb-6 lg:mb-0 border border-[#333] relative overflow-hidden group">
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ccff00] to-transparent opacity-50"></div>

      <div className="flex flex-col items-center gap-6 relative z-10">
        <div className="relative mt-2">
          <div className="w-32 h-32 rounded-full border border-[#333] flex items-center justify-center relative">
            <div className="absolute w-full h-full rounded-full border-t-2 border-[#ccff00] animate-spin"></div>
            <div className="absolute w-[90%] h-[90%] rounded-full border-b-2 border-white/20 animate-spin direction-reverse duration-[3s]"></div>
          </div>
          <img 
            src={PERSONAL_INFO.avatar} 
            alt={PERSONAL_INFO.name} 
            className="w-28 h-28 rounded-full object-cover absolute top-2 left-2 shadow-[0_0_20px_rgba(204,255,0,0.2)] grayscale-[30%] hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <div className="text-center w-full space-y-3">
          <h1 className="text-2xl font-bold text-white tracking-tight font-mono uppercase">{PERSONAL_INFO.name}</h1>
          
          <div className="bg-[#050505] px-4 py-2 rounded-sm border border-[#333] inline-flex items-center justify-center max-w-full transition-all duration-300 shadow-inner">
             <span className="text-[#ccff00] text-xs font-mono tracking-wide text-center break-words whitespace-pre-wrap">
              {'>'} {displayText}
            </span>
          </div>
        </div>

        <button 
          onClick={toggleSidebar}
          className="lg:hidden absolute top-4 right-4 p-2 text-[#ccff00] hover:bg-[#333] rounded transition-colors"
        >
          <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className={`sidebar-info-more ${isOpen ? 'active' : ''} lg:opacity-100 lg:visible lg:max-h-full overflow-hidden mt-6 border-t border-[#333] lg:border-none pt-6 lg:pt-0`}>
        <ul className="grid gap-4">
          <ContactItem 
            icon={<Mail className="w-4 h-4" />} 
            title="Email" 
            value={PERSONAL_INFO.email} 
            link={`mailto:${PERSONAL_INFO.email}`}
          />
          <ContactItem 
            icon={<Smartphone className="w-4 h-4" />} 
            title="Telefone" 
            value="+55 (91) 98828-2930" 
            link="https://wa.me/5591988282930"
          />
          <ContactItem 
            icon={<Github className="w-4 h-4" />} 
            title="GitHub" 
            value="thivgo"
            link={`https://${PERSONAL_INFO.github}`}
          />
          <ContactItem 
            icon={<Linkedin className="w-4 h-4" />} 
            title="LinkedIn" 
            value="Thiago Maués"
            link={`https://${PERSONAL_INFO.linkedin}`}
          />
          <ContactItem 
            icon={<MapPin className="w-4 h-4" />} 
            title="Localização" 
            value={PERSONAL_INFO.location} 
          />
          <ContactItem 
            icon={<Calendar className="w-4 h-4" />} 
            title="Semestre" 
            value="3º Período" 
          />
        </ul>
      </div>
    </aside>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value, link }) => (
  <li className="flex items-center gap-4 w-full">
    <div className="bg-[#ccff00] p-2.5 rounded-sm text-black shadow-[0_0_10px_rgba(204,255,0,0.3)] border border-[#ccff00] hover:bg-white hover:text-black transition-all duration-300 cursor-default shrink-0">
      {icon}
    </div>
    <div className="flex flex-col truncate">
      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mb-0.5">{title}</span>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-[#ccff00] transition-colors truncate block w-full font-medium font-mono">
          {value}
        </a>
      ) : (
        <span className="text-sm text-gray-300 truncate block w-full font-medium font-mono">{value}</span>
      )}
    </div>
  </li>
);

export default Sidebar;