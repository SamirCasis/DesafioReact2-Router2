import React, { createContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const PokeContext = createContext()

const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'

const DataProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        const names = data.results.map(pokemon => pokemon.name)
        setPokemon(names)
      } catch (error) {
        console.error('No se encuentra la información', error)
      }
    }
    getPokemon()
  }, [])

  const seleccionarPokemon = (name) => {
    setSelectedPokemon(name)
    navigate(`/pokemons/${name}`)
  }

  return (
    <PokeContext.Provider value={{ pokemon, seleccionarPokemon, selectedPokemon }}>
      {children}
    </PokeContext.Provider>
  )
}

export default DataProvider
