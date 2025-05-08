'use client';

import React from "react";
import Hero from "../conponents/heroSection";
import Advertising from "../conponents/SpecialOffers";
import Courses from "../conponents/course";


const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cyan-100">
      <main className="flex-grow">
        <Hero />
        <Advertising />
        <Courses />
      </main>
    </div>
  );
};

export default HomePage;
