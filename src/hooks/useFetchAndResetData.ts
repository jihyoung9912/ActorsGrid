import { useEffect } from 'react';

const useFetchAndResetData = (
  setActorsData: any,
  resetPageNumber: any,
  fetchDataFn: any,
  searchedActor: any,
) => {
  useEffect(() => {
    const fetchData = () => {
      setActorsData([]);
      resetPageNumber();
      fetchDataFn(1);
    };
    fetchData();
  }, [searchedActor]);
};

export default useFetchAndResetData;
