import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouterReset = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // 사파리 대응: 살짝 움직였다가 다시 0으로
    const forceScrollTop = () => {
      window.scrollTo(0, 1);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 30);
    };

    // 딜레이 반복 시도 (Safari 대응)
    const scrollTries = [0, 100, 300, 500];
    scrollTries.forEach(delay => {
      setTimeout(forceScrollTop, delay);
    });
    
    //header 리셋
    const header = document.querySelector('.header') as HTMLElement;
    const headerLogo = document.querySelector('.header__logo');
    if (header && headerLogo) {
      headerLogo.classList.remove('white');
      header.style.removeProperty('color');
    }
  }, [pathname]);
  return null;
};

export default RouterReset;
