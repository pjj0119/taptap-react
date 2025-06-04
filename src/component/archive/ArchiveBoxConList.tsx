import ArchiveBoxConListItem from './ArchiveBoxConListItem'
type ArchiveListItemType = {
  imgSrc: string;
  brandTitle: string;
  linkUrl: string;
};

type ArchiveBoxConListProps = {
  archiveList: ArchiveListItemType[];
};
const ArchiveBoxConList = ({ archiveList }: ArchiveBoxConListProps) => {
	return (
		
		<div className="archiveBox__con__list">
			<ul>
				<ArchiveBoxConListItem archiveList={archiveList}/>
			</ul>
		</div>
	)
  }
  
  export default ArchiveBoxConList