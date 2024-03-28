import { createContext, useEffect, useState } from 'react'

export const PokemonContext = createContext()

const PokemonsProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState('')

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'

  useEffect(() => {
    const getPokemonName = async () => {
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
    getPokemonName()
  }, [])

  const pokeHandle = (pokemon) => {
    setSelectedPokemon(pokemon)
  }

  return (
    <PokemonContext.Provider value={{ pokemon, selectedPokemon, pokeHandle }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonsProvider
