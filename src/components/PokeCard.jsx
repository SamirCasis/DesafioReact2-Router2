import React, { useContext, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { DetallesContext } from '../context/DetallesContext'
import { useParams } from 'react-router-dom'

const PokeCard = () => {
  const { pokemonDetalles, getPokemonDetalles } = useContext(DetallesContext)
  const { name, stats, src, types } = pokemonDetalles
  const { id } = useParams()

  useEffect(() => {
    getPokemonDetalles(id)
  }, [id, getPokemonDetalles])

  return (
    <Card bg='primary' text='white' style={{ width: '18rem' }} className='cardMain mb-2 border-4'>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {stats && (
          <ul>
            {stats.map((stat, index) => (
              <li key={index}>
                {stat.name}: {stat.base}
              </li>
            ))}
          </ul>
        )}
        <Card.Text>{types}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PokeCard
