import pokeball from '../../assets/pokeball.svg';
import { InfoPokemonProps } from './ types';
import * as S from './styles';

export const InfoPokemons = ({ count }: InfoPokemonProps) => (
  <S.WrapperInfo>
    <h1>Total de pokemons {count}</h1>
    <img src={pokeball} alt="pokeball" title="pokeball" />
  </S.WrapperInfo>
);
