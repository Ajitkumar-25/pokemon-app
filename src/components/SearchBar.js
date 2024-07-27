import React from 'react';

const SearchBar = ({ search, setSearch, darkMode }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      value={search}
      onChange={e => setSearch(e.target.value)}
      className={`w-full p-3 mb-8 border rounded-lg shadow-sm focus:outline-none ${darkMode ? 'bg-gray-800 text-white border-gray-700 focus:ring-indigo-500' : 'bg-white text-gray-900 border-gray-300 focus:ring-indigo-500'}`}
    />
  );
};

export default SearchBar;
