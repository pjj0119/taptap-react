import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { MagazineListItemType } from '@/types/MagazineListTypes';

const MagazineListItem = () => {
	
	// 데이터 블러오기
	const [magazineList, setMagazineList] = useState<MagazineListItemType[]>([]);
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

				const list = data.ITEMLIST.map((list: any) => ({
					postNum: list.postNum,
					title: list.title,
					imgUrl: `http://taptap.inpix.com/upload/magazine/${list.attPhgsFileNm}`,
					hashTags: [...new Set(list.hashTag.split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag !== ""))],
					pageNum: list.taptapSeq,
				}));
				setMagazineList(list);
			} catch (err) {
				console.error('실패:', err);
			}
		};

		fetchListData();
	}, []);

	// 스크롤시 리스트 5개씩 보이기
	const [visibleCount, setVisibleCount] = useState(5);
	const visibleList = magazineList.slice(0, visibleCount);
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const windowHeight = window.innerHeight;
			const docHeight = document.documentElement.offsetHeight;

			if (scrollTop + windowHeight >= docHeight - 100) {
				setVisibleCount(prev => {
					const next = prev + 5;
					return next > magazineList.length ? magazineList.length : next;
				});
			}
		};
		

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [magazineList]);

	
	useEffect(() => {
		if (magazineList.length > 0 && visibleCount === 0) {
			setVisibleCount(5); 
		}
	}, [magazineList]);

	return (
		<ul>
			{visibleList.map((item) => (
				<li className="magazineBox__list__item" key={item.pageNum}>
					<Link to={`/Magazine/${item.pageNum}`}>
						<div className="magazineBox__list__item__con magazineBox__list__item__con--left">
							<p className="num">Vol.{item.postNum}</p>
							<p className="tit">{item.title}</p>
							{item.hashTags.length > 0 && (
								<ul className="hash">
									{item.hashTags.map((hashTag, i) => (
										<li key={i}>#{hashTag}</li>
									))}
								</ul>
							)}
						</div>
						<div className="magazineBox__list__item__con magazineBox__list__item__con--right">
							<div className="img-box">
								<img src={item.imgUrl} alt="" />

							</div>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default MagazineListItem;
