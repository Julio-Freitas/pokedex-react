import { useRecoilValue } from 'recoil';
import { Card } from '..';
import { getPokemonByNameAPI } from '../../state/selectors';
import { Badge } from '../bagde';
import * as S from './styles';

export const PokemonDatails = () => {
  const pokemon = useRecoilValue(getPokemonByNameAPI);

  if (pokemon?.error)
    return (
      <S.PokemonDatailsWrapper isvisibled={!!'true'}>
        <h2> Pokemon não encontrado</h2>
      </S.PokemonDatailsWrapper>
    );

  return (
    <S.PokemonDatailsWrapper isvisibled={!!pokemon ?? 'false'}>
      <>
        <Card
          name={pokemon?.name ?? ''}
          sprite={pokemon?.sprites?.front_default ?? ''}
        />
        <S.Box>
          <h2>Tipo do Pokémon</h2>
          {pokemon?.types?.map((item) => (
            <Badge color={item.type.name}></Badge>
          ))}
        </S.Box>
      </>
    </S.PokemonDatailsWrapper>
  );
};
