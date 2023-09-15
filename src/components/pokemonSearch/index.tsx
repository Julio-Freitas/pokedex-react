import { useState } from 'react';
import { Button, Input } from '..';
import { useSetRecoilState } from 'recoil';
import { searchPokemonState } from '../../state/atom';

export const PokemonSearch = () => {
  const [searchPokemon, setSearchPokemon] = useState<string>('');
  const getPokemonByName = useSetRecoilState(searchPokemonState);
  return (
    <>
      <Input
        name="search"
        onChange={(e) => setSearchPokemon(e.currentTarget.value)}
        placeholder="Pesquisa por um pokemons"
        value={searchPokemon}
      />
      <Button onClick={() => getPokemonByName(searchPokemon)}>Buscar</Button>
    </>
  );
};
