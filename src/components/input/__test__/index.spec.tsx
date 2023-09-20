import { screen, waitFor } from '@testing-library/react';
import { Input } from '..';
import { renderWithTheme } from '../../../utils/test';
import userEvent from '@testing-library/user-event';

describe('<Input />', () => {
  it('Should be render correctly', () => {
    renderWithTheme(<Input placeholder="Input testing" />);
    expect(screen.getByPlaceholderText(/Input testing/i)).toBeInTheDocument();
  });

  it('Should be call onChange', async () => {
    const onChangeMock = jest.fn();
    renderWithTheme(
      <Input placeholder="Input testing" onChange={onChangeMock} />,
    );
    const input = screen.getByPlaceholderText(/Input testing/i);
    await userEvent.type(input, 'Valor digitado');
    expect(onChangeMock).toHaveBeenCalledTimes('Valor digitado'.length);
    await waitFor(() => {
      screen.debug();
    });
  });
});
