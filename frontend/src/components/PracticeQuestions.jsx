import React from "react";
import Stats from "./Stats";

const PracticeQuestions = () => {
  return (
    <div className="bg-gradient-b from-gray-900 to-gray-800 ">
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Practice Questions</h2>
        <p className="text-gray-400 mb-8">
          Browse through 8,487 coding questions asked in technical interviews
        </p>
        <Stats />
      </section>
    </div>
  );
};

export default PracticeQuestions;
