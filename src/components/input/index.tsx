import { IInputProps } from './types';
import * as S from './styles';

export const Input = ({ onChange, ...rest }: IInputProps) => {
  return (
    <S.Input
      name="search"
      onChange={onChange}
      placeholder="Pesquisa por um pokemons"
      {...rest}
    />
  );
};
