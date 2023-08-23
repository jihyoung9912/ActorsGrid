import { useState } from 'react';
import { fetchActorsListWithKeyword, fetchPopularActorsList } from 'apis/apis';
import { useSearchContext } from 'context/useSearchContext';
import { IActorData, IActorResponse } from 'types/IActors';

const useFetchActorsData = () => {
  const { searchedActor } = useSearchContext();
  const [actorsData, setActorsData] = useState<IActorData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPopularActorsData = async (page: number) => {
    setIsLoading(false);
    try {
      let response: IActorResponse;
      if (searchedActor) {
        response = await fetchActorsListWithKeyword(page, searchedActor);
        console.log(response);
      } else {
        response = await fetchPopularActorsList(page);
      }
      setActorsData((prevActorsData) => [...prevActorsData, ...response.results]);
    } catch (error) {
      console.error('Error fetching actor data:', error);
    }
    setIsLoading(true);
  };

  return { actorsData, setActorsData, isLoading, fetchPopularActorsData }; // Include fetchPopularActorsData in the return object
};

export default useFetchActorsData;
