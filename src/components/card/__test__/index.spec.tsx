import { renderWithTheme } from '../../../utils/test';
import { Card } from '..';
import { screen } from '@testing-library/react';

describe('Card', () => {
  it('Should render card correctly', () => {
    renderWithTheme(<Card name="Title" sprite="" />);
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
  });
});
