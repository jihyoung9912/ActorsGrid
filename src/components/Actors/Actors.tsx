import styled from 'styled-components';
import { Flex } from 'components/common';
import ActorCard from './ActorCard';

const ActorsContainer = styled(Flex)`
  width: 100%;
  padding: 2rem;
  gap: 1rem;
`;

const CelebritiesLabel = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 600;
`;

const Actors = () => {
  return (
    <ActorsContainer $wrap="wrap" $justify="flex-start" $align="center">
      <CelebritiesLabel>Celebrities</CelebritiesLabel>
      <ActorCard />
      <ActorCard />
      <ActorCard />
      <ActorCard />
      <ActorCard />
      <ActorCard />
      <ActorCard />
      <ActorCard />
    </ActorsContainer>
  );
};

export default Actors;
