import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './hero.css';


const HeroSection = () => {
   const [leads, setLeads] = useState(278908);
    const [revenue, setRevenue] = useState(100000000);
    const [appointments, setAppointments] = useState(13689);
    const [showModal, setShowModal] = useState(true);
    const [showBottomForm, setShowBottomForm] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setLeads((prev) => prev + 13);
        setRevenue((prev) => prev + 50);
      }, 2000);
      const interval2 = setInterval(() => {
        setAppointments((prev) => prev + 1);
      }, 2790);
  
      return () => {
        clearInterval(interval);
        clearInterval(interval2);
      };
    }, []);
  
    useEffect(() => {
      const timer = setTimeout(() => setShowModal(false), 10000);
      const bottomFormTimer = setTimeout(() => setShowBottomForm(false), 15000);
      return () => {
        clearTimeout(timer);
        clearTimeout(bottomFormTimer);
      };
    }, []);
  
  return (
    <motion.div
      className='hero'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='hero-content' style={{ textAlign: 'center' }}>
        <motion.h1
        style={{wordSpacing:"10px"}}
          className='hero-title'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.span
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Say
          </motion.span>
          <motion.span
            style={{ color: "white" }}
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Goodbye.
          </motion.span>
          <motion.span
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
             to Dead Leads & Empty Calendars
          </motion.span>
        </motion.h1>
        
        <motion.p
          id='ptags'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        
        >
          Your all-in-one growth engine for closing more real estate deals without lifting a finger on marketing.
        </motion.p>

        <motion.a
          href="#"
          className="cta-button"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Book a Free Strategy Call
          </motion.span>
        </motion.a>
      </div>

      {/* Parallax background effect */}
      <motion.div
        className='hero-parallax'
        style={{
          background: 'linear-gradient(135deg, #724cf9 0%, #5a37e0 100%)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}

export default HeroSection;
