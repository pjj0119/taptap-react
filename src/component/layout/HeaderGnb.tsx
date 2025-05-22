import { Link } from 'react-router-dom';


type pageTitProps = {
	pageTit: string;
};
const HeaderGnb = ({pageTit} :pageTitProps) => {
	return (
		<nav className="header__gnb">
			<ul>
				<li><Link to={`/Magazine `} className={`${pageTit == 'Magazine' && 'on'  }`}>MAGAZINE</Link></li>
				<li><Link to={`/Archive `} className={`${pageTit == 'Archive' && 'on'  }`}>ARCHIVE</Link></li>
				<li><Link to={`/About `} className={`${pageTit == 'About' && 'on'  }`}>ABOUT</Link></li>
			</ul>
		</nav>
	)
}

export default HeaderGnb