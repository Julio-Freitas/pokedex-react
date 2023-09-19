import { ICard } from './ types';
import * as S from './styles';
export const Card = ({ name, sprite }: ICard) => {
  return (
    <S.WrapperCard>
      <S.Title key={name}>{name} </S.Title>
      <S.Img alt={name} title={name} src={sprite || ''} />
    </S.WrapperCard>
  );
};
