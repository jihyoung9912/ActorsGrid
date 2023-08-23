import { useParams } from 'react-router-dom';
import ActorCard from './ActorCard';
import { ActorsContainer, CelebritiesLabel } from 'components/Actors/ActorComponent';

const Actors = () => {
  const { searchParams } = useParams();
  return (
    <ActorsContainer $wrap="wrap" $justify="flex-start" $align="center">
      <CelebritiesLabel>
        {searchParams ? `Result for ${searchParams}` : 'Celebrities'}
      </CelebritiesLabel>
      <ActorCard />
    </ActorsContainer>
  );
};

export default Actors;
