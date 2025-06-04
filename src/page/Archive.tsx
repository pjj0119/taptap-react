
import { useEffect, useState } from 'react';
import ArchiveBoxLnb from '../component/archive/ArchiveBoxLnb'
import ArchiveBoxCon from '../component/archive/ArchiveBoxCon'


type isMobileProps = {
	isMobile: boolean;
};


type ArchiveListItemType = {
	imgSrc: string;
	brandTitle: string;
	linkUrl: string;
};
// type MagazineListListItemType = {
// 	imgSrc: string;
// 	brandTitle: string;
// 	linkUrl: string;
// };
const Archive = ({isMobile} : isMobileProps) => {
	
		const [archiveList, setArchiveList] = useState<ArchiveListItemType[]>([]);
		// const [magazineList, setMagazineList] = useState<MagazineListListItemType[]>([]);

		//아카이브 데이터
		useEffect(() => {
			const fetchListData = async () => {
				try {
					const isDev = import.meta.env.DEV;
	
					const url = isDev
						? '/archiveApi/tabtabItemList?boardTyp=archive'
						: 'http://taptap.inpix.com/front/ajax/tabtabItemList?boardTyp=archive';
	
					const res = await fetch(url, {
						method: 'GET',
					});
	
					const data = await res.json();
					
					const archiveList = data.ITEMLIST.map((archiveList: any) => ({
						imgSrc: `http://taptap.inpix.com/upload/archive/${archiveList.attPhgsFileNm}`,
						brandTitle : archiveList.brandTitle,
						linkUrl : archiveList.linkUrl,
					}));
					
					setArchiveList(archiveList);
				} catch (err) {
					console.error('실패:', err);
				}
			};
	
			fetchListData();
		}, []);
		
		// 매거진 데이터
		// useEffect(() => {
		// 	const fetchListData = async () => {
		// 		try {
		// 			const isDev = import.meta.env.DEV;
					
		// 			const url = isDev
		// 				? '/api/loadAjaxData.do'
		// 				: 'http://taptap.inpix.com/front/ajax/tabtabItemList?boardTyp=taptap';

					
		// 			const res = await fetch(url, isDev ? {
		// 				method: 'POST',
		// 				body: JSON.stringify({}),
		// 				} : {
		// 				method: 'GET'
		// 			});
	
		// 			const data = await res.json();
		// 			console.log('data', data);
					
		// 			const magazineList = data.ITEMLIST.map((magazineList: any) => ({
		// 				imgSrc: `http://taptap.inpix.com/upload/${magazineList.attPhgsFileNm}`,
		// 				brandTitle : magazineList.brandTitle,
		// 				linkUrl : magazineList.linkUrl,
		// 			}));
					
		// 			setMagazineList(magazineList);
		// 		} catch (err) {
		// 			console.error('실패:', err);
		// 		}
		// 	};
	
		// 	fetchListData();
		// }, []);
	
	return (
		<div id="contents" className="archive contentPages">
			<div className="archiveBox active">

				{!isMobile && <ArchiveBoxLnb />}
				<ArchiveBoxCon archiveList={archiveList}/>

			</div>
		</div>
	)
  }
  
  export default Archive