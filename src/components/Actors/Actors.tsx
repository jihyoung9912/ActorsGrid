import styled from 'styled-components';
import ActorCard from './ActorCard';

const ActorsContainer = styled.main`
  width: 100%;
  padding: 2rem;
`;

const CelebritiesLabel = styled.label`
  font-size: 2rem;
  font-weight: 600;
`;

const Actors = () => {
  return (
    <ActorsContainer>
      <div>
        <CelebritiesLabel>Celebrities</CelebritiesLabel>
      </div>
      <ActorCard />
    </ActorsContainer>
  );
};

export default Actors;
