import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar-enhancements.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    closeMenu();
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [scrolled]);

  // Add/remove body class when menu is open/closed
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <div onClick={scrollToTop} className="logo-container">
            <img src="/logo.svg" alt="Logo" className="navbar-logo" />
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMenu} 
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Navigation Links */}
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <button onClick={() => scrollToSection('how-it-works')}>How It Works</button>
            <button onClick={() => scrollToSection('testimonials')}>Testimonials</button>
            <button onClick={() => scrollToSection('contact')}>Contact Us</button>
            <button className="cta-button" onClick={() => scrollToSection('contact')}>
              Get Started
            </button>
          </div>
        </div>
      </nav>
      
      {/* Overlay */}
      <div 
        className={`nav-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
        role="button"
        tabIndex={-1}
        aria-label="Close menu"
        onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
      />
    </>
  );
};

export default Navbar;
