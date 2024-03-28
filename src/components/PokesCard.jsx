import { Card } from 'react-bootstrap'

const PokesCard = ({ pokemon }) => {
  const { name, stats, img, type } = pokemon

  return (
    <Card className='cardMain' border='info' style={{ width: '26rem' }}>
      <Card.Img variant='top' src={img} alt={name} />
      <Card.Body>
        <Card.Title className='title mt-3'>{name}</Card.Title>
        <ul>
          {stats?.map((stat, id) => (
            <li key={id}>
              {stat.name}
              :{stat.base}
            </li>
          ))}
        </ul>
        <Card.Text>{type}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PokesCard
