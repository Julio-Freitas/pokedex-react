import { atom } from 'recoil';
import { IPokemon } from '../interfaces/pokemons';

export const listPokemons = atom<IPokemon[]>({
  key: 'listPokemons',
  default: [],
});

export const searchPokemonState = atom<string | undefined>({
  key: 'searchPokemon',
  default: undefined,
});

export const loadMorePokemons = atom({
  key: 'loadMorePokemons',
  default: 0,
});
