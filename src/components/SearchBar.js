import React from "react";
import { searchpokemon } from "./api";
const { useState } = React;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();
  const onChange = (event) => {
    setSearch(event.target.value);
  };
  const onClick = async (event) => {
    const data = await searchpokemon(search);
    setPokemon(data);
  };
  return (
    <div className="searchBar-Container">
      <div className="searchBar">
        <input
          placeholder="buscar pokemon"
          value={search}
          onChange={onChange}
        />
      </div>
      <div className="searchBar-Button">
        <button onClick={onClick}>buscar</button>
      </div>
    </div>
  );
};
export default SearchBar;
