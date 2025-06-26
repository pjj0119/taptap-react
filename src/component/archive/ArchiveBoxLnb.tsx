import ArchiveBoxLnbList from './ArchiveBoxLnbList';
import type { AlphabetGroupedProps } from '@/types/ArchiveTypes';


const ArchiveBoxLnb = ({ alphabetGrouped }: AlphabetGroupedProps) => {
  if (!alphabetGrouped || Object.keys(alphabetGrouped).length === 0) return null;

  return (
	<div className="archiveBox__lnb">
		<div className="archiveBox__lnb__tit">
			<p>A - Z</p>
		</div>

		<div className="archiveBox__lnb__listBox">
			<ArchiveBoxLnbList alphabetGrouped={alphabetGrouped} />
		</div>
	</div>
  );
};

export default ArchiveBoxLnb;
