import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.spacing.xxxs};
  color: ${(props) => props.theme.font.colors.pure};
  padding: 10px;
  font-size: 1.4em;
  cursor: pointer;
  min-width: 180px;
  font-weight: bold;
  opacity: 0.8;
  transition: ease-in-out 0.5s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
