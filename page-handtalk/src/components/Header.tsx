import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import './Header.css';
import { extractData, themeChanged } from '.';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <header className="header">
      <nav>
        <div className="menu-container" id='menu'>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
          <ul className={`menu ${isOpen ? 'open' : ''}`}>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); toggleTheme(); themeChanged();}} className="theme-toggle">
                {isDarkMode ? 'Tema Claro' : 'Tema Escuro'}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;