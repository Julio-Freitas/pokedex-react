import { useRecoilValue } from 'recoil';
import { Card } from '..';
import { getPokemonByNameAPI } from '../../state/selectors';
import { Badge } from '../bagde';
import * as S from './styles';
import { PokemonTypes } from '../bagde/ types';

export const PokemonDatails = () => {
  const pokemon = useRecoilValue(getPokemonByNameAPI);

  if (!pokemon || pokemon?.error)
    return (
      <S.PokemonDatailsWrapper isvisibled={!!'true'}>
        <h2> Pokemon não encontrado</h2>
      </S.PokemonDatailsWrapper>
    );

  const { name, sprites, types } = pokemon;

  return (
    <S.PokemonDatailsWrapper isvisibled={!!pokemon}>
      <>
        <Card name={name} sprite={sprites.front_default ?? ''} />
        <S.Box>
          <h2>Tipo do Pokémon</h2>

          {types?.map((item) => (
            <Badge key={item.slot} color={PokemonTypes[item.type.name]} />
          ))}
        </S.Box>
      </>
    </S.PokemonDatailsWrapper>
  );
};
