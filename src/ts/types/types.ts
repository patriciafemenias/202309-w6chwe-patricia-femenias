export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonResponse = {
  count: number;
  next: string;
  prevous: string;
  results: Pokemon[];
};
