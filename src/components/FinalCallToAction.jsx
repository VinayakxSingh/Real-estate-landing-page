import React from 'react';

export default function FinalCallToAction() {
  return (
    <footer className="w-full py-12 px-4 flex flex-col items-center bg-white">
      <a
        href="https://calendly.com/yourlink"
        className="cta-button px-10 py-5 bg-primary hover:bg-ctaHover text-accent rounded-full font-mont font-bold shadow-lg text-xl mt-4 hover:text-white transition-colors duration-200"
        target="_blank" rel="noopener noreferrer"
      >
        Let’s Talk – Book a Free 15-Min Call
      </a>
    </footer>
  );
}
