import { Link } from 'react-router-dom';

type ArchiveListItemType = {
  imgSrc: string;
  brandTitle: string;
  linkUrl: string;
  magazineNum: string[];
};

type Props = {
  items: ArchiveListItemType[];
};

const ArchiveBoxConListItem = ({ items }: Props) => {
	
const makeSafeId = (text: string) => text.toLowerCase().replace(/[^a-z0-9]/gi, '-');
  return (
	<>
	  {items.map((item, idx) => (
		<li key={idx} className="archiveBox__con__list__item" id={makeSafeId(item.brandTitle)}>
		  <div className="archiveBox__con__list__item__img">
			<img src={item.imgSrc} alt={item.brandTitle} />
		  </div>
		  <div className="archiveBox__con__list__item__txt">
			<dl>
			  <dt>{item.brandTitle}</dt>
			  <dd>
				<a href={item.linkUrl} target="_blank" rel="noopener noreferrer">{item.linkUrl}</a>
			  </dd>
			</dl>

			{item.magazineNum.length > 0 && (
			  <ul className="linkBox">
				{item.magazineNum.map((num, i) => (
				  <li key={i}>
					<Link to={`/Magazine/${num}`}>Vol.{}</Link>
				  </li>
				))}
			  </ul>
			)}
		  </div>
		</li>
	  ))}
	</>
  );
};

export default ArchiveBoxConListItem;
