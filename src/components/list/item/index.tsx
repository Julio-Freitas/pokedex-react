import { ICard } from './ types';
import * as S from './styles';
export const Item = ({ name, sprite, preview }: ICard) => {
  return (
    <S.WrapperCard>
      <S.Img alt={name} title={name} src={sprite} />
      <S.WrapperTitle>
        <S.Title key={name}>{name} </S.Title>
        {preview && (
          <img src={preview} title={name} alt="pokemon" data-testid="preview" />
        )}
      </S.WrapperTitle>
    </S.WrapperCard>
  );
};
