import React, { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";

const NavBar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navBar-img" />
      </div>
      <div>♥{favoritePokemons.length}</div>
    </nav>
  );
};
export default NavBar;
