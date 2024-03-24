import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const PokeSelect = () => {
  const [name, setName] = useState("")
  const navigate = useNavigate()

  const irAPokemon = () => {
    navigate(`/pokemons/${name}`)
  }

  return (
    <section className="seleccionador">
      <h1> CATCH EM'LL </h1>
      <select name="selecciona" id={name} onChange={({ target }) => setName(target.value)}>
        {}
      </select>
      <button onClick={irAPokemon}> Buscar </button>
    </section>
  )
}

export default PokeSelect
