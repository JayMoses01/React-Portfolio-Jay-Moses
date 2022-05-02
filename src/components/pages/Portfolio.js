import React, { useState } from 'react';
import Navigation from '../../Navigation';
import Header from '../../Header';
import Project from '../../Project';
import Contact from './Contact';
import AboutMe from './AboutMe';

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    <Navigation />

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
