import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = ({ pokemons, page, setPage, total }) => {
  const backPage = () => {
    const nexPage = Math.max(page - 1, 0);
    setPage(nexPage);
  };
  const nextPage = () => {
    const nexPage = Math.min(page + 1, total);
    setPage(nexPage);
  };
  return (
    <div>
      <div className="header">
        <h1>Pokedex</h1>
        <Pagination
          page={page}
          totalPages={total}
          onLeftClick={backPage}
          onRightClick={nextPage}
        />
      </div>
      <div className="pokedex-grid">
        {pokemons &&
          pokemons.map((pokemon, index) => (
            <Pokemon pokemon={pokemon} key={index} />
          ))}
      </div>
    </div>
  );
};
export default Pokedex;
