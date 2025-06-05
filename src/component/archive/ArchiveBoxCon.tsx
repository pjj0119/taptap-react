import ArchiveBoxConList from './ArchiveBoxConList'
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