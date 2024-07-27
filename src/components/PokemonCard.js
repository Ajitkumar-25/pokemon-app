import React from 'react';

const PokemonCard = ({ pokemon, darkMode }) => {
  return (
    <div className={`p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex justify-center">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-32 h-32" />
      </div>
      <h2 className={`text-2xl text-center mt-4 capitalize font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;
