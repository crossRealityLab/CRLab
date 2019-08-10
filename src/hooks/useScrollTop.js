import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const useScrollTop = ({ history }) => {
  
  useEffect(() => {
    const scrollFun = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => scrollFun();
  }, []);
  
  return null;
}

export default withRouter(useScrollTop);