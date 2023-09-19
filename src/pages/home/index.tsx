import { usePokemons } from '../../hooks/usePokemons';
import {
  ControlList,
  InfoPokemons,
  List,
  PokemonDatails,
  PokemonSearch,
} from '../../components';
import * as S from './styled';

export const Home = () => {
  const pokemons = usePokemons();

  console.log(pokemons);
  return (
    <S.Container>
      {pokemons.error && <h1>Algo de errado aconteceu..</h1>}

      <PokemonSearch />
      <ControlList />
      <InfoPokemons count={pokemons.count} />

      <PokemonDatails />

      <List.Container>
        {pokemons.data.map((pokemon) => (
          <List.Item
            key={pokemon.url}
            name={pokemon.name}
            sprite={pokemon.sprites?.front_default ?? ''}
            preview={
              pokemon.sprites.versions['generation-v']['black-white'].animated
                .front_default
            }
          />
        ))}
      </List.Container>
    </S.Container>
  );
};
