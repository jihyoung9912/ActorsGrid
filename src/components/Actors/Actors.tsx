import styled from 'styled-components';
import ActorCard from './ActorCard';

const ActorsContainer = styled.main`
  width: 100%;
  padding: 2rem;
`;

const CelebritiesLabel = styled.label`
  display: block;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 600;
`;

const Actors = () => {
  return (
    <ActorsContainer>
      <CelebritiesLabel>Celebrities</CelebritiesLabel>
      <ActorCard />
    </ActorsContainer>
  );
};

export default Actors;
