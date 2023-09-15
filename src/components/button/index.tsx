import { IButtonProps } from './types';
import * as S from './styles';

export const Button = ({ children, ...rest }: IButtonProps) => (
  <S.Button type="button" {...rest}>
    {children}
  </S.Button>
);
