import React from 'react';

export default function CaseStudySnapshot() {
  return (
    <section className="relative bg-white w-full flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-16 md:py-20 max-w-5xl mx-auto rounded-xl shadow-xl -mt-12 z-20">
      <img
       src='/image.png'
       alt="Client Results"
        className="case-img w-60 h-60 md:w-80 md:h-80 object-cover rounded-lg shadow-lg border-4 border-background bg-background"
      />
      <p className="font-mont text-xl md:text-2xl font-semibold max-w-md md:ml-8 text-primary">
        How Sarah closed <span className="text-accent">$48K in listings</span> in 60 days using our 3-step system.
      </p>
    </section>
  );
}
