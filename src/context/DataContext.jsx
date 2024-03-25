import React, { createContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const PokeContext = createContext();

const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';

const DataContext = ({ children }) => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  const getPokemon = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const names = data.results.map(pokemon => pokemon.name);
      setPokemonNames(names);
    } catch (error) {
      console.error('Error fetching Pokemon names:', error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const handleSelectPokemon = (name) => {
    navigate(`/pokemons/${name}`);
  };

  return (
    <PokeContext.Provider value={{ pokemonNames, handleSelectPokemon, selectedPokemon: params.name }}>
      {children}
    </PokeContext.Provider>
  );
};

export default DataContext;

