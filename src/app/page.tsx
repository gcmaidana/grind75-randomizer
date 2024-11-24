"use client";

import React from "react";
import Navbar from "../components/Navbar"; // Ensure Navbar is imported
import Randomizer from "../components/Randomizer";

const Home: React.FC = () => {
  return (
    <div className="font-quicksand">
      <Navbar /> {/* Include Navbar */}
      <Randomizer /> {/* Include Randomizer */}
    </div>
  );
};

export default Home;
