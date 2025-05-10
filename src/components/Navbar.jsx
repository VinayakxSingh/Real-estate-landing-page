import React from 'react';
import './navbar-enhancements.css';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div onClick={scrollToTop} className="logo-container">
          <img src="/logo.svg" alt="Logo" className="navbar-logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
