// src/App.tsx
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import '@/assets/scss/style.scss';

import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import FooterBar from '@/layout/FooterBar';

import Main from '@/page/Main';
import Magazine from '@/page/Magazine';
import Archive from '@/page/Archive';
import MagazineView from '@/page/MagazineView';
import About from '@/page/About';
import NotFound from '@/page/NotFound';

function Layout({
  children,
  isMobile,
}: {
  children: React.ReactNode;
  isMobile: boolean;
}) {
  const location = useLocation();
  const [pageTit, setPageTit] = useState('');

  useEffect(() => {
	const path = location.pathname.split('/')[1] || '';
	setPageTit(path);
  }, [location.pathname]);

  return (
	<>
	  <Header isMobile={isMobile} />
	  {children}
	  {['Magazine', 'Archive'].includes(pageTit) ? (
		<FooterBar isMobile={isMobile} />
	  ) : (
		<Footer isMobile={isMobile} />
	  )}
	</>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
	const check = () => setIsMobile(window.innerWidth <= 767);
	check();
	window.addEventListener('resize', check);
	return () => window.removeEventListener('resize', check);
  }, []);

  return (
	<BrowserRouter>
	  <Layout isMobile={isMobile}>
		<Routes>
		  <Route path="/" element={<Main isMobile={isMobile} />} />
		  <Route path="/Magazine" element={<Magazine />} />
		  <Route path="/Magazine/:pageNum" element={<MagazineView />} />
		  <Route path="/Archive" element={<Archive isMobile={isMobile}/>} />
		  <Route path="/About" element={<About isMobile={isMobile}/>} />
		  <Route path="*" element={<NotFound />} />
		</Routes>
	  </Layout>
	</BrowserRouter>
  );
}

export default App;
