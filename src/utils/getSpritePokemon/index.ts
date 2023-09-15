import { ISpriteVerions } from '../../interfaces/pokemons';
import pokemonImg from '../../assets/pokeball.svg';

const BASE_URL_POKEMON_IMG =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

export const getSpritePokemon = async (id: number, sprites: ISpriteVerions) => {
  const requetImage = await fetch(`${BASE_URL_POKEMON_IMG}/${id}.svg`, {
    method: 'HEAD',
  });
  if (requetImage.ok)
    return {
      ...sprites,
      front_default: requetImage.url,
    };
  return {
    ...sprites,
    front_default: pokemonImg,
  };
};
