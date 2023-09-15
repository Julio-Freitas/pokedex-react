import styled from 'styled-components';

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  animation: fadeIn 0.5s both;
  flex: 0 1 260px;
  max-width: 260px;

  border-radius: 5px;
  border-right: 1px solid rgba(150, 90, 80, 0.52);
  margin-right: 10px;
  padding: 10px;
  height: 320px;
  transition: ease-in-out 0.5s;
  cursor: pointer;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: #aad;
    color: rgba(143, 10, 93, 1);
  }
`;

export const Img = styled.img`
  height: 200px;
  width: 200px;
`;

export const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
  text-transform: capitalize;
`;
