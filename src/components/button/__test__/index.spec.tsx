import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '..';
import { renderWithTheme } from '../../../utils/test';

const onClickMock = jest.fn();

describe('<Button />', () => {
  it('Should be render correctly', () => {
    renderWithTheme(<Button>BTN</Button>);
    expect(screen.getByText(/BTN/)).toBeInTheDocument();
  });

  it('Should call onCLick function', async () => {
    renderWithTheme(<Button onClick={onClickMock}>BTN</Button>);
    const btn = screen.getByText(/BTN/i);
    await userEvent.click(btn);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
