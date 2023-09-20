import { screen } from '@testing-library/react';
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';
import { renderWithTheme } from '../../../utils/test';
import { PokemonSearch } from '..';
import userEvent from '@testing-library/user-event';

jest.mock('recoil', () => {
  const actualRecoil = jest.requireActual('recoil');
  return {
    ...actualRecoil,
    useRecoilValue: jest.fn(),
    useSetRecoilState: jest.fn(),
  };
});

let setOffsetMock;
let recoilValueMock;
describe('Pokemon search', () => {
  beforeEach(() => {
    setOffsetMock = jest.fn();
    recoilValueMock = jest.fn();
    (useSetRecoilState as any).mockReturnValue(setOffsetMock);
    (useRecoilValue as any).mockReturnValue(recoilValueMock);
  });
  it('Should search Pokemon', async () => {
    renderWithTheme(
      <RecoilRoot>
        <PokemonSearch />
      </RecoilRoot>,
    );
    const input = screen.getByPlaceholderText(/Pesquisa por um pokemons/i);
    const button = screen.getByRole('button', { name: /Buscar/i });
    await userEvent.type(input, 'pikachu');
    await userEvent.click(button);
    expect(setOffsetMock).toHaveBeenCalledWith('pikachu');
  });
});
