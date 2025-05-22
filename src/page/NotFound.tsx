import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    alert('존재하지 않는 페이지입니다.');
    window.history.back();
  }, []);

  return null;
};

export default NotFound;
