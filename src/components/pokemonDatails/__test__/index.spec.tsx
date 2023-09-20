import { screen } from '@testing-library/react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { renderWithTheme } from '../../../utils/test';
import { PokemonDatails } from '..';

jest.mock('recoil', () => {
  const actualRecoil = jest.requireActual('recoil');
  return {
    ...actualRecoil,
    useRecoilValue: jest.fn(),
    useSetRecoilState: jest.fn(),
  };
});

const retunErrorPokemonApi = {
  name: null,
  sprites: null,
  types: null,
  error: true,
};

const returnPokemonApi = {
  name: 'bulbasaur',
  sprites: {
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif',
          },
        },
      },
    },
  },
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
    },
    {
      slot: 2,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    },
  ],
  error: false,
};

jest.mock('../../card', () => ({
  __esModule: true,
  Card: () => <div data-testId="card-pokemon" />,
}));

jest.mock('../../bagde', () => ({
  __esModule: true,
  Badge: () => <div data-testId="badge-pokemon" />,
}));

describe('<PokemonDatails />', () => {
  it('Should be render PokemonDatails not found', () => {
    (useRecoilValue as any).mockReturnValue(retunErrorPokemonApi);
    renderWithTheme(
      <RecoilRoot>
        <PokemonDatails />
      </RecoilRoot>,
    );
    expect(screen.getByText(/Pokemon não encontrado/i)).toBeInTheDocument();
  });

  it('Should be render PokemonDatails with Pokmeon', () => {
    (useRecoilValue as any).mockReturnValue(returnPokemonApi);
    renderWithTheme(
      <RecoilRoot>
        <PokemonDatails />
      </RecoilRoot>,
    );

    expect(screen.getByTestId('card-pokemon')).toBeInTheDocument();
    expect(screen.getAllByTestId('badge-pokemon')).toHaveLength(
      returnPokemonApi.types.length,
    );
  });
});
