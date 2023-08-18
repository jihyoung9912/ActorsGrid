import { useState, useEffect } from 'react';

const useDisplaySize = () => {
  const [currentDisplaySize, setCurrentDisplaySize] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateDisplaySize = () => {
      timeoutId = setTimeout(() => {
        setCurrentDisplaySize(window.innerWidth);
      }, 1000);
    };
    window.addEventListener('resize', updateDisplaySize);

    return () => {
      window.removeEventListener('resize', updateDisplaySize);
      clearTimeout(timeoutId);
    };
  }, []);

  return currentDisplaySize;
};

export default useDisplaySize;
