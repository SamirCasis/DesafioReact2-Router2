import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const DetallesContext = createContext()

const DetallesProvider = ({ children }) => {
  const [pokemonDetalles, setPokemonDetalles] = useState('')
  const { id } = useParams()
  
  useEffect(() => {
    const url2 = `https://pokeapi.co/api/v2/pokemon/${id}`
    const getPokemonDetalles = async () => {
      try {
        const response = await fetch(url2)
        if (!response.ok) {
          throw new Error('No se pudo obtener la información del Pokémon')
        }
        const data = await response.json()
        const pokemonInfo = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          type: data.types.type.name,
        }
        setPokemonDetalles(pokemonInfo)
      } catch (error) {
        console.error('Error al obtener detalles del Pokémon:', error)
      }
    }

    if (id) {
      getPokemonDetalles()
    }
  }, [id])

  return (
    <DetallesContext.Provider value={{pokemonDetalles, setPokemonDetalles}}>
      {children}
    </DetallesContext.Provider>
  )
}

export default DetallesProvider
