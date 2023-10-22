import type { Pokemon } from "../../types/types";
import PokemonCard from "./PokemonCard.js";

describe("Given a PokemonCard component", () => {
  describe("When it receives Bulbasaur's data", () => {
    test("Then it should show 'Bulbasaur'", () => {
      const container = document.createElement("div");

      const bulbasaur: Pokemon = {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon-form/1/",
      };

      const card = new PokemonCard(container, bulbasaur);
      card.render();

      const span = container.querySelector("span")!;

      expect(span).not.toBeNull();
      expect(span.textContent).toBe(bulbasaur.name);
    });
  });
});
