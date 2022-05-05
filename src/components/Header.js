import React, { useState } from 'react';

function Header({ currentPage, handlePageChange} ) {
    
    return (
        <nav className="navbar has-background-info-dark">
        <div className="navbar-brand">
            <h1 className="is-size-2 has-text-white has-text-weight-bold">Jay Moses</h1>
            <a className="navbar-burger" id="burger">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>

        <div className="navbar-menu" id="nav-links">
            <div className="navbar-end">
                
                <a 
                href="#AboutMe"
                onClick={() => handlePageChange('AboutMe')}
                className="navbar-item has-text-black has-text-weight-bold"

                >
                    About Me
                </a>
                
                <a 
                href="#Portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className="navbar-item has-text-black has-text-weight-bold"
                
                >
                    Portfolio
                </a>

                <a 
                href="#Contact"
                onClick={() => handlePageChange('Contact')}
                className="navbar-item has-text-black has-text-weight-bold" 
                
                >
                    Contact
                </a>
                
                <a 
                href="#Resume"
                onClick={() => handlePageChange('Resume')}
                className="navbar-item has-text-black has-text-weight-bold"
                
                >
                    Resume
                </a>
            
            </div>
        </div>
    </nav>
    );
}

export default Header;

