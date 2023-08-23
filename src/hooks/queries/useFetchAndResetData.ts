import { useEffect } from 'react';

const useFetchAndResetData = (
  setActorsData: () => void,
  resetPageNumber: () => void,
  fetchDataFn: (page: number) => Promise<void>,
  searchedActor: string,
) => {
  useEffect(() => {
    const fetchData = () => {
      setActorsData();
      resetPageNumber();
      fetchDataFn(1);
    };
    fetchData();
  }, [searchedActor]);
};

export default useFetchAndResetData;
