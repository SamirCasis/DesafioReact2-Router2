import React, { useContext, useState } from 'react'
import { PokeContext } from './DataContext'
import { useNavigate } from 'react-router-dom'

const PokeSelect = () => {
  const { pokemonNames, handleSelectPokemon } = useContext(PokeContext)
  const [pokeNameSelect, setPokeNameSelect] = useState('')
  const navigate = useNavigate()

  const irAPokemon = () => {
    handleSelectPokemon(pokeNameSelect)
    navigate(`/pokemons/${pokeNameSelect}`)
  }

  return (
    <section className="seleccionador">
      <h1>GOTTA CATCH 'EM ALL'</h1>
      <select name="selecciona" value={pokeNameSelect} onChange={({ target }) => setPokeNameSelect(target.value)}>
        <option value="">Selecciona un Pokémon</option>
        {pokemonNames.map(pokemon => (
          <option key={pokemon.id} value={pokemon.name}>{pokemon.name}</option>
        ))}
      </select>
      <button onClick={irAPokemon}>Obtener Pokemon</button>
    </section>
  )
}

export default PokeSelect

