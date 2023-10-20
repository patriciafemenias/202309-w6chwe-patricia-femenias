import type { Pokemon } from "./types/types.js";
import type { PokemonResponse } from "./types/types.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (url: string): Promise<Pokemon[]> => {
  const response = await fetch(apiUrl);
  const pokemonsPromise = (await response.json()) as PokemonResponse;

  return pokemonsPromise.results;
};

const pokemons = await getPokemons(apiUrl);

console.log(pokemons);
