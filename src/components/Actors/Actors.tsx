import styled from 'styled-components';
import { Flex } from 'components/common';
import { SearchedText } from 'types/ISearchedText';
import ActorCard from './ActorCard';

const ActorsContainer = styled(Flex)`
  width: 100%;
  padding: 2rem;
`;

const CelebritiesLabel = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 600;
`;

const Actors = (props: SearchedText) => {
  const { searchedActor } = props;
  return (
    <ActorsContainer $wrap="wrap" $justify="flex-start" $align="center">
      <CelebritiesLabel>Celebrities</CelebritiesLabel>
      <ActorCard searchedActor={searchedActor} />
    </ActorsContainer>
  );
};

export default Actors;
