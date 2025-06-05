import { Link } from 'react-router-dom';
import type { HeaderMoGnbProps } from '@/types/LayputTypes';


const HeaderMoGnb = ({ setIsClicked , pageTit }: HeaderMoGnbProps) => {
	return (

		<div className="header__MoGnb">
			<div className="header__MoGnb__top">
				<button className="MoGnbCloseBtn" type="button" aria-label="메뉴 닫기" onClick={() => setIsClicked(false)}>
					<span className="MoGnbCloseBtn__bar"></span>
					<span className="MoGnbCloseBtn__bar"></span>
				</button>
			</div>
			<nav className="header__MoGnb__list">

				<ul>
					<li><Link to="/" className={`${pageTit == '/' &&'on' }`} onClick={() => setIsClicked(false) }>TAPTAP</Link></li>
					<li><Link to="Magazine" className={`${pageTit == 'Magazine' &&'on' }`} onClick={() => setIsClicked(false) }>MAGAZINE</Link></li>
					<li><Link to="Archive" className={`${pageTit == 'Archive' &&'on' }`} onClick={() => setIsClicked(false) }>ARCHIVE</Link></li>
					<li><Link to="About" className={`${pageTit == 'About' &&'on' }`} onClick={() => setIsClicked(false) }>ABOUT</Link></li>
				</ul>
			</nav>
		</div>
	)
}

export default HeaderMoGnb