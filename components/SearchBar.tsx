"use client";

import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex gap-4 py-2 px-6 bg-gray-200 rounded-3xl max-w-xl mx-auto w-full max-lg:hidden">
      <input
        type="text"
        placeholder="Search Products"
        className="placeholder-gray-400 bg-transparent focus:outline-none text-gray-700 w-full"
      />

      <Search className="w-5 h-5 text-gray-400 cursor-pointer" />
    </div>
  );
};

export default SearchBar;
