import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokeContext } from '../context/DataContext'
import Swal from 'sweetalert2'

const PokeSelect = () => {
  const { pokemon, seleccionarPokemon, selectedPokemon, setSelectedPokemon } = useContext(PokeContext)
  const navigate = useNavigate()

  const irAPokemon = () => {
  if (seleccionarPokemon (setSelectedPokemon)) { 
    navigate(`/pokemons/${selectedPokemon}`)
  } else {
    Swal.fire('Por favor seleccione una opción') 
  }}

  return (
    <section className="seleccionador">
      <h1>GOTTA CATCH 'EM ALL'</h1>
      <select name="selecciona" value={selectedPokemon} onChange={({ target }) => setSelectedPokemon(target.value)}>
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
