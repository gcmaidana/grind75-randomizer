import React, { useState } from "react";

// Define the Problem type
type Problem = {
  name: string;
  url: string;
  difficulty: string;
};

// Import and type the problems array
import grind75Problems from "../data/grind75"; // Ensure grind75Problems is a typed array

const Randomizer: React.FC = () => {
  const [randomProblem, setRandomProblem] = useState<Problem | null>(null);

  const generateRandomProblem = () => {
    const randomIndex = Math.floor(Math.random() * grind75Problems.length);
    setRandomProblem(grind75Problems[randomIndex]);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "text-green-500 font-bold";
      case "medium":
        return "text-yellow-500 font-bold";
      case "hard":
        return "text-red-500 font-bold";
      default:
        return "text-gray-400 font-bold";
    }
  };

  return (
    <section
      id="landing"
      className="h-screen flex flex-col justify-center items-center text-gray-100"
      style={{
        backgroundColor: "#000000", // Black background
      }}
    >
      <h1 className="text-5xl font-extrabold text-center mb-8">
        Welcome to Grind 75 Randomizer
      </h1>
      <p className="text-lg text-center text-gray-300 max-w-xl mb-8">
        This site is for individuals who have completed the{" "}
        <a
          href="https://www.grind75.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-400"
        >
          Grind75 list
        </a>{" "}
        and want to keep practicing by randomly selecting problems. It features
        all 158 questions (excluding premium problems) with hyperlinks and
        difficulty levels. This randomizer was created as the Grind75 site lacks
        this functionality.
      </p>
      <button
        onClick={generateRandomProblem}
        className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
      >
        Generate Problem
      </button>
      {randomProblem && (
        <div className="mt-6 text-center">
          <a
            href={randomProblem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xl bg-gray-800 px-6 py-4 rounded-md shadow-lg text-blue-500 underline"
          >
            {randomProblem.name}
          </a>
          <p
            className={`mt-4 text-lg ${getDifficultyColor(
              randomProblem.difficulty
            )}`}
          >
            {randomProblem.difficulty.toUpperCase()}
          </p>
        </div>
      )}
    </section>
  );
};

export default Randomizer;
