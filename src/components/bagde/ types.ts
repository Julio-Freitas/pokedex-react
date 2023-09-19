export enum PokemonTypes {
  normal,
  fire,
  water,
  electric,
  grass,
  ice,
  fighting,
  poison,
  ground,
  flying,
  psychic,
  bug,
  rock,
  ghost,
  dragon,
  dark,
  steel,
  fairy,
  eletric,
}

// export type PokemonTypes =
//   | 'normal'
//   | 'fire'
//   | 'water'
//   | 'electric'
//   | 'grass'
//   | 'ice'
//   | 'fighting'
//   | 'poison'
//   | 'ground'
//   | 'flying'
//   | 'psychic'
//   | 'bug'
//   | 'rock'
//   | 'ghost'
//   | 'dragon'
//   | 'dark'
//   | 'steel'
//   | 'fairy'
//   | 'eletric';

export interface IBagde {
  color: keyof typeof PokemonTypes;
}
