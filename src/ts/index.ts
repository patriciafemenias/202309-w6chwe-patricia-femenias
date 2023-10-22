import App from "./Components/App/App.js";
import Button from "./Components/Button/Button.js";
import PokemonsList from "./Components/PokemonsList/PokemonsList.test.js";
import type { Pokemon } from "./types/types.js";
import type { PokemonResponse } from "./types/types.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemons = async (apiUrl: string): Promise<Pokemon[]> => {
  const response = await fetch(apiUrl);
  const pokemonsPromise = (await response.json()) as PokemonResponse;

  return pokemonsPromise.results;
};

const pokemons = await getPokemons(apiUrl);

export default getPokemons;

const body = document.querySelector("body")!;
const app = new App(body);
app.render();

const buttonsContainer = document.querySelector(".buttons-container")!;

const buttonPrevious = new Button(
  buttonsContainer,
  "submit",
  "Previous Pokemons",
  () => {
    throw new Error();
  },
);
buttonPrevious.render();

const buttonNext = new Button(
  buttonsContainer,
  "submit",
  "Next Pokemons",
  () => {
    throw new Error();
  },
);
buttonNext.render();

const pokemonList = new PokemonsList(body, pokemons);
pokemonList.render();
