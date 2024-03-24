import React, { createContext, useEffect, useState } from "react";

export const PokeContext = createContext();

const DataProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemon2, setPokemon2] = useState(['']);
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'; 

  const getPokemon = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data.results);
    } catch (error) {
      console.error('No hay información', error);
    }
  }

  useEffect(() => {
    getPokemon();
  }, []);

  const manejarPokemon = (pokemon) => setPokemon2(pokemon);

  return (
    <PokeContext.Provider value={{ pokemon, pokemon2, manejarPokemon }}>
      {children}
    </PokeContext.Provider>
  );
}

export default DataProvider;
