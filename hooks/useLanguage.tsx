import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple dictionary for UI labels not in constants
const UI_TRANSLATIONS: Record<string, { pt: string; en: string }> = {
  'nav.about': { pt: 'Sobre', en: 'About' },
  'nav.resume': { pt: 'Currículo', en: 'Resume' },
  'nav.portfolio': { pt: 'Portfólio', en: 'Portfolio' },
  'nav.contact': { pt: 'Contato', en: 'Contact' },
  
  'sidebar.role': { pt: 'Estudante de Ciência da Computação', en: 'Computer Science Student' },
  'sidebar.email': { pt: 'Email', en: 'Email' },
  'sidebar.phone': { pt: 'Telefone', en: 'Phone' },
  'sidebar.github': { pt: 'GitHub', en: 'GitHub' },
  'sidebar.linkedin': { pt: 'LinkedIn', en: 'LinkedIn' },
  'sidebar.location': { pt: 'Localização', en: 'Location' },
  'sidebar.semester': { pt: 'Semestre', en: 'Semester' },
  'sidebar.semester.value': { pt: '3º Período', en: '3rd Semester' },

  'about.title': { pt: 'Sobre Mim', en: 'About Me' },
  'about.whatido': { pt: 'O que eu faço', en: 'What I Do' },
  
  'resume.title': { pt: 'Currículo', en: 'Resume' },
  'resume.education': { pt: 'Educação', en: 'Education' },
  'resume.experience': { pt: 'Experiência', en: 'Experience' },
  'resume.skills': { pt: 'Habilidades & Tech', en: 'Skills & Tech' },
  
  'portfolio.title': { pt: 'Portfólio', en: 'Portfolio' },
  'portfolio.all': { pt: 'Todos', en: 'All' },
  'portfolio.featured': { pt: 'Destaque', en: 'Featured' },
  
  'contact.title': { pt: 'Contato', en: 'Contact' },
  'contact.formTitle': { pt: 'Formulário de Contato', en: 'Contact Form' },
  'contact.namePlaceholder': { pt: 'NOME_COMPLETO', en: 'FULL_NAME' },
  'contact.emailPlaceholder': { pt: 'ENDERECO_EMAIL', en: 'EMAIL_ADDRESS' },
  'contact.messagePlaceholder': { pt: 'MENSAGEM...', en: 'MESSAGE...' },
  'contact.send': { pt: 'Enviar Dados', en: 'Send Data' },
  'contact.alert': { pt: 'Mensagem enviada! (Simulação)', en: 'Message sent! (Simulation)' },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string) => {
    return UI_TRANSLATIONS[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};