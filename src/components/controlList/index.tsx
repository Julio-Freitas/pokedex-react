import { useSetRecoilState } from 'recoil';
import { Button } from '..';
import { loadMorePokemons } from '../../state/atom';
import * as S from './styles';
export const ControlList = () => {
  const setOffset = useSetRecoilState(loadMorePokemons);

  return (
    <S.WrapperControls>
      <Button onClick={() => setOffset((prev) => prev && prev - 10)}>
        Voltar
      </Button>
      <Button onClick={() => setOffset((prev) => prev + 10)}>Avançar</Button>
    </S.WrapperControls>
  );
};
