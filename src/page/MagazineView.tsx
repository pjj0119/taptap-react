import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { isMobileProps } from '@/types/IsMobileTypes';
import type { MagazineViewData, MagazineViewImage } from '@/types/MagazineViewTypes';

gsap.registerPlugin(ScrollTrigger);



export default function MagazineView({ isMobile }: isMobileProps) {
  const { pageNum } = useParams();
  const navigate = useNavigate();

  const [magazineView, setMagazineView] = useState<MagazineViewData | null>(null);
  const [magazineViewImg, setMagazineViewImg] = useState<MagazineViewImage | null>(null);

  const flxbarBox = useRef<HTMLDivElement>(null);
  const flxbarTitBox = useRef<HTMLDivElement>(null);
  const titBoxSticky = useRef<HTMLDivElement>(null);
  const titBoxStickyInfo= useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const viewnBox = useRef<HTMLDivElement>(null);

  const formatDate = (date: Date): string => {
	const yy = date.getFullYear();
	const mm = String(date.getMonth() + 1).padStart(2, '0');
	const dd = String(date.getDate()).padStart(2, '0');
	return `${yy}.${mm}.${dd}`;
  };
  

  useEffect(() => {
	if (!pageNum) return;

	const fetchData = async () => {
	  try {
		const isDev = import.meta.env.DEV;

		const url = isDev
		  ? '/magazineApi/tabtabItemList?boardTyp=taptap'
		  : 'https://taptap.inpix.com/front/ajax/tabtabItemList?boardTyp=taptap';

		const res = await fetch(url, {
			method: 'GET',
		});

		const data = await res.json();

		const list = data.ITEMLIST.find(
		  (item: any) => String(item.taptapSeq) === String(pageNum)
		);
		const viewImg = data.VIEWLIST.find(
		  (item: any) => String(item.taptapFkSeq) === String(pageNum)
		);

		if (!list || !viewImg) {
		  console.warn('해당 페이지 데이터 없음:', pageNum);
		  navigate('/Magazine', { replace: true });
		  return;
		}

		setMagazineView({
		  postNum: list.postNum,
		  title: list.title,
		  hashTags: [...new Set(
			String(list.hashTag ?? '')
			  .split(',')
			  .map(tag => tag.trim())
			  .filter(Boolean)
		  )],
		});

		setMagazineViewImg({
		  imgUrl: `https://taptap.inpix.com/upload/magazine/${viewImg.attachmentPhgsFileNm}`,
		  regDtm: new Date(viewImg.regDtm),
		});
	  } catch (err) {
		console.error('뷰페이지 API 호출 실패:', err);
		navigate('/Magazine', { replace: true });
	  }
	};

	fetchData();
  }, [pageNum, navigate]);

	useEffect(() => {
		headerRef.current = document.querySelector('.header');
		if (!headerRef.current) return;

		const updateLayout = () => {
			const headerHeight = headerRef.current?.offsetHeight || 0;
			const titBoxStickyInfoHeight = titBoxStickyInfo.current?.offsetHeight || 0;

			if (titBoxSticky.current) {
			titBoxSticky.current.style.paddingTop = `${headerHeight}px`;
			}
			if (flxbarTitBox.current) {
			flxbarTitBox.current.style.top = `${headerHeight}px`;
			}

			// 기존 트리거 모두 제거 후 새로 생성
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());

			ScrollTrigger.create({
			trigger: titBoxSticky.current,
			start: `top+=${headerHeight} top+=${headerHeight}`,
			onEnter: () => {
				if (viewnBox.current) {
				viewnBox.current.style.marginTop = `-${titBoxStickyInfoHeight - 100}px`;
				viewnBox.current.classList.add('on');
				}
				titBoxStickyInfo.current?.classList.add('on');
				flxbarTitBox.current?.classList.add('on');
				flxbarBox.current?.classList.add('on');
			},
			onLeaveBack: () => {
				if (viewnBox.current) {
				viewnBox.current.style.marginTop = "0";
				viewnBox.current.classList.remove('on');
				}
				titBoxStickyInfo.current?.classList.remove('on');
				flxbarTitBox.current?.classList.remove('on');
				flxbarBox.current?.classList.remove('on');
			},
			});
		};

		if (!isMobile) {
			updateLayout();

			window.addEventListener('resize', updateLayout);

			return () => {
			window.removeEventListener('resize', updateLayout);
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
			};
		}
	}, [magazineView]);



  if (!magazineView) return null;

  return (
	<div id="contents" className="magazine">
	  <div className={`magazineBox active ani`}>
		
		<div className="magazineBox__sticky" ref={titBoxSticky}>
			{!isMobile && (
				<div className="magazineBox__sticky__info " ref={titBoxStickyInfo}>
					<div>
					<p className="tit">{magazineView.title}</p>
					{Array.isArray(magazineView.hashTags) && magazineView.hashTags.length > 0 && (
						<ul className="hash">
							{magazineView.hashTags.map((tag, i) => (
							<li key={i}>#{tag}</li>
							))}
						</ul>
					)}
					</div>


				</div>
			)}
			<div className="magazineBox__sticky__infoFix" ref={flxbarBox}>
				<div className="flex">
					<div className="magazineBox__sticky__infoFix__left">
						<div className="vol"> Vol.{magazineView.postNum}</div>
					{magazineViewImg && (
						<div className="date">{formatDate(magazineViewImg.regDtm)}</div>
					)}
					</div>
					<div className="magazineBox__sticky__infoFix__right">
					<Link to="/Magazine" className="listBtn">목록보기</Link>
					</div>
				</div>
			</div>
			{!isMobile && (
				<div className="magazineBox__sticky__infoFix magazineBox__sticky__infoFix--tit" ref={flxbarTitBox}>
					<div className="flex">
						<div className="magazineBox__sticky__infoFix__left">
							<div className="vol"> {magazineView.title}</div>
						</div>
						<div className="magazineBox__sticky__infoFix__right">
						<Link to="/Magazine" className="listBtn">목록보기</Link>
						</div>
					</div>
				</div>
			)}
		</div>
		<div className="magazineBox__view" ref={viewnBox}>
		  {magazineViewImg && (
			<div className="magazineBox__view__con">
			  <div className="magazineBox__view__con__img">
				<img src={magazineViewImg.imgUrl} alt="" />
				
			  </div>
			  <div className="magazineBox__view__con__topBtn">
				<button type="button" onClick={() => window.scrollTo({ top: 0 })}>
				  <span><img src={`/front/images/common/ico_topBtn_wt.png`} alt="위로" /></span>
				</button>
			  </div>
			</div>
		  )}
		</div>
	  </div>
	</div>
  );
}
