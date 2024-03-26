import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { DetallesContext } from '../context/DetallesContext'

const PokeCard = () => {
  const { setPokemonDetalles } = useContext(DetallesContext)
  const { name, stats, img, types } = setPokemonDetalles

  return (
    <Card bg='primary' text='white' style={{ width: '18rem' }} className='mb-2'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {stats && (
            <ul>
              {stats.map((stat, id) => (
                <li key={id}>
                  {stat.name}: {stat.base}
                </li>
              ))}
            </ul>
          )}
        </Card.Text>
        <Card.Text>{types}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PokeCard
