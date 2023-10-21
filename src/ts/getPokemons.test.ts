import { getPokemons } from ".";

describe("Given a getPokemons function", () => {
  describe("When it receives the url 'https://pokeapi.co/api/v2/pokemon/'", () => {
    test("Then it should return a list of Pokemons, where the name of first item is Bulvasaur", async () => {
      const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
      const expectedPokemonName = "bulbasaur";

      const pokemonsList = await getPokemons(apiUrl);
      const firstPokemonName: string = pokemonsList[0].name;

      expect(firstPokemonName).toBe(expectedPokemonName);
    });
  });
});
