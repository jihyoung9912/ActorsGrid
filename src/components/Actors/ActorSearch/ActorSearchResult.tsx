import { useParams } from 'react-router-dom';
import ActorSearchCard from './ActorSearchCard';
import { ActorsContainer, CelebritiesLabel } from 'components/Actors/ActorComponent';

const ActorSearchResult = () => {
  const { searchParams } = useParams();

  return (
    <ActorsContainer $wrap="wrap" $justify="flex-start" $align="center">
      <CelebritiesLabel>Result for {searchParams}</CelebritiesLabel>
      <ActorSearchCard />
    </ActorsContainer>
  );
};

export default ActorSearchResult;
