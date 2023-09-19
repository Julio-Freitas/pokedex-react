import { renderWithTheme } from '../../../../utils/test';
import { Container } from '..';
import { screen } from '@testing-library/react';

describe('<Container />', () => {
  it('should render container', () => {
    renderWithTheme(
      <Container>
        <h1>Conteúdo</h1>
      </Container>,
    );
    expect(
      screen.getByRole('heading', { name: 'Conteúdo' }),
    ).toBeInTheDocument();
  });
});
