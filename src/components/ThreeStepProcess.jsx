import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGears, faUserCheck } from '@fortawesome/free-solid-svg-icons';

export default function ThreeStepProcess() {
  return (
    <section className="w-full py-16 px-4 max-w-3xl mx-auto text-center">
      <h2 className="font-mont text-2xl md:text-4xl font-bold text-primary mb-10">How It Works</h2>
      <ul className="steps flex flex-col md:flex-row gap-10 justify-center items-center">
        <li className="flex flex-col items-center font-inter max-w-xs w-full">
          <span className="mb-3">
            <FontAwesomeIcon icon={faPhone} className="text-accent text-4xl drop-shadow" />
          </span>
          <span className="text-lg font-semibold">1. Discovery Call:</span>
          <span className="mt-2 text-base text-text/80">We assess your current funnel and sales gaps</span>
        </li>
        <li className="flex flex-col items-center font-inter max-w-xs w-full">
          <span className="mb-3">
            <FontAwesomeIcon icon={faGears} className="text-accent text-4xl drop-shadow" />
          </span>
          <span className="text-lg font-semibold">2. System Setup:</span>
          <span className="mt-2 text-base text-text/80">We build your lead-generation + follow-up engine</span>
        </li>
        <li className="flex flex-col items-center font-inter max-w-xs w-full">
          <span className="mb-3">
            <FontAwesomeIcon icon={faUserCheck} className="text-accent text-4xl drop-shadow" />
          </span>
          <span className="text-lg font-semibold">3. Leads Come In:</span>
          <span className="mt-2 text-base text-text/80">You close the deals, we keep the pipeline flowing</span>
        </li>
      </ul>
    </section>
  );
}
