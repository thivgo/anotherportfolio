import React from 'react';
import { PERSONAL_INFO, SERVICES } from '../constants';
import { Code, Palette, Smartphone, Globe, Layout } from 'lucide-react';

const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout': return <Layout className="w-6 h-6 text-[#ccff00]" />;
      case 'code': return <Code className="w-6 h-6 text-[#ccff00]" />;
      case 'palette': return <Palette className="w-6 h-6 text-[#ccff00]" />;
      case 'smartphone': return <Smartphone className="w-6 h-6 text-[#ccff00]" />;
      default: return <Globe className="w-6 h-6 text-[#ccff00]" />;
    }
  };

  return (
    <article className="animate-slide-up">
      <header className="mb-10 flex items-center gap-3">
        <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">
          Sobre Mim
        </h2>
        <div className="h-1 flex-grow bg-[#333] relative">
            <div className="absolute left-0 top-0 h-full w-20 bg-[#ccff00]"></div>
        </div>
      </header>

      <section className="text-gray-300 leading-relaxed mb-10">
        <p className="bg-[#0a0a0a] p-6 rounded-sm border border-[#333] text-lg font-light border-l-4 border-l-[#ccff00]">
          <span className="text-[#ccff00] font-mono text-sm block mb-2">{'// BIO_INIT'}</span>
          {PERSONAL_INFO.bio}
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-mono uppercase">
          <span className="text-[#ccff00] mr-2">{'>'}</span>
          O que eu faço
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#0a0a0a] p-6 rounded-sm border border-[#333] hover:border-[#ccff00] transition-all duration-300 group flex items-start gap-4 hover:shadow-[0_0_15px_rgba(204,255,0,0.1)]"
            >
              <div className="shrink-0 bg-[#121212] p-3 rounded-sm border border-[#333] group-hover:bg-[#ccff00]/10 transition-colors">
                {getIcon(service.icon)}
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 text-lg group-hover:text-[#ccff00] transition-colors font-mono">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-6">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default About;