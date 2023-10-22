import type { Pokemon } from "../../types/types.js";
import Component from "../Component/Component.js";
import PokemonCard from "../PokemonCard/PokemonCard.js";

class PokemonsList extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemons: Pokemon[],
  ) {
    super(parentElement, "ul", "pokemons");
  }

  protected populate(): void {
    this.pokemons.forEach((pokemon) => {
      const pokemonCard = new PokemonCard(this.element, pokemon);
      pokemonCard.render();
    });
  }
}

export default PokemonsList;
