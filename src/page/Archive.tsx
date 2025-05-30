
// import { useEffect, useState } from 'react';
import ArchiveBoxLnb from '../component/archive/ArchiveBoxLnb'
import ArchiveBoxCon from '../component/archive/ArchiveBoxCon'


type isMobileProps = {
	isMobile: boolean;
};

// type ArchiveListItemType = {
// 	volume: number;
// 	desc: string;
// 	imgSrc: string;
// 	bgColor: string;
// 	txtColor : string;
// 	taptapSeq : number ;
// };

const Archive = ({isMobile} : isMobileProps) => {
	
		// const [archiveList, setArchiveList] = useState<ArchiveListItemType[]>([]);

		// //아카이브 데이터
		// useEffect(() => {
		// 	const fetchListData = async () => {
		// 		try {
		// 			const isDev = import.meta.env.DEV;
	
		// 			const url = isDev
		// 				? '/archiveApi/tabtabItemList?boardTyp=archive'
		// 				: 'http://taptap.inpix.com/front/ajax/tabtabItemList?boardTyp=archive';
	
		// 			const res = await fetch(url, {
		// 				method: 'GET',
		// 			});
	
		// 			const data = await res.json();
		// 			console.log('data', data);
					
		// 			const list = data.ITEMLIST.map((list: any) => ({
		// 				volume: list.postNum,
		// 				desc: list.title,
		// 				imgSrc: `http://taptap.inpix.com/upload/${list.attPhgsFileNm}`,
		// 				bgColor: list.bgColor,
		// 				txtColor: list.txtColor,
		// 				taptapSeq : list.taptapSeq ,
		// 			}));
		// 			setArchiveList(list);
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
				<ArchiveBoxCon />

			</div>
		</div>
	)
  }
  
  export default Archive