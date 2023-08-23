import { useEffect } from 'react';
import throttle from 'utils/throttle';

const useScrollPagination = (callback: () => void, threshold: number) => {
  const handleScroll = throttle(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - threshold) {
      callback();
    }
  }, 400);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
};

export default useScrollPagination;
