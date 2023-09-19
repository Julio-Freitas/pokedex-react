import { IButtonProps } from './types';
import * as S from './styles';

export const Button = ({ children, onClick, ...rest }: IButtonProps) => (
  <S.Button type="button" {...rest} onClick={onClick}>
    {children}
  </S.Button>
);
