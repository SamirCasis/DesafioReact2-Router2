import { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const DetallesContext = createContext()

const DetallesProvider = ({ children }) => {
  const [pokemonDetalles, setPokemonDetalles] = useState([])
  const { name } = useParams()
  const url2 = `https://pokeapi.co/api/v2/pokemon`

  useEffect(() => {
    const getPokemonDetalles = async () => {
      try {
        const response = await fetch(url2)
        if (!response.ok) {
          throw new Error('No se pudo obtener la información del Pokémon')
        }
        const data = await response.json()
        const img = data.sprites.other.dream_world.front_default
        const stats = data.stats.map((stat) => ({
          name: stat.stat.name,
          base: stat.base_stat
        }))
        const types = data.types.map(({ type }) => type.name).join('')
        setPokemonDetalles({ name, stats, img, types })
      } catch (error) {
        console.error('Error al obtener detalles del Pokémon:', error)
      }
    }


    getPokemonDetalles(name)
  }, [name])

  return (
    <DetallesContext.Provider value={{ pokemonDetalles, setPokemonDetalles }}>
      {children}
    </DetallesContext.Provider>
  )
}

export default DetallesProvider
