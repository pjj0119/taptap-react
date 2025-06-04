
import { useEffect, useState } from 'react';

import MainVisualSwiper from '@/component/main/MainVisualSwiper';
import MainVisual from '@/component/main/MainVisual';

type isMobileProps = {
	isMobile?: boolean;
};
type MainVisualItemType = {
	volume: number;
	desc: string;
	imgSrc: string;
	bgColor: string;
	txtColor : string;
	taptapSeq : number ;
};

const Main = ({ isMobile }: isMobileProps) => {

	const [magazineList, setMagazineList] = useState<MainVisualItemType[]>([]);
	useEffect(() => {
		const fetchListData = async () => {
			try {
				const isDev = import.meta.env.DEV;

				const url = isDev
					? '/api/loadAjaxData.do'
  					: 'http://taptap.inpix.com/front/ajax/tabtabItemList?boardTyp=taptap';

				const res = await fetch(url, isDev ? {
					method: 'POST',
					body: JSON.stringify({}),
					} : {
					method: 'GET'
				});

				const data = await res.json();
				
				const list = data.ITEMLIST.slice(0,3).map((list: any) => ({
					volume: list.postNum,
					desc: list.title,
					imgSrc: `http://taptap.inpix.com/upload/${list.attPhgsFileNm}`,
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
				{!isMobile && <MainVisual listDatas={magazineList} />}
				{isMobile && <MainVisualSwiper isMobile={isMobile} listDatas={magazineList} />}
			</div>
		</div>
	);
};

export default Main;
