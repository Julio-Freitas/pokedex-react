import * as S from './styles';
import { IBagde, PokemonTypes } from './ types';

export const Badge = ({ color }: IBagde) => (
  <S.Span color={PokemonTypes[color as string]}>{PokemonTypes[color]}</S.Span>
);
