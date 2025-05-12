import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const steps = [
    {
      number: 1,
      title: "Submit Your Property Details",
      description: "Fill out our simple form with your property information and requirements."
    },
    {
      number: 2,
      title: "Get Matched With Top Agents",
      description: "Our algorithm matches you with experienced agents specializing in your property type and location."
    },
    {
      number: 3,
      title: "Close More Deals, Faster",
      description: "Work with qualified leads and leverage our tools to accelerate your sales process."
    }
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      if (window.innerWidth > 992) {
        setCurrentStep(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const getTransform = (index) => {
    if (!isMobile) return 'translateX(0)';
    return `translateX(-${currentStep * 100}%)`;
  };

  return (
    <motion.section
      className="how-it-works-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="how-it-works-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2
          className="how-it-works-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          How It Works
        </motion.h2>
        <motion.div
          className="how-it-works-steps"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div 
            className="steps-container"
            style={{
              transform: getTransform(),
              width: isMobile ? `${steps.length * 100}%` : '100%'
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`step ${index === currentStep ? 'active' : ''}`}
                style={{
                  width: isMobile ? `${100 / steps.length}%` : 'auto',
                  transform: getTransform(index)
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={!isMobile ? { opacity: 1, y: 0 } : {}}
                animate={isMobile ? { opacity: index === currentStep ? 1 : 0.5 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div
                  className="step-number"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={!isMobile ? { opacity: 1, y: 0 } : {}}
                  animate={isMobile ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4 }}
                >
                  {step.number}
                </motion.div>
                <motion.h3
                  className="step-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={!isMobile ? { opacity: 1, y: 0 } : {}}
                  animate={isMobile ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="step-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={!isMobile ? { opacity: 1, y: 0 } : {}}
                  animate={isMobile ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
          
          {isMobile && (
            <div className="step-navigation">
              <button 
                className="nav-arrow" 
                onClick={prevStep}
                disabled={currentStep === 0}
                aria-label="Previous step"
              >
                <FaChevronLeft />
              </button>
              <button 
                className="nav-arrow" 
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
                aria-label="Next step"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </motion.div>
        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <motion.a
            href="#contact"
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Get In Touch Now
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;