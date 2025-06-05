
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
	magazineNum: string[];
};
const Archive = ({isMobile} : isMobileProps) => {
	
		const [alphabetGrouped, setAlphabetGrouped] = useState<Record<string, ArchiveListItemType[]>>({});

		const alphabetList = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'etc'];
		const isDev = import.meta.env.DEV;


		//아카이브 데이터
		useEffect(() => {

			const baseUrl = isDev ? '/archiveApi' : 'http://taptap.inpix.com/front/ajax';

			const fetchAllList = async () => {
				try {
					const requests = alphabetList.map(async (char) => {

						const url = `${baseUrl}/tabtabItemList?boardTyp=archive&schTaptapTitle=${char}`;
						const res = await fetch(url);
						const data = await res.json();
					// console.log(data.ITEMLIST)
						return data.ITEMLIST.map((item: any) => ({
							imgSrc: `http://taptap.inpix.com/upload/archive/${item.attPhgsFileNm}`,
							brandTitle: item.brandTitle,
							linkUrl: item.linkUrl,
							magazineNum: [...new Set((item.magazineFkSeq ?? "").split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag !== ""))],
						}));
					});

					const results = await Promise.all(requests);
					const combinedList = results.flat(); 
					
					const alphabetGrouped: Record<string, ArchiveListItemType[]> = {};
					for (const item of combinedList) {
						const firstChar = item.brandTitle?.[0] || '';
						const upperChar = firstChar.toUpperCase();
						const key = /^[A-Z]$/.test(upperChar) ? upperChar.toLowerCase() : 'etc';

						if (!alphabetGrouped[key]) alphabetGrouped[key] = [];
						alphabetGrouped[key].push(item);
					}

					setAlphabetGrouped(alphabetGrouped);
				} catch (err) {
					console.error('아카이브 전체 로딩 실패:', err);
				}
			};

			fetchAllList();
		}, []);
		
		
	return (
		<div id="contents" className="archive contentPages">
			<div className="archiveBox active">

				{!isMobile && <ArchiveBoxLnb alphabetGrouped={alphabetGrouped}/>}
				<ArchiveBoxCon alphabetGrouped={alphabetGrouped}/>

			</div>
		</div>
	)
  }
  
  export default Archive