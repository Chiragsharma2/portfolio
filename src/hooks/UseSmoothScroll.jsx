import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UseSmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(hash+location.key);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
};

export default UseSmoothScroll;