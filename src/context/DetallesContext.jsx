import { createContext, useEffect, useState } from 'react'

export const PokemonContext = createContext()

const PokemonsProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState('')

  const url = 'https://pokeapi.co/api/v2/pokemon/{id or name}/'

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('No se obtuvo la información')
        }
        const data = await response.json()
        setPokemon(data.results)
      } catch (error) {
        console.error('Error fetching Pokémon data:', error)
      }
    }
    getPokemon()
  }, [])

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon)
  }

  return (
    <PokemonContext.Provider value={{ pokemon, selectedPokemon, handleSelectPokemon }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonsProvider
