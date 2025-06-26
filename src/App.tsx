// src/App.tsx
import { useLayoutEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/assets/scss/style.scss';


import Layout from '@/layout/Layout';

import Main from '@/page/Main';
import Magazine from '@/page/Magazine';
import Archive from '@/page/Archive';
import MagazineView from '@/page/MagazineView';
import About from '@/page/About';
import NotFound from '@/page/NotFound';
import ScrollToTop from '@/RouterReset';


function App() {
  const [isMobile, setIsMobile] = useState<null | boolean>(null);
	const [isClicked, setIsClicked] = useState(false);
  useLayoutEffect(() => {
	const check = () => {
	if (typeof window !== 'undefined') {
	  setIsMobile(window.innerWidth < 768);
	}
  };
	check();
	window.addEventListener('resize', check);
	return () => window.removeEventListener('resize', check);
  }, []);
  
  if (isMobile === null) return null;

  return (
	<BrowserRouter>
		<ScrollToTop />
		<Layout 
			isMobile={isMobile}
			isClicked={isClicked}
			setIsClicked={setIsClicked}
		>
			<Routes>
				<Route path="/" element={<Main isMobile={isMobile} />} />
				<Route path="/Magazine" element={<Magazine />} />
				<Route path="/Magazine/:pageNum" element={<MagazineView isMobile={isMobile}/>} />
				<Route path="/Archive" element={<Archive isMobile={isMobile}/>} />
				<Route path="/About" element={<About isMobile={isMobile}/>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	</BrowserRouter>
  );
}


export default App;
