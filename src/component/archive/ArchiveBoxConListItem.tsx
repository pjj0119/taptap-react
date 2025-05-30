import { Link } from 'react-router-dom';

const ArchiveBoxConListItem = () => {
	return (
		
		<li className="archiveBox__con__list__item">
			<div className="archiveBox__con__list__item__img">
				<img src={`/front/images/archive/ikea_logo.png`} alt="" />
			</div>
			<div className="archiveBox__con__list__item__txt">
				<dl>
					<dt>IKEA</dt>
					<dd><a href={"https://www.ikea.com/kr/ko/"}>https://www.ikea.com/kr/ko/</a></dd>
				</dl>
				<ul className="linkBox">
					<li><Link to={''}>Vol.00</Link></li>
				</ul>
			</div>
		</li>
	)
  }
  
  export default ArchiveBoxConListItem