import ArchiveBoxConList from './ArchiveBoxConList'
type ArchiveListItemType = {
  imgSrc: string;
  brandTitle: string;
  linkUrl: string;
};

type ArchiveBoxConProps = {
  archiveList: ArchiveListItemType[];
};

const ArchiveBoxCon = ({archiveList} : ArchiveBoxConProps) => {
	return (
		
		<div className="archiveBox__con">

			<div className="archiveBox__con__tit">
				<p>A</p>
			</div>
			<div className="archiveBox__con__listBox">
				<ArchiveBoxConList archiveList={archiveList}/>
			</div>

		</div>
	)
  }
  
  export default ArchiveBoxCon