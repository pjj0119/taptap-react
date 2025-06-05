import { Link } from 'react-router-dom';
import type { AlphabetGroupedPropsItems } from '@/types/ArchiveTypes';

const ArchiveBoxConListItem = ({ alphabetGroupedItems }: AlphabetGroupedPropsItems) => {
	
const makeSafeId = (text: string) => text.toLowerCase().replace(/[^a-z0-9]/gi, '-');
  return (
	<>
	  {alphabetGroupedItems.map((alphabetGroupedItem, idx) => (
		<li key={idx} className="archiveBox__con__list__item" id={makeSafeId(alphabetGroupedItem.brandTitle)}>
		  <div className="archiveBox__con__list__item__img">
			<img src={alphabetGroupedItem.imgSrc} alt={alphabetGroupedItem.brandTitle} />
		  </div>
		  <div className="archiveBox__con__list__item__txt">
			<dl>
			  <dt>{alphabetGroupedItem.brandTitle}</dt>
			  <dd>
				<a href={alphabetGroupedItem.linkUrl} target="_blank" rel="noopener noreferrer">{alphabetGroupedItem.linkUrl}</a>
			  </dd>
			</dl>

			{alphabetGroupedItem.magazineNum.length > 0 && (
			  <ul className="linkBox">
				{alphabetGroupedItem.magazineNum.map((num, i) => (
				  <li key={i}>
					<Link to={`/Magazine/${num}`}>
						{`Vol.${alphabetGroupedItem.postNums?.[i] ?? ''}`}
					</Link>
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
