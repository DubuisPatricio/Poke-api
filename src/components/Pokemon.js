import React, { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";

const Pokemon = ({ pokemon }) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const blackHeart = "🖤";
  const redHeart = "❤️";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;
  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };
  return (
    <div className="pokemon-card">
      <div className="pokemon-img">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => (
              <div key={index} className="pokemon-type-text">
                {type.type.name}
              </div>
            ))}
          </div>
          <div className="pokemon-favorite">
            <button onClick={clickHeart}>{heart}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pokemon;
