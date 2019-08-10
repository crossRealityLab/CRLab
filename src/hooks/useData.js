import { useEffect, useState } from 'react';
import { get } from '../apis/firebaseApis';


export default function(endpoint = '', uuid) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  // 1: no uuid passed, for contact and labIntro APIs 
  const argsLength = arguments.length;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await get(endpoint, uuid);
        if(data) {
          setData(data);
        }  
      } catch (e) {
        console.log(`FETCH ${uuid} AT ${endpoint} ERROR`, e);
      } finally {
        setIsLoading(false);
      }
    };

    if(uuid || argsLength === 1) {
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [endpoint, uuid]);

  return { data, isLoading };
};