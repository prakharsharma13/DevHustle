import { Search } from "lucide-react";
import React from "react";

const SearchFilter = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="flex-grow">
        <div className="relative">
          <input
            type="text"
            placeholder="Search companies..."
            className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-4"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="flex gap-2">
        <select className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4">
          <option>All Difficulties</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <select className="bg-gray-800 border border-gray-700 rounded-md py-2 px-4">
          <option>All Questions</option>
          <option>Solved</option>
          <option>Unsolved</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
