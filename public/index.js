const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const getPokemons = async (url) => {
    const response = await fetch(apiUrl);
    const pokemonsPromise = (await response.json());
    return pokemonsPromise.results;
};
const pokemons = await getPokemons(apiUrl);
console.log(pokemons);
export {};
//# sourceMappingURL=index.js.map