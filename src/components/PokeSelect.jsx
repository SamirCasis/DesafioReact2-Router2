import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokeSelect = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const irAPokemon = () => {
    navigate(`/pokemons/${name}`);
  }

  return (
    <section className="seleccionador">
      <h1>GOTTA CATCH 'EM ALL'</h1>
      <select name="selecciona" id={name} onChange={({ target }) => setName(target.value)}>
        <option value="">Selecciona un Pokémon</option>
        <option value="bulbasaur">Bulbasaur</option>
        <option value="charmander">Charmander</option>
        <option value="squirtle">Squirtle</option>
      </select>
      <button onClick={irAPokemon}>Buscar</button>
    </section>
  );
}

export default PokeSelect;

