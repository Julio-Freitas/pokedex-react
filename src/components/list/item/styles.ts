import styled from 'styled-components';

export const WrapperCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  animation: fadeIn 0.5s both;
  flex: 0 1 260px;
  max-width: 260px;

  border-radius: 5px;
  box-shadow:
    rgba(150, 90, 80, 0.52) 0px 1px 3px,
    rgba(100, 50, 80, 0.24) 0px 1px 2px;
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
  height: 180px;
  width: 180px;
  object-fit: contain;
  background: ${(props) => props.theme.colors.neutral[1]};
  border-radius: 50%;
`;

export const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
  text-transform: capitalize;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 40px;
  }
`;
