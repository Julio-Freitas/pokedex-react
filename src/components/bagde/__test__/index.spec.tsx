import { screen } from '@testing-library/react';
import { Badge } from '..';
import { renderWithTheme } from '../../../utils/test';
import { PokemonTypes } from '../ types';

describe('<Bagde />', () => {
  it('Should be render correctly', () => {
    renderWithTheme(<Badge color="normal" />);
    expect(screen.getByText(PokemonTypes.normal)).toBeInTheDocument();
  });
});
