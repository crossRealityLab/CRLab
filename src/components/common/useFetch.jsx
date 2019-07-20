import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const useFetch = (initUrl) => {
  const isMounted = useRef(false);
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
    abortController: null,
  });
  
  useLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    }
  },[]);

  useEffect(() => {
    const abortController = new AbortController();
    if(!!initUrl && isMounted.current)
      fetchData(abortController);
    
    return () => abortController.abort();
  },[initUrl]);

  const fetchData = async (controller) => {
    try {
      setState({
        ...state,
        loading: true,
        abortController: controller
      });
      let rsp = await fetch(initUrl);
      let data = await rsp.json();
      console.log(data);
      setState({
        ...state,
        loading: false,
        data: data
      });
    } catch(error) {
      setState({
        ...state,
        error,
        loading: false,
      });
    }
  }

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    abort: () => state.controller && state.controller.abort()
  }
}

export default useFetch;

