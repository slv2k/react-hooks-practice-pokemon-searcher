import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/pokemon")
    .then((r) => r.json())
    .then((pokemonArray) => {
      setPokemon(pokemonArray)
    });
  }, []);

  function handleAddPokemon(newPokemon) {
    const updatedPokemonArray = [...pokemon, newPokemon];
    setPokemon(updatedPokemonArray);
  }

  const displayedPokemon = pokemon.filter((mon) => {
    return mon.name.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <br />
      <PokemonCollection pokemon={displayedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
