import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokeContext } from '../context/DataContext'
import Swal from 'sweetalert2'

const PokeSelect = () => {
  const { pokemon, seleccionarPokemon } = useContext(PokeContext)
  const [pokeNameSelect, setPokeNameSelect] = useState('')
  const navigate = useNavigate()

  const irAPokemon = () => {
    if (pokeNameSelect) {
      seleccionarPokemon(pokeNameSelect)
      const formattedName = encodeURIComponent(pokeNameSelect.toLowerCase())
      navigate(`/pokemons/${formattedName}`)
    } else {
      Swal.fire('Por favor selecciona un Pokémon antes de buscar.')
    }
  }

  return (
    <section className='seleccionador'>
      <h1>GOTTA CATCH 'EM ALL'</h1>
      <select name='selecciona' value={pokeNameSelect} onChange={({ target }) => setPokeNameSelect(target.value)}>
        <option value='name'>Selecciona un Pokémon</option>
        {pokemon.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
      <button onClick={irAPokemon}>Buscar</button>
    </section>
  )
}

export default PokeSelect
