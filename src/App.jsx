import React from 'react';
import HeroSection from './components/HeroSection';
import CaseStudySnapshot from './components/CaseStudySnapshot';
import ThreeStepProcess from './components/ThreeStepProcess';
import TrustLine from './components/TrustLine';
import FinalCallToAction from './components/FinalCallToAction';

export default function App() {
  return (
    <div className="font-inter bg-background text-text min-h-screen flex flex-col">
      <HeroSection />
      <CaseStudySnapshot />
      <ThreeStepProcess />
      <TrustLine />
      <FinalCallToAction />
    </div>
  );
}
