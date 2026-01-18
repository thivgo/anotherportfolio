import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar, { MobileNavbar } from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.ABOUT);

  const renderContent = () => {
    switch (currentPage) {
      case Page.ABOUT: return <About />;
      case Page.RESUME: return <Resume />;
      case Page.PORTFOLIO: return <Portfolio />;
      case Page.CONTACT: return <Contact />;
      default: return <About />;
    }
  };

  return (
    <main className="min-h-screen p-4 lg:p-14 flex justify-center font-inter selection:bg-[#ccff00] selection:text-black">
      <div className="w-full max-w-[1250px] grid grid-cols-1 lg:grid-cols-4 gap-6 relative items-start">
        
        <div className="lg:col-span-1 sticky top-8">
          <Sidebar />
        </div>

        <div className="lg:col-span-3 w-full bg-[#121212]/90 backdrop-blur-sm border border-[#333] rounded-lg relative min-h-[600px] mb-20 lg:mb-0 shadow-[0_0_40px_-10px_rgba(0,0,0,0.7)]">
          
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#ccff00] -translate-x-[1px] -translate-y-[1px]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#ccff00] translate-x-[1px] -translate-y-[1px]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#ccff00] -translate-x-[1px] translate-y-[1px]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#ccff00] translate-x-[1px] translate-y-[1px]"></div>

          <Navbar currentPage={currentPage} setPage={setCurrentPage} />
          
          <div className="p-6 lg:p-10 pt-8 mt-4 lg:mt-6">
            {renderContent()}
          </div>
        </div>

        <MobileNavbar currentPage={currentPage} setPage={setCurrentPage} />
        
      </div>
    </main>
  );
};

export default App;