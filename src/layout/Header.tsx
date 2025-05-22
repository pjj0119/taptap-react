
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


import HeaderLogo from '@/component/layout/HeaderLogo';
import HeaderGnb from '@/component/layout/HeaderGnb';
import HeaderMoGnb from '@/component/layout/HeaderMoGnb';
import HeaderBtn from '@/component/layout/HeaderBtn';

type isMobileProps = {
	isMobile: boolean;
};
const Header = ({ isMobile }: isMobileProps) => {
  	const location = useLocation();
	const [isClicked, setIsClicked] = useState<boolean>(false);
	//페이지에 따른 푸터설정
	
	const [pageTit, setPageTit] = useState<string>('');

	useEffect(() => {
		const path = location.pathname.split('/');
		const pathName = path[1] || '';
		setPageTit(pathName);
	},[location.pathname]);


	return (
		<header id='header' className={`header ${pageTit == 'Magazine' ? 'bgwt': ''}`}>
			<div className='headerInner'>
				<HeaderLogo />
				{!isMobile && <HeaderGnb />}
				{isMobile && <HeaderBtn setIsClicked={setIsClicked} />}
			</div>
			{isMobile && isClicked && (<HeaderMoGnb setIsClicked={setIsClicked} />)}
		</header>
	)
}

export default Header