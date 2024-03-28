import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokemonContext } from '../context/DataContext'
import Swal from 'sweetalert2'

const PokemonSelector = () => {
  const { pokemon } = useContext(PokemonContext)
  const navigate = useNavigate()
  const [selectedPokemon, setSelectedPokemon] = useState('')

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value)
  }

  const handleNavigate = () => {
    if (selectedPokemon) {
      navigate(`/Pokemons/${selectedPokemon}`)
    } else {
      Swal.fire('Debes seleccionar una opción')
    }
  }

  return (
    <section className='mainSelect'>
      <article className='SelectHead'>
        <h1>ELIGE TU </h1>
        <img className='imgLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png' alt='imagen logo oficial' />
      </article>
      <select value={selectedPokemon} onChange={handleSelectChange}>
        <option value=''>Selecciona un Pokémon</option>
        {pokemon?.map(poke => (
          <option
            key={poke.name}
            value={poke.name}
          >
            {poke.name}
          </option>
        ))}
      </select>
      <button onClick={handleNavigate}>Ver Detalles</button>
    </section>
  )
}

export default PokemonSelector
