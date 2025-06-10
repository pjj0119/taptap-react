
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


import HeaderLogo from '@/component/layout/HeaderLogo';
import HeaderGnb from '@/component/layout/HeaderGnb';
import HeaderMoGnb from '@/component/layout/HeaderMoGnb';
import HeaderBtn from '@/component/layout/HeaderBtn';
import type { HeaderProps } from '@/types/LayputTypes';

const Header = ({ isMobile, isClicked, setIsClicked }: HeaderProps) => {
  	const location = useLocation();
	//페이지에 따른 푸터설정
	
	const [pageTit, setPageTit] = useState<string>('');

	useEffect(() => {
		const path = location.pathname.split('/');
		const pathName = path[1] || '';
		setPageTit(pathName);
	},[location.pathname]);


	return (
		<header id='header' className={`header ${pageTit == 'Magazine' || 'About' ? 'bgwt': ''}`}>
			<div className='headerInner'>
				<HeaderLogo />
				{!isMobile && <HeaderGnb pageTit={pageTit} />}
				{isMobile && <HeaderBtn setIsClicked={setIsClicked} />}
			</div>
			{isMobile && isClicked && (<HeaderMoGnb setIsClicked={setIsClicked} pageTit={pageTit}/>)}
		</header>
	)
}

export default Header