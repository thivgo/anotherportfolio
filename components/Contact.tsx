import React from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('contact.alert'));
  };

  return (
    <article className="animate-slide-up">
      <header className="mb-10 flex items-center gap-3">
        <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">
          {t('contact.title')}
        </h2>
        <div className="h-1 flex-grow bg-[#333] relative">
            <div className="absolute left-0 top-0 h-full w-20 bg-[#ccff00]"></div>
        </div>
      </header>

      <section className="mb-10 relative group">
         <div className="absolute inset-0 border border-[#333] pointer-events-none group-hover:border-[#ccff00] transition-colors z-10"></div>
         <div className="absolute top-0 left-0 w-2 h-2 bg-[#ccff00] z-20"></div>
         <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#ccff00] z-20"></div>

         <div className="w-full h-[300px] bg-[#121212] overflow-hidden filter grayscale invert brightness-90 contrast-125">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127637.3697960134!2d-48.4901799!3d-1.4557549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48bb316138677%3A0x67a33903173d120a!2sBel%C3%A9m%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1647608789441!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            loading="lazy"
            title="Location Map"
          ></iframe>
         </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white mb-6 font-mono uppercase">{t('contact.formTitle')}</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder={t('contact.namePlaceholder')} 
              required
              className="bg-[#0a0a0a] text-gray-200 border border-[#333] rounded-sm px-5 py-4 w-full focus:outline-none focus:border-[#ccff00] focus:ring-0 transition-all placeholder:text-gray-600 font-mono text-sm"
            />
            <input 
              type="email" 
              placeholder={t('contact.emailPlaceholder')} 
              required
              className="bg-[#0a0a0a] text-gray-200 border border-[#333] rounded-sm px-5 py-4 w-full focus:outline-none focus:border-[#ccff00] focus:ring-0 transition-all placeholder:text-gray-600 font-mono text-sm"
            />
          </div>
          <textarea 
            placeholder={t('contact.messagePlaceholder')} 
            rows={4}
            required
            className="bg-[#0a0a0a] text-gray-200 border border-[#333] rounded-sm px-5 py-4 w-full focus:outline-none focus:border-[#ccff00] focus:ring-0 transition-all resize-none placeholder:text-gray-600 font-mono text-sm"
          ></textarea>
          
          <button 
            type="submit" 
            className="flex items-center gap-2 bg-[#ccff00] text-black hover:bg-white px-8 py-4 rounded-sm font-bold transition-all ml-auto cursor-pointer shadow-[0_0_15px_rgba(204,255,0,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] uppercase font-mono tracking-wider"
          >
            <Send className="w-4 h-4" />
            {t('contact.send')}
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;