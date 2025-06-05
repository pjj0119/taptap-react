import ArchiveBoxConList from './ArchiveBoxConList'
import type { AlphabetGroupedProps } from '@/types/ArchiveTypes';


const ArchiveBoxCon = ({ alphabetGrouped }: AlphabetGroupedProps) => {
	return (
		
		<div className="archiveBox__con">

			<div className="archiveBox__con__tit">
				<p>A</p>
			</div>
			<div className="archiveBox__con__listBox">
				<ArchiveBoxConList alphabetGrouped={alphabetGrouped}/>
			</div>

		</div>
	)
  }
  
  export default ArchiveBoxCon