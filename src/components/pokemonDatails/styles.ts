import styled from 'styled-components';

type PokemonStyleProps = {
  isvisibled: boolean;
};
export const PokemonDatailsWrapper = styled.div<PokemonStyleProps>`
  display: flex;
  align-items: flex-start;
  gap: 5px;
  visibility: hidden;
  overflow: hidden;
  transition: max-height 1s;
  overflow: hidden;
  max-height: 0;
  align-items: center;
  box-shadow:
    rgba(150, 90, 80, 0.8) 1px 1px 3px,
    rgba(100, 50, 80, 0.9) 0px 1px 2px;

  ${({ isvisibled }) =>
    isvisibled &&
    `
    align-self: start;
    margin: 15px 0;
    padding: 10px;
    visibility: visible;
     max-height: 320px;
  `}
`;

export const Box = styled.div`
  align-self: flex-start;
`;
