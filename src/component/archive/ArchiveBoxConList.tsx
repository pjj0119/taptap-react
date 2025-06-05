import ArchiveBoxConListItem from './ArchiveBoxConListItem';
import type { AlphabetGroupedProps } from '@/types/ArchiveTypes';

const ArchiveBoxConList = ({ alphabetGrouped }: AlphabetGroupedProps) => {
  return (
	<>
	  {Object.entries(alphabetGrouped).map(([key, alphabetGroupedItems], i) => (
		<div key={key} className="archiveBox__con__list">
			{i !== 0 && 
		  		<p className="archiveBox__con__list__tit">{key}</p>
			}
		  <ul>
			<ArchiveBoxConListItem alphabetGroupedItems={alphabetGroupedItems} />
		  </ul>
		</div>
	  ))}
	</>
  );
};

export default ArchiveBoxConList;
