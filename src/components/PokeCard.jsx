import React, { useContext } from 'react'
import { DetallesContext } from '../context/DetallesContext'
import Card from 'react-bootstrap/Card'

const PokeCard = () => {
  const { pokemonDetalles } = useContext(DetallesContext)

  return (
    <Card
      bg='primary'
      text='white'
      style={{ width: '18rem' }}
      className='mb-2'
    >
      <Card.Header>ID: {pokemonDetalles.id} </Card.Header>
      <Card.Body>
        <Card.Title>{pokemonDetalles.name} Card Title</Card.Title>
        <Card.Text>
          <img src={pokemonDetalles.image} alt={pokemonDetalles.name} />
          Type: {pokemonDetalles.type}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PokeCard


