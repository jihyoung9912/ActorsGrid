import { useEffect } from 'react';

const useDataFetchingOnPageChange = (
  pageNumber: number,
  fetchDataFn: (pageNumber: number) => void,
) => {
  useEffect(() => {
    if (pageNumber > 1) {
      fetchDataFn(pageNumber);
    }
  }, [pageNumber]);
};

export default useDataFetchingOnPageChange;
