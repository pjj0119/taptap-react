
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import FooterBar from '@/layout/FooterBar';

type LayoutProps = {
  children: React.ReactNode;
  isMobile: boolean;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const Layout = ({ children, isMobile, isClicked, setIsClicked }: LayoutProps) => {
  const location = useLocation();
  const [pageTit, setPageTit] = useState('');

  useEffect(() => {
	const path = location.pathname.split('/')[1] || '';
	setPageTit(path);
  }, [location.pathname]);

  return (
	<>
	  <Header isMobile={isMobile} isClicked={isClicked} setIsClicked={setIsClicked} />
	  {children}
	  {['Magazine', 'Archive'].includes(pageTit) || isClicked ? (
		<FooterBar isMobile={isMobile} />
	  ) : (
		<Footer isMobile={isMobile} />
	  )}
	</>
  );
};

export default Layout;
