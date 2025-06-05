import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import type { HeaderMoGnbProps } from '@/types/LayputTypes';


const HeaderBtn = ({ setIsClicked }: HeaderMoGnbProps) => {
	const [headerTit, setHeaderTit] = useState<string>('');
	
  	const location = useLocation();

	useEffect(() => {
		const path = location.pathname.split('/');
		const pathName = path[1] || '';
		setHeaderTit(pathName);
	}, [location.pathname]);

	return (
		<div className="header__hamBtn">
			<p className="header__hamBtn__gnbTit">
				{headerTit}
			</p>
			<button className="hamBtn" type="button" aria-label="메뉴 열기" onClick={() => setIsClicked(true)}>
				<span className="hamBtn__bar"></span>
				<span className="hamBtn__bar"></span>
			</button>
		</div>
	)
}

export default HeaderBtn