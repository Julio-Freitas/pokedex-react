import { screen } from '@testing-library/react';
import { InfoPokemons } from '..';
import { renderWithTheme } from '../../../utils/test';

describe('<InfoPokemons />', () => {
  it('Should be render correctly', () => {
    renderWithTheme(<InfoPokemons count={10} />);
    expect(
      screen.getByRole('heading', { name: /Total de pokemons 10/i }),
    ).toBeInTheDocument();
  });
});
