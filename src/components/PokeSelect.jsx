import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokeContext } from '../context/DataContext'

const PokeSelect = () => {
  const { pokemon, seleccionarPokemon } = useContext(PokeContext)
  const [pokeNameSelect, setPokeNameSelect] = useState('')
  const navigate = useNavigate()

  const irAPokemon = () => {
    seleccionarPokemon(pokeNameSelect)
    navigate(`/pokemons/${pokeNameSelect}`)
  }

  return (
    <section className="seleccionador">
      <h1>GOTTA CATCH 'EM ALL'</h1>
      <select name="selecciona" value={pokeNameSelect} onChange={({ target }) => setPokeNameSelect(target.value)}>
        <option value="">Selecciona un Pokémon</option>
        {pokemon.map((name, id) => (
          <option key={id} value={name}>{name}</option>
        ))}
      </select>
      <button onClick={irAPokemon}>Buscar</button>
    </section>
  )
}

export default PokeSelect
