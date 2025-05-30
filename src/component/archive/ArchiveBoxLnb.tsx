
import ArchiveBoxLnbList from './ArchiveBoxLnbList'

const ArchiveBoxLnb = () => {
	
	return (
		
		<div className="archiveBox__lnb">
			
			<div className="archiveBox__lnb__tit">
				<p>A - Z</p>
			</div>

			<div className="archiveBox__lnb__listBox">

				<ArchiveBoxLnbList />
				
			</div>

		</div>
	)
  }
  
  export default ArchiveBoxLnb