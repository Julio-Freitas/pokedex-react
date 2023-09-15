import styled from 'styled-components';

type Color = {
  color: string;
};

export const Span = styled.span<Color>`
  background-color: ${({ color, theme }) => theme.colors.types[`${color}`]};
  padding: 5px;
  margin-left: 5px;
  font-size: 12px;
  border-radius: 4px;
`;
