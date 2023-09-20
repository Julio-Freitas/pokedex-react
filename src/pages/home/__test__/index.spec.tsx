import { RecoilRoot } from 'recoil';
import { renderWithTheme } from '../../../utils/test';
import { Home } from '..';
import { screen, waitFor } from '@testing-library/react';

jest.mock('../../../components/list', () => {
  return {
    List: {
      Container: () => <div data-testid="list-container" />,
      Item: () => <div />,
    },
  };
});
const mockUsePokemons = jest.fn();

// Mock the usePokemons hook
jest.mock('../../../hooks/usePokemons', () => {
  return {
    usePokemons: () => mockUsePokemons(), // Use the mock function directly
  };
});

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
};

describe('<Home />', () => {
  it('Should Error home', async () => {
    mockUsePokemons.mockReturnValue({
      data: [],
      count: 0,
      error: true,
    });

    renderWithTheme(
      <RecoilRoot>
        <Home />
      </RecoilRoot>,
    );
    await waitFor(() => {
      expect(
        screen.getByText('Algo de errado aconteceu..'),
      ).toBeInTheDocument();
    });
  });

  it('Should get listing', async () => {
    mockUsePokemons.mockReturnValue({
      data: [returnPokemonApi],
      count: 1,
      error: false,
    });

    renderWithTheme(
      <RecoilRoot>
        <Home />
      </RecoilRoot>,
    );
    await waitFor(() => {
      expect(
        screen.queryByText('Algo de errado aconteceu..'),
      ).not.toBeInTheDocument();

      expect(screen.getByTestId('list-container')).toBeInTheDocument();
    });
  });
});
