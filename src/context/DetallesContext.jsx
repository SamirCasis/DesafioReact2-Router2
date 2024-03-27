import React, { createContext, useEffect, useState } from 'react'

export const DetallesContext = createContext()

const DetallesProvider = ({ children }) => {
  const [pokemonDetalles, setPokemonDetalles] = useState({})

  const getPokemonDetalles = async (id) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('No se pudo obtener la información del Pokémon')
      }
      const data = await response.json()
      const src = data.sprites.other.home.front_default
      const stats = data.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat
      }))
      const types = data.types.map(({ type }) => type.name)
      return { name: data.name, stats, src, types }
    } catch (error) {
      console.error('Error al obtener detalles del Pokémon:', error)
      return ['']
    }
  }

  useEffect(() => {
    getPokemonDetalles(7).then(details => {
      if (details) {
        setPokemonDetalles(details)
      }
    })
  }, [])

  return (
    <DetallesContext.Provider value={{ pokemonDetalles, setPokemonDetalles, getPokemonDetalles }}>
      {children}
    </DetallesContext.Provider>
  )
}

export default DetallesProvider
