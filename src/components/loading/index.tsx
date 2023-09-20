import { FC } from 'react';
import * as S from './style';
// icons
import pokeball from '../../assets/pokeball.svg';
import { ILoading } from './types';

export const Loading: FC<ILoading> = ({ isLoading, loadingText }) => {
  if (!isLoading) return null;

  return (
    <S.LoadingContainer>
      <S.PokemonIcon>
        <img
          src={pokeball}
          alt="Illustração de carregamento: pokebola girando"
        />
      </S.PokemonIcon>
      {loadingText}
    </S.LoadingContainer>
  );
};
