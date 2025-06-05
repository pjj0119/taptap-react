
import { useEffect, useState } from 'react';

import MainVisualSwiper from '@/component/main/MainVisualSwiper';
import MainVisual from '@/component/main/MainVisual';
import type { isMobileProps } from '@/types/IsMobileTypes';
import type { MainVisualItemType } from '@/types/MainTypes';



const Main = ({ isMobile }: isMobileProps) => {

	const [magazineList, setMagazineList] = useState<MainVisualItemType[]>([]);
	useEffect(() => {
		const fetchListData = async () => {
			try {
				const isDev = import.meta.env.DEV;

				const url = isDev
					? '/magazineApi/tabtabItemList?boardTyp=taptap'
  					: 'http://taptap.inpix.com/front/ajax/tabtabItemList?boardTyp=taptap';

				
				const res = await fetch(url, {
					method: 'GET',
				});

				const data = await res.json();
				
				const list = data.ITEMLIST.slice(0,3).map((list: any) => ({
					volume: list.postNum,
					desc: list.title,
					imgSrc: `http://taptap.inpix.com/upload/magazine/${list.attPhgsFileNm}`,
					bgColor: list.bgColor,
					txtColor: list.txtColor,
					taptapSeq : list.taptapSeq ,
				}));
				setMagazineList(list);
			} catch (err) {
				console.error('실패:', err);
			}
		};

		fetchListData();
	}, []);

	return (
		<div id="contents" className="main">
			<div className="mainBox ani">
				{!isMobile && <MainVisual listDatas={magazineList} isMobile={isMobile}/>}
				{isMobile && <MainVisualSwiper isMobile={isMobile} listDatas={magazineList} />}
			</div>
		</div>
	);
};

export default Main;
