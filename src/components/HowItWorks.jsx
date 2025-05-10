import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const HowItWorks = () => {
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
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.div
                className="step-number"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {step.number}
              </motion.div>
              <motion.h3
                className="step-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                className="step-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
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