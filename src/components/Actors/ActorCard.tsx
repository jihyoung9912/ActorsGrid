import styled from 'styled-components';
import { Flex } from '../common';

const ActorCardContainer = styled(Flex)`
  width: 13rem;
  height: 300px;
  background-color: #f0f0f3;
  box-shadow:
    -10px -10px 15px 0px #f6f6f6,
    10px 10px 15px 0px #cecece;
  //box-shadow:
  //  inset -7px -7px 5px 0px #f6f6f6,
  //  inset 7px 7px 5px 0px #cecece;
  transition: 0.5s all ease-in-out;
`;

const ActorImg = styled.img`
  width: 100%;
  height: 80%;
  background-color: black;
`;

const ActorNameContainer = styled(Flex)`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  height: 20%;
`;

const ActorCard = () => {
  return (
    <ActorCardContainer $wrap="wrap">
      <ActorImg />
      <ActorNameContainer $justify="center" $align="center">
        <h1>Actor Name</h1>
      </ActorNameContainer>
    </ActorCardContainer>
  );
};

export default ActorCard;
