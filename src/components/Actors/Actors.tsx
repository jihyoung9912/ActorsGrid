import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'components/common';
import { IActorData } from 'types/IActors';
import { fetchPopularActorsList, fetchActorsListWithKeyword } from 'apis/apis';
import throttle from 'utils/throttle';
import ActorCard from './ActorCard/ActorCard';
import { useSearchContext } from 'context/useSearchContext';
import { useDataFetchingOnPageChange, useFetchActorsData, useFetchAndResetData } from 'hooks';

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

const Actors = () => {
  const { searchedActor } = useSearchContext();
  const [pageNumber, setPageNumber] = useState(1);
  const resetPageNumber = () => setPageNumber(1);

  const { actorsData, setActorsData, isLoading, fetchPopularActorsData } = useFetchActorsData();
  useFetchAndResetData(setActorsData, resetPageNumber, fetchPopularActorsData, searchedActor);
  useDataFetchingOnPageChange(pageNumber, fetchPopularActorsData);

  // Scrolling Events Handlers with Throttling
  const handleScroll = throttle(() => {
    // Increase pageNumber for next page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  }, 400);

  // Manage scrolling Events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const pageTitle = searchedActor ? `Search for a ${searchedActor}` : 'Celebrities';

  return (
    <ActorsContainer $wrap="wrap" $justify="flex-start" $align="center">
      <CelebritiesLabel>{pageTitle}</CelebritiesLabel>
      <Flex $wrap="wrap" $justify="flex-start" $align="center">
        <ActorCard actorsData={actorsData} isLoading={isLoading} />
      </Flex>
    </ActorsContainer>
  );
};

export default Actors;
