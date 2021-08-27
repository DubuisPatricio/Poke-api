import React from "react";
import {
  PokemonCard,
  PokemonCardBody,
  PokemonCardBottom,
  PokemonCardTop,
  PokemonImageContainer,
  PokemonTypeContainer,
  PokemonTypeText,
} from "./Pokemon.styles";

const Pokemon = ({ pokemon }) => {
  return (
    <PokemonCard>
      <PokemonImageContainer>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </PokemonImageContainer>
      <PokemonCardBody>
        <PokemonCardTop>
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </PokemonCardTop>
        <PokemonCardBottom>
          <PokemonTypeContainer>
            {pokemon.types.map((type, index) => (
              <PokemonTypeText key={index} className="pokemon-type-text">
                {type.type.name}
              </PokemonTypeText>
            ))}
          </PokemonTypeContainer>
        </PokemonCardBottom>
      </PokemonCardBody>
    </PokemonCard>
  );
};
export default Pokemon;
