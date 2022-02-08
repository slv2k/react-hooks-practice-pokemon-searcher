import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemon.map((mon) => {
        return (
          <PokemonCard 
          key={mon.id}
          name={mon.name}
          image={mon.sprites}
          hp={mon.hp}
          />
        )
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
