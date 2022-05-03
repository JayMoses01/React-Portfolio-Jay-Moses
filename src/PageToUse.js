import React, { useState } from 'react';
import Navigation from './Navigation';
import Contact from './components/pages/Contact';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

export default function PageToUse() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
  
    // <Navigation />
  
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
          {/* We are passing the currentPage from state and the function to update it */}
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Here we are calling the renderPage method which will return a component  */}
          {renderPage()}
        </div>
      );
  
  }


