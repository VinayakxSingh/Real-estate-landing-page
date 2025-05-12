import React, { useState } from 'react';
import PopupForm from './PopupForm';

const ExampleUsage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="container">
      <h1>Real Estate Landing Page</h1>
      
      {/* Manual trigger button */}
      <button 
        onClick={togglePopup}
        className="main-cta-button"
      >
        Schedule a Free Consultation
      </button>
      
      {/* Popup Form Component */}
      <PopupForm 
        isOpen={isPopupOpen} 
        onClose={togglePopup}
        triggerButtonText="Book Your Free Call" 
      />
    </div>
  );
};

export default ExampleUsage;
