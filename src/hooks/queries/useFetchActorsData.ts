import { useState } from 'react';
import { fetchActorsListWithKeyword, fetchPopularActorsList } from 'apis/apis';
import { useSearchContext } from 'context/useSearchContext';
import { IActorData, IActorResponse } from 'types/IActors';

const useFetchActorsData = () => {
  const { searchedActor } = useSearchContext();
  const [actorsData, setActorsData] = useState<IActorData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchPopularActorsData = async (page: number) => {
    setIsLoading(false);
    let response: IActorResponse;
    try {
      if (searchedActor) {
        response = await fetchActorsListWithKeyword(page, searchedActor);
      } else {
        response = await fetchPopularActorsList(page);
      }
      let isPageOver = response.page >= response.total_pages;
      setHasNextPage(!isPageOver);
      setActorsData((prevActorsData) => [...prevActorsData, ...response.results]);
    } catch (error) {
      throw error;
    }
    setIsLoading(true);
  };

  return { hasNextPage, actorsData, setActorsData, isLoading, fetchPopularActorsData }; // Include fetchPopularActorsData in the return object
};

export default useFetchActorsData;
