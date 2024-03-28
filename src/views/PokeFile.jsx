import { useParams } from 'react-router-dom'
import PokesCard from '../components/PokesCard'
import { useEffect, useState } from 'react'

const Details = () => {
  const { name } = useParams()
  const [pokemonDetalle, setPokemonDetalle] = useState({})

  const url = 'https://pokeapi.co/api/v2/pokemon'

  const getPokemonDetalle = async (name) => {
    try {
      const response = await fetch(`${url}/${name}`)
      if (!response.ok) {
        throw new Error('¡Error al obtener el Pokémon!')
      }
      const data = await response.json()
      const img = data.sprites.other.home.front_default
      const stats = data.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat
      }))
      const type = data.types.map(({ type }) => type.name).join(' ')
      setPokemonDetalle({ name, stats, img, type })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemonDetalle(name)
  }, [name])

  return (
    <>
      <PokesCard pokemon={pokemonDetalle} />
    </>
  )
}

export default Details
