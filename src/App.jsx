import React from "react";
import HeroSection from "./components/HeroSection";
import CaseStudySnapshot from "./components/CaseStudySnapshot";
import ThreeStepProcess from "./components/ThreeStepProcess";
import TrustLine from "./components/TrustLine";
import FinalCallToAction from "./components/FinalCallToAction";
import SAMPLE from "./components/sample";
import Lenis from "lenis";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Years from "./components/11years";
import Marquee from "./components/marquee";
import HowItWorks from "./components/HowItWorks";
import { BrowserRouter } from "react-router-dom";
import AdditionalComponents from "./components/additionalcomponents";
import Footer from "./components/footer/footer";
export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <Years />
        <Marquee />
        <HowItWorks />
        <AdditionalComponents />
        {/* <HeroSection /> */}
        {/* <CaseStudySnapshot /> */}
        {/* <ThreeStepProcess /> */}
        {/* <TrustLine /> */}
        {/* <FinalCallToAction /> */}
        {/* <SAMPLE/> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}
