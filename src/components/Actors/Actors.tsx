import { useState } from 'react';
import styled from 'styled-components';
import { FlexWrapper } from 'components/common';
import ActorCard from './ActorCard/ActorCard';
import { useSearchContext } from 'context/useSearchContext';
import {
  useDataFetchingOnPageChange,
  useFetchActorsData,
  useFetchAndResetData,
  useScrollPagination,
} from 'hooks';

const ActorsContainer = styled(FlexWrapper)`
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
  const resetActorsData = () => setActorsData([]);

  const { hasNextPage, actorsData, setActorsData, isLoading, fetchPopularActorsData } =
    useFetchActorsData();
  useFetchAndResetData(resetActorsData, resetPageNumber, fetchPopularActorsData, searchedActor);
  useDataFetchingOnPageChange(pageNumber, fetchPopularActorsData);

  const increasePageNumber = () => {
    if (hasNextPage) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };
  useScrollPagination(increasePageNumber, 500);

  const pageTitle = searchedActor ? `Search for a ${searchedActor}` : 'Celebrities';
  const isActorData = actorsData.length;

  return (
    <ActorsContainer $wrap="wrap" $justify="flex-start" $align="center">
      {isActorData ? (
        <>
          <CelebritiesLabel>{pageTitle}</CelebritiesLabel>
          <FlexWrapper $wrap="wrap" $justify="flex-start" $align="center">
            <ActorCard actorsData={actorsData} isLoading={isLoading} />
          </FlexWrapper>
        </>
      ) : (
        <CelebritiesLabel>{`There's no celebrity named ${searchedActor}`} !!</CelebritiesLabel>
      )}
    </ActorsContainer>
  );
};

export default Actors;
