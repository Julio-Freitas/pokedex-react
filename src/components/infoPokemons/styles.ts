import styled from 'styled-components';

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 30px;
    animation: rotate-pokemon 4s infinite linear;

    @keyframes rotate-pokemon {
      from {
        transform: rotate(0deg);
        -moz-transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
        -moz-transform: rotate(360deg);
      }
    }
  }
`;
