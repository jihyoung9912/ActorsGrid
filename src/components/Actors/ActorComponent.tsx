import styled from 'styled-components';
import { Flex } from '../common';

export const ActorCardContainer = styled(Flex)`
  width: 13rem;
  height: 20rem;
  box-shadow:
    -10px -10px 15px 0px #f6f6f6,
    10px 10px 15px 0px #cecece;
  border-radius: 13px;
  background-color: #f0f0f3;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ActorImg = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 13px;
`;

export const ActorNameContainer = styled(Flex)`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  height: 20%;
`;

export const ActorsContainer = styled(Flex)`
  width: 100%;
  padding: 2rem;
`;

export const CelebritiesLabel = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 600;
`;
