import { screen } from '@testing-library/react';
import { Loading } from '..';
import { renderWithTheme } from '../../../utils/test';

describe('<Loading />', () => {
  it('Should be render correctly isLoading true', () => {
    renderWithTheme(<Loading isLoading />);
    expect(
      screen.getByAltText(/Illustração de carregamento: pokebola girando/i),
    ).toBeInTheDocument();
  });
  it('Should be render correctly isLoading false', () => {
    renderWithTheme(<Loading isLoading={false} />);
    expect(
      screen.queryByAltText(/Illustração de carregamento: pokebola girando/i),
    ).not.toBeInTheDocument();
  });

  it('Should be render correctly loadingText', () => {
    renderWithTheme(<Loading isLoading loadingText="Carregando" />);
    expect(screen.getByText(/Carregando/i)).toBeInTheDocument();
  });
});
