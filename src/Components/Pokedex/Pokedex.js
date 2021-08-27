import React from "react";
import Pagination from "../Pagination/Pagination";
import Pokemon from "../Pokemon/Pokemon";
import { Header, PokedexGrid } from "./Pokedex.styled";

const Pokedex = ({ pokemons, page, setPage, total }) => {
  const backPage = () => {
    const backPage = Math.max(page - 1, 0);
    setPage(backPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <div>
      <Header>
        <h1>Pokedex</h1>
        <Pagination
          page={page}
          totalPages={total}
          onLeftClick={backPage}
          onRightClick={nextPage}
        />
      </Header>
      <PokedexGrid>
        {pokemons &&
          pokemons.map((pokemon, index) => (
            <Pokemon pokemon={pokemon} key={index} />
          ))}
      </PokedexGrid>
    </div>
  );
};
export default Pokedex;
