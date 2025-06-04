import { Link } from 'react-router-dom';

type ArchiveListItemType = {
  imgSrc: string;
  brandTitle: string;
  linkUrl: string;
};

type ArchiveBoxConListProps = {
  archiveList: ArchiveListItemType[];
};
const ArchiveBoxConListItem = ({archiveList} : ArchiveBoxConListProps) => {
	return (
		<>
		{archiveList.map((item, i) => (

			<li key={i} className="archiveBox__con__list__item">
				<div className="archiveBox__con__list__item__img">
					<img src={item.imgSrc} alt="" />
				</div>
				<div className="archiveBox__con__list__item__txt">
					<dl>
						<dt>{item.brandTitle}</dt>
						<dd><a href={item.linkUrl}>{item.linkUrl}</a></dd>
					</dl>
					<ul className="linkBox">
						<li><Link to={''}>Vol.00</Link></li>
					</ul>
				</div>
			</li>
		))}
		</>
	)
  }
  
  export default ArchiveBoxConListItem