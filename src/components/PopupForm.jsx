import React, { useState, useEffect } from 'react';
import './PopupForm.css';
import { IoMdClose } from "react-icons/io";

const PopupForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [showTestButton, setShowTestButton] = useState(false);

  // Show test button after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTestButton(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open('https://calendly.com/rayansh-gosocialsect/30min?month=2025-05', '_blank');
    onClose();
  };

  // Create a function to handle manual popup trigger
  const handleTestButtonClick = () => {
    // This will make the popup appear
    onClose(); // Toggle the popup state
  };

  return (
    <>
      {showTestButton && !isOpen && (
        <button 
          onClick={handleTestButtonClick}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            padding: '10px 20px',
            background: '#ff5722',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}
        >
          Show Popup
        </button>
      )}
      
      {isOpen && (
        <div className="popup-overlay" onClick={onClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={onClose}><IoMdClose /></span>
            <h3>Book Your Free Strategy Call Right now</h3>
            <p>Enter your name to schedule a call with our team</p>
            
            <form onSubmit={handleSubmit} className="popup-form">
              <div className="form-group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>
              <button type="submit" className="popup-button">
                Book a Call
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;