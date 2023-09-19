import { selector } from 'recoil';
import { requester } from '../../api/requester';

import { IPokemon, IPokemonFetch } from '../../interfaces/pokemons';
import { listPokemons, loadMorePokemons, searchPokemonState } from '../atom';
import { AxiosError } from 'axios';
import { getSpritePokemon } from '../../utils/getSpritePokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonsAPI = selector<IPokemonFetch>({
  key: 'getListaDePokemons',
  get: async ({ get }) => {
    try {
      const offset = get(loadMorePokemons);

      const { data } = await requester({
        baseURL: BASE_URL,
      }).get(`/pokemon?limit=12&offset=${offset}`);

      const getPokemons = data.results.map(async (item: IPokemon) => {
        const { get } = await requester({
          baseURL: BASE_URL,
        });

        const pokemons = await get(`/pokemon/${item.name}`);
        const { sprites, types, id } = pokemons.data;

        return {
          ...item,
          sprites: await getSpritePokemon(id, sprites),
          types,
        };
      });

      const results = await Promise.all(getPokemons);

      return {
        count: data.count,
        previous: data.previous,
        next: data.next,
        results,
        error: false,
      };
    } catch (error) {
      return {
        count: 0,
        previous: null,
        next: null,
        results: [],
        error: true,
      };
    }
  },
});

export const getPokemonByNameAPI = selector({
  key: 'getPokemonByNameAPI',
  get: async ({ get }) => {
    const pokemonName = get(searchPokemonState);
    const currentList = get(listPokemons);

    if (pokemonName) {
      const foundPokemon = currentList.find(
        (item: IPokemon) => item.name === pokemonName.toLowerCase().trim(),
      );
      if (foundPokemon) {
        const { name, sprites, types } = foundPokemon;
        return { name, sprites, types, error: false } as IPokemon;
      }

      try {
        const { data } = await requester({
          baseURL: BASE_URL,
        }).get(`/pokemon/${pokemonName.toLowerCase().trim()}`);

        const { name, sprites, types, id } = data;
        return {
          name,
          sprites: await getSpritePokemon(id, sprites),
          types,
          error: false,
        } as unknown as IPokemon;
      } catch (err) {
        const error = err as AxiosError;

        if (error?.request?.status === 404) {
          return {
            name: '',
            sprites: 'null',
            types: 'null',
            error: true,
          } as unknown as IPokemon;
        }
        return {
          name: 'null',
          sprites: 'null',
          types: 'null',
          error: true,
        } as unknown as IPokemon;
      }
    }
  },
});
