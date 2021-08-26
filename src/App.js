import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Pokedex from "./components/Pokedex";
import { getPokemon, getPokemonData } from "./components/api";
import { FavoriteProvider } from "./context/FavoriteContext";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorites] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const data = await getPokemon(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
    };
    fetchPokemon();
  }, [page]);
  const updateFavoritePokemons = (name) => {
    const updates = [...favorite];
    const isFavorite = updates.indexOf(name);
    if (isFavorite >= 0) {
      updates.slice(isFavorite, 1);
    } else {
      updates.push(name);
    }
    setFavorites(updates);
  };
  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorite,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
        <div className="app">
          <NavBar />
          <SearchBar />
          {loading ? (
            <div>cargando pokemones....</div>
          ) : (
            <Pokedex
              pokemons={pokemons}
              page={page}
              setPage={setPage}
              total={total}
            />
          )}
        </div>
      </div>
    </FavoriteProvider>
  );
}

export default App;
