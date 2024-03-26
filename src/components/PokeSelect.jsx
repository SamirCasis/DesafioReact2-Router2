import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokemonContext } from '../context/DataContext'

const PokemonSelector = () => {
  const { pokemon } = useContext(PokemonContext)
  const navigate = useNavigate()
  const [selectedPokemon, setSelectedPokemon] = useState('')

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value)
  }

  const handleNavigate = () => {
    if (selectedPokemon) {
      navigate(`/pokemon/${selectedPokemon}`)
    }
  }

  return (
    <div>
      <h2>Selecciona un Pokémon:</h2>
      <select value={selectedPokemon} onChange={handleSelectChange}>
        <option value=''>Selecciona un Pokémon</option>
        {pokemon.map(poke => (
          <option key={poke.name} value={poke.name}>
            {poke.name}
          </option>
        ))}
      </select>
      <button onClick={handleNavigate}>Ver Detalles</button>
    </div>
  )
}

export default PokemonSelector
