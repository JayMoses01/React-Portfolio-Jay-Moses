import React, { useState } from 'react';
import Contact from './components/pages/Contact';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Header from './components/Header';

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
          return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
      };
  
      const handlePageChange = (page) => setCurrentPage(page);
  
      return (
        <div>
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
      );
  
  }
