import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'components/common';
import { SearchedText } from 'types/ISearchedText';
import { IActorData } from 'types/IActors';
import { fetchPopularActorsList, fetchActorsListWithKeyword } from 'apis/apis';
import throttle from 'utils/throttle';
import ActorCard from './ActorCard/ActorCard';
import SkeletonCard from './ActorCardSkeleton/SkeletonCard';

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
  const [actorsData, setActorsData] = useState<IActorData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  /*
   * @params pageNumber
   * Fetch Popular Actors data with page number and also searchedActor
   */
  const fetchPopularActorsData = async (page: number) => {
    setIsLoading(false);
    try {
      if (searchedActor) {
        const response = await fetchActorsListWithKeyword(page, searchedActor);
        setActorsData((prevActorsData) => [...prevActorsData, ...response.results]);
      } else {
        const response = await fetchPopularActorsList(page);
        setActorsData((prevActorsData) => [...prevActorsData, ...response.results]);
      }
    } catch (error) {
      console.error('Error fetching actor data:', error);
    }
    setIsLoading(true);
  };

  // Reset ActorsData and pageNumber when searchedActor changes
  useEffect(() => {
    const fetchData = () => {
      setActorsData([]);
      setPageNumber(1);
      // Fetch with page number 1
      fetchPopularActorsData(1);
    };
    fetchData();
  }, [searchedActor]);

  // Data Fetching when pageNumber is not 1 and  changed
  useEffect(() => {
    if (pageNumber > 1) {
      fetchPopularActorsData(pageNumber);
    }
  }, [pageNumber]);

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

  return (
    <ActorsContainer $wrap="wrap" $justify="flex-start" $align="center">
      <CelebritiesLabel>
        {searchedActor ? `Search for a ${searchedActor}` : 'Celebrities'}
      </CelebritiesLabel>
      <ActorCard actorsData={actorsData} isLoading={isLoading} />
      <SkeletonCard />
    </ActorsContainer>
  );
};

export default Actors;
