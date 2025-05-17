import { Star } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-800">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
          DevHustle🏆
        </h1>
      </div>
      <div>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 px-4 rounded-md flex items-center gap-2 shadow-md">
          <Star size={16} />
          <span>Star this project</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
