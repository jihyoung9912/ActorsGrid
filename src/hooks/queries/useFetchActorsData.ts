import { useState, useEffect } from 'react';
import { fetchActorsListWithKeyword, fetchPopularActorsList } from 'apis/apis';
import { useSearchContext } from '../../context/useSearchContext';
import { IActorData } from '../../types/IActors';

const useFetchActorsData = () => {
  const { searchedActor } = useSearchContext();
  const [actorsData, setActorsData] = useState<IActorData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPopularActorsData = async (page: number) => {
    setIsLoading(false);
    try {
      let response: any;
      if (searchedActor) {
        response = await fetchActorsListWithKeyword(page, searchedActor);
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
