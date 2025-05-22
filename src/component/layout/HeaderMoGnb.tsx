import { Link } from 'react-router-dom';

type HeaderMoGnbProps = {
	setIsClicked: (isClicked: boolean) => void;
}
const HeaderMoGnb = ({ setIsClicked }: HeaderMoGnbProps) => {
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
					<li><Link to="/" onClick={() => setIsClicked(false)}>TAPTAP</Link></li>
					<li><Link to="Magazine" onClick={() => setIsClicked(false)}>MAGAZINE</Link></li>
					<li><Link to="Archive" onClick={() => setIsClicked(false)}>ARCHIVE</Link></li>
					<li><Link to="About" onClick={() => setIsClicked(false)}>ABOUT</Link></li>
				</ul>
			</nav>
		</div>
	)
}

export default HeaderMoGnb