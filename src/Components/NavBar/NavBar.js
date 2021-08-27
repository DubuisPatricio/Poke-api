import React from "react";
import { PokemonImage } from "./NavBar.styled";

const NavBar = () => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <PokemonImage src={imgUrl} alt="pokeapi-logo" />
      </div>
    </nav>
  );
};
export default NavBar;
