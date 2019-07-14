import React, { useState, useEffect, useRef, useCallback } from 'react';

const useComponentVisible = (initVisble) => {
  const [isComponentVisible, setIsComponentVisible] = useState(initVisble);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target))
      setIsComponentVisible(false);
  }
  const toggleVisible = useCallback(() => {
    setIsComponentVisible(!isComponentVisible);
  },[isComponentVisible])

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => document.removeEventListener('click', handleClickOutside, true);
  })

  return { ref, isComponentVisible, toggleVisible };
} 

export default useComponentVisible;