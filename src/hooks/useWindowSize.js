import { useState, useEffect } from 'react';

const getAllSize = () => {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  }
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getAllSize());
  
  const handleResize = () => {
    setWindowSize(getAllSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[]);

  return windowSize;
}

export default useWindowSize;