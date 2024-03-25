import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PokeContext } from '../context/DataContext'
import PokeCard from '../components/PokeCard';

const PokeView = () => {
  const { selectedPokemon } = useContext(PokeContext)
  const { name } = useParams()

  return (
    <PokeCard />
  )
}

export default PokeView
