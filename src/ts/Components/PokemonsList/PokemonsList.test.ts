import PokemonsList from "./PokemonsList.js";
import type { Pokemon } from "../../types/types.js";

describe("Given a PokemonsList component", () => {
  describe("When it receives a list of Pokemons", () => {
    test("Then it should show a Bulbasaur in the first position", () => {
      const container = document.createElement("ul");

      const bulbasaur: Pokemon = {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon-form/1/",
      };

      const pokemonsList = new PokemonsList(container, [bulbasaur]);
      pokemonsList.render();

      const span = container.querySelector("span")!;

      expect(span).not.toBeNull();
      expect(span.textContent).toBe(bulbasaur.name);
    });
  });
});
