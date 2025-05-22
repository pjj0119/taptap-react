import { Link } from 'react-router-dom';

const HeaderGnb = () => {
	return (
		<nav className="header__gnb">
			<ul>
				<li><Link to="/Magazine">MAGAZINE</Link></li>
				<li><Link to="/Archive">ARCHIVE</Link></li>
				<li><Link to="/About">ABOUT</Link></li>
			</ul>
		</nav>
	)
}

export default HeaderGnb