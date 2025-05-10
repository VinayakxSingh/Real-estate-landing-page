import React from 'react';
import './hero.css';

export default function HeroSection() {
  return (
    <header className="header">
      <div className="bg-image" />
      
      <div className="overlay-layer" />
      
      {/* Content with exact structure from screenshot */}
      <div className="main-hero-content">
        <h1>
          We help real estate agents close <span className="accent">2–5 extra</span><br/>
          <span className="accent-teal">listings</span> per month using qualified local leads —<br/>
          <span className="accent-purple">without wasting budget on Zillow.</span>
        </h1>
        
        <div className="subtext">
          Proven systems generating <span className="accent-teal">$100K+ in monthly revenue</span> for 
          service-based businesses. <span className="accent-teal">No retainers. No guesswork.</span>
        </div>
        
        <a
          href="https://calendly.com/yourlink"
          className="cta-button"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Book a Free Strategy Call
        </a>
      </div>
    </header>
  );
}