import React from "react";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-gray-800 rounded-lg py-4">
        <div className="text=2xl font-bold">0</div>
        <div className="text-gray-400">Total Solved</div>
        <div className="text-right text-gray-500">/ 0</div>
      </div>
      <div className="bg-gray-800 rounded-lg p-4 border-t-4 border-green-500">
        <div className="text-2xl font-bold">0</div>
        <div className="text-gray-400">Easy</div>
        <div className="text-right text-gray-500">/ 460</div>
      </div>
      <div className="bg-gray-800 rounded-lg p-4 border-t-4 border-yellow-500">
        <div className="text-2xl font-bold">0</div>
        <div className="text-gray-400">Medium</div>
        <div className="text-right text-gray-500">/ 929</div>
      </div>
      <div className="bg-gray-800 rounded-lg p-4 border-t-4 border-red-500">
        <div className="text-2xl font-bold">0</div>
        <div className="text-gray-400">Hard</div>
        <div className="text-right text-gray-500">/ 381</div>
      </div>
    </div>
  );
};

export default Stats;
