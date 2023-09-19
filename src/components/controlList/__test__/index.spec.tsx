import { screen } from '@testing-library/react';
import { ControlList } from '..';
import { renderWithTheme } from '../../../utils/test';
import userEvent from '@testing-library/user-event';
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';

// Mock the Recoil state setter function
jest.mock('recoil', () => {
  const actualRecoil = jest.requireActual('recoil');
  return {
    ...actualRecoil,
    useRecoilValue: jest.fn(),
    useSetRecoilState: jest.fn(),
  };
});

let setOffsetMock;
let recoilValueMock;

describe('<ControlList />', () => {
  beforeEach(() => {
    setOffsetMock = jest.fn();
    recoilValueMock = jest.fn();
    (useSetRecoilState as any).mockReturnValue(setOffsetMock);
    (useRecoilValue as any).mockReturnValue(recoilValueMock);
  });

  it('Should be render correctly', () => {
    renderWithTheme(
      <RecoilRoot>
        <ControlList />
      </RecoilRoot>,
    );
    expect(screen.getByText(/voltar/i)).toBeInTheDocument();
    expect(screen.getByText(/Avançar/i)).toBeInTheDocument();
  });

  it('Should be call go back when click /voltar/', async () => {
    (useSetRecoilState as any).mockReturnValue(setOffsetMock);

    renderWithTheme(
      <RecoilRoot>
        <ControlList />
      </RecoilRoot>,
    );
    const goBack = screen.getByText(/voltar/i);
    await userEvent.click(goBack);

    expect(setOffsetMock).toHaveBeenCalledWith(expect.any(Function));
    expect(setOffsetMock.mock.calls[0][0](0)).toBe(0);
  });

  it('Should be call go back when click /Avançar/', async () => {
    (useSetRecoilState as any).mockReturnValue(setOffsetMock);

    renderWithTheme(
      <RecoilRoot>
        <ControlList />
      </RecoilRoot>,
    );
    const goBack = screen.getByText(/Avançar/i);
    await userEvent.click(goBack);

    expect(setOffsetMock).toHaveBeenCalledWith(expect.any(Function));
    expect(setOffsetMock.mock.calls[0][0](0)).toBe(10);
  });
});
