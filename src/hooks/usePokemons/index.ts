import { useRecoilState, useRecoilValue } from 'recoil';
import { listPokemons, loadMorePokemons } from '../../state/atom';
import { getPokemonsAPI } from '../../state/selectors';
import { useCallback, useEffect, useState } from 'react';

export function usePokemons() {
  const [error, setError] = useState('');
  const [count, setCount] = useState(0);

  const [data, setData] = useRecoilState(listPokemons);
  const resultAPi = useRecoilValue(getPokemonsAPI);
  const offsetValue = useRecoilValue(loadMorePokemons);

  const getAllPokemons = useCallback(async () => {
    try {
      if (resultAPi.error) throw new Error('Error na resposta da API..');

      if (!resultAPi.error) {
        setData(resultAPi.results);
        setCount(resultAPi.count);
      }
    } catch (error: any) {
      setError(error?.message as string);
      setData([]);
    }
  }, [resultAPi.count, resultAPi.error, resultAPi.results, setData]);

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons, offsetValue]);

  return {
    data,
    error,
    count,
  };
}
