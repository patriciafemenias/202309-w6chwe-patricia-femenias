import { type Pokemon } from "../../types/types.js";
import Component from "../Component/Component.js";

class PokemonCard extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemon: Pokemon,
  ) {
    super(parentElement, "li", "pokemon-card");
  }

  protected populate(): void {
    this.element.innerHTML = `
    <span class= pokemon-card__name>${this.pokemon.name}</span>
    <a href="${this.pokemon.url}">Click here</a>
    `;
  }
}

export default PokemonCard;
