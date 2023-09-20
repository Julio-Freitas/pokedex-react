import { renderWithTheme } from '../../../../utils/test';
import { Item } from '..';
import { screen } from '@testing-library/react';

describe('<Item />', () => {
  it('should render Item', () => {
    renderWithTheme(
      <Item
        name="bulbasaur"
        sprite="https://img.pokemondb.net/sprites/red-blue/normal/bulbasaur.png"
        preview="https://img.pokemondb.net/sprites/red-blue/normal/bulbasaur.png"
      />,
    );
    expect(
      screen.getByRole('heading', { name: 'bulbasaur' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'bulbasaur' })).toBeInTheDocument();
  });

  it('should render Item without preview', () => {
    renderWithTheme(
      <Item
        name="bulbasaur"
        sprite="https://img.pokemondb.net/sprites/red-blue/normal/bulbasaur.png"
      />,
    );

    expect(screen.queryByTestId('preview')).not.toBeInTheDocument();
  });
});
