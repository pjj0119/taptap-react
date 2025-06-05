import ArchiveBoxConListItem from './ArchiveBoxConListItem';

type ArchiveListItemType = {
  imgSrc: string;
  brandTitle: string;
  linkUrl: string;
  magazineNum: string[];
};

type AlphabetGroupedType = {
  [key: string]: ArchiveListItemType[];
};

type AlphabetGroupedProps = {
  alphabetGrouped: AlphabetGroupedType;
};

const ArchiveBoxConList = ({ alphabetGrouped }: AlphabetGroupedProps) => {
  return (
	<>
	  {Object.entries(alphabetGrouped).map(([key, items], i) => (
		<div key={key} className="archiveBox__con__list">
			{i !== 0 && 
		  		<p className="archiveBox__con__list__tit">{key}</p>
			}
		  <ul>
			<ArchiveBoxConListItem items={items} />
		  </ul>
		</div>
	  ))}
	</>
  );
};

export default ArchiveBoxConList;
