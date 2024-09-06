import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return null;
};

export default useScrollToTop;
