import { useEffect } from 'react';

const useDataFetchingOnPageChange = (pageNumber: any, fetchDataFn: any) => {
  useEffect(() => {
    if (pageNumber > 1) {
      fetchDataFn(pageNumber);
    }
  }, [pageNumber]);
};

export default useDataFetchingOnPageChange;
