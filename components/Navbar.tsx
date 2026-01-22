import React from 'react';
import { Page } from '../types';
import { useLanguage } from '../hooks/useLanguage';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const { t } = useLanguage();
  const navItems = [Page.ABOUT, Page.RESUME, Page.PORTFOLIO, Page.CONTACT];

  const getLabel = (page: Page) => {
    switch (page) {
      case Page.ABOUT: return t('nav.about');
      case Page.RESUME: return t('nav.resume');
      case Page.PORTFOLIO: return t('nav.portfolio');
      case Page.CONTACT: return t('nav.contact');
      default: return page;
    }
  };

  return (
    <nav className="absolute top-0 right-0 bg-[#050505] border-l border-b border-[#333] rounded-bl-xl px-8 py-0 z-20 hidden lg:block shadow-lg">
      <ul className="flex">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => setPage(item)}
              className={`text-sm font-bold tracking-widest uppercase font-mono px-6 py-5 transition-all duration-300 border-b-2 relative overflow-hidden group ${
                currentPage === item 
                  ? 'text-black bg-[#ccff00] border-[#ccff00]' 
                  : 'text-gray-400 border-transparent hover:text-[#ccff00] hover:bg-[#1a1a1a]'
              }`}
            >
              {getLabel(item)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const MobileNavbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const { t } = useLanguage();
  const navItems = [Page.ABOUT, Page.RESUME, Page.PORTFOLIO, Page.CONTACT];

  const getLabel = (page: Page) => {
    switch (page) {
      case Page.ABOUT: return t('nav.about');
      case Page.RESUME: return t('nav.resume');
      case Page.PORTFOLIO: return t('nav.portfolio');
      case Page.CONTACT: return t('nav.contact');
      default: return page;
    }
  };

  return (
    <nav className="fixed bottom-4 left-4 right-4 bg-[#121212]/95 backdrop-blur-xl border border-[#333] z-50 lg:hidden rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      <ul className="flex justify-between items-center px-4 py-3">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => setPage(item)}
              className={`text-[10px] font-bold uppercase tracking-wider font-mono p-2 rounded transition-colors ${
                currentPage === item ? 'text-[#050505] bg-[#ccff00]' : 'text-gray-400'
              }`}
            >
              {getLabel(item)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;