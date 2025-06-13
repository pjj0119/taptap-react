
import { useEffect, useState } from 'react';
import ArchiveBoxLnb from '../component/archive/ArchiveBoxLnb'
import ArchiveBoxCon from '../component/archive/ArchiveBoxCon'
import type { ArchiveListItemType } from '@/types/ArchiveTypes';
import type { isMobileProps } from '@/types/IsMobileTypes';


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

						return data.ITEMLIST.map((item: any) => ({
							imgSrc: `http://taptap.inpix.com/upload/archive/${item.attPhgsFileNm}`,
							brandTitle: item.brandTitle,
							linkUrl: item.linkUrl,
							magazineNum: [...new Set((item.magazineFkSeq ?? '').split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag !== ''))],
							postNums: (item.connectedMagazines ?? []).filter((magazine: any) => magazine && magazine.postNum != null).map((magazine: any) => magazine.postNum),


						}));
					});

					const results = await Promise.all(requests);


					const grouped: Record<string, ArchiveListItemType[]> = {};

					alphabetList.forEach((char, i) => {
						const data = results[i];

						//해당 알파벳 안에 내용 오름차순
						const dataSubstring = Array.isArray(data)
						? data.sort((a, b) => {
							const aChar = a.brandTitle?.substring(1) || '';
							const bChar = b.brandTitle?.substring(1) || '';
							return aChar.localeCompare(bChar);
							})
						: [];

						//해당 알파벳 내용이 없는 배열 넣기
						// grouped[char.toLowerCase()] = Array.isArray(data) ? dataSubstring : [];

						//해당 알파벳 내용이 없는 배열 빼기
						if (Array.isArray(data) && data.length > 0) {
							grouped[char.toLowerCase()] = dataSubstring;
						}
					});
					// console.log(grouped)
					setAlphabetGrouped(grouped);
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