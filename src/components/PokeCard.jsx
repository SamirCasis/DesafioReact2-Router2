import React, { useContext } from "react";
import { PokeContext } from "../context/DataContext";
import Card from 'react-bootstrap/Card';

const PokeCard = () => {
  const { selectedPokemon } = useContext(PokeContext);

  return (
    <Card
      bg="primary"
      text="white"
      style={{ width: '18rem' }}
      className="mb-2"
    >
      <Card.Header>{selectedPokemon.name} Card</Card.Header>
      <Card.Body>
        <Card.Title>{selectedPokemon.name} Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PokeCard;
