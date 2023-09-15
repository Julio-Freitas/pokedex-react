import styled from 'styled-components';

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.neutral.pure};
  border-radius: ${(props) => props.theme.spacing.xxxs};
  padding: 15px;
  font-size: 2em;
  border: none;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
  color: ${(props) => props.theme.font.colors.pure};
  width: 100%;
  margin-bottom: 15px;

  ::placeholder {
    color: ${(props) => props.theme.font.colors[1]};
  }

  :focus {
    outline: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
