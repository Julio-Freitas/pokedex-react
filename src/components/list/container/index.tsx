import { ListProps } from './ types';
import * as S from './styles';

export const Container = ({ children }: ListProps) => {
  return <S.Ul>{children}</S.Ul>;
};
