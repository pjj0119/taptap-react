// src/App.tsx
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import '@/assets/scss/style.scss';

import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import FooterBar from '@/layout/FooterBar';

// 페이지 컴포넌트 임포트
import Main from '@/page/Main';
import Magazine from '@/page/Magazine';
import Archive from '@/page/Archive';
import MagazineView from '@/page/MagazineView';
import NotFound from '@/page/NotFound';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [pageTit, setPageTit] = useState('');

  useEffect(() => {
	const checkIsMobile = () => setIsMobile(window.innerWidth <= 767);
	checkIsMobile();
	window.addEventListener('resize', checkIsMobile);
	return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
	const path = location.pathname.split('/')[1] || '';
	setPageTit(path);
  }, [location.pathname]);

  return (
	<>
	  <Header isMobile={isMobile} />
	  {children}
	  {pageTit === 'Magazine' || pageTit === 'Archive' ? (
		<FooterBar isMobile={isMobile} />
	  ) : (
		<Footer isMobile={isMobile} />
	  )}
	</>
  );
}

function App() {
  return (
	<BrowserRouter>
	  <Layout>
		<Routes>
		  <Route path="/" element={<Main />} />
		  <Route path="/Magazine" element={<Magazine />} />
          <Route path="/Magazine/:pageNum" element={<MagazineView />} />
		  <Route path="/Archive" element={<Archive />} />
		  <Route path="*" element={<NotFound />} />
		</Routes>
	  </Layout>
	</BrowserRouter>
  );
}

export default App;
