import ArchiveBoxConListItem from './ArchiveBoxConListItem';
import type { AlphabetGroupedProps } from '@/types/ArchiveTypes';
import type { MutableRefObject } from 'react'; 

type Props = AlphabetGroupedProps & {
  alphabetTriggerRef: MutableRefObject<(HTMLDivElement | null)[]>;
};

const ArchiveBoxConList = ({ alphabetGrouped, alphabetTriggerRef }: Props) => {
  return (
	<>
	  {Object.entries(alphabetGrouped).map(([key, alphabetGroupedItems], i) => (
		<div key={key} className="archiveBox__con__list"
			ref={(e) => {
				alphabetTriggerRef.current[i] = e;
			}}
		>
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
