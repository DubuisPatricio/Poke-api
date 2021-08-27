import React, { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Pokedex from "../../Components/Pokedex/Pokedex";
import { getPokemonList, getPokemon } from "../../Services/api";
import { idTaker } from "./PokemonList.utils";
import { PokemonListContainer } from "./PokemonList.styles";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const data = await getPokemonList(page * 5);
      const promises = data.results.map(async (pokemon) => {
        const id = idTaker(pokemon.url);
        return await getPokemon(id);
      });
      const results = await Promise.all(promises);
      console.log(results);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 5));
    };
    fetchPokemon();
  }, [page]);

  return (
    <PokemonListContainer>
      <NavBar />
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
    </PokemonListContainer>
  );
};

export default PokemonList;
