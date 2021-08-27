import AppConfig from "../Config/App.config";
import endpointBuilder from "../Utils/EndpointBuilder";

const perPage = 5;

const pokeApiService = async ({ endpoint, id, params }) => {
  const { apiURL } = AppConfig;
  const endpointURL = endpointBuilder({ url: apiURL, endpoint, id, params });

  const data = await fetch(endpointURL);

  return data.json();
};

export const getPokemonList = async (page) => {
  const requestParams = {
    endpoint: "/pokemon",
    params: `?limit=${perPage}&offset=${page}`,
  };

  const data = await pokeApiService(requestParams);

  return data;
};

export const getPokemon = async (id) => {
  const requestParams = {
    endpoint: "/pokemon",
    id: `/${id}`,
  };

  const data = await pokeApiService(requestParams);

  return data;
};
