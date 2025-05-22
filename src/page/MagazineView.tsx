import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type isMobileProps = {
  isMobile?: boolean;
};

type MagazineViewData = {
  hashTags?: string[];
  title: string;
  postNum: number;
};

type MagazineViewImage = {
  imgUrl: string;
  regDtm: Date;
};

export default function MagazineView({ isMobile }: isMobileProps) {
  const { pageNum } = useParams();
  const navigate = useNavigate();

  const [magazineView, setMagazineView] = useState<MagazineViewData | null>(null);
  const [magazineViewImg, setMagazineViewImg] = useState<MagazineViewImage | null>(null);

  const triggerBox = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement | null>(null);

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
		  ? '/api/loadAjaxData.do'
		  : 'http://taptap.inpix.com/taptap/loadAjaxData.do';

		const res = await fetch(url, {
		  method: 'POST',
		  body: JSON.stringify({}),
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
		  imgUrl: `http://taptap.inpix.com/upload/${viewImg.attachmentPhgsFileNm}`,
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
	if (!triggerBox.current || !headerRef.current) return;

	const headerHeight = headerRef.current.offsetHeight;

	ScrollTrigger.create({
	  trigger: triggerBox.current,
	  start: `top top+=${headerHeight}`,
	  onEnter: () => {
		triggerBox.current?.classList.add('fixed');
		gsap.set(triggerBox.current, {
		  position: 'fixed',
		  top: headerHeight,
		  left: 0,
		  right: 0,
		  margin: 'auto',
		  width: '100%',
		  zIndex: 999,
		  backgroundColor: '#fff',
		});
	  },
	  onLeaveBack: () => {
		triggerBox.current?.classList.remove('fixed');
		gsap.set(triggerBox.current, { clearProps: 'all' });
	  },
	});

	const handleResize = () => ScrollTrigger.refresh();
	window.addEventListener('resize', handleResize);
	return () => window.removeEventListener('resize', handleResize);
  }, [magazineView]);

  if (!magazineView) return null;

  return (
	<div id="contents" className="magazine">
	  <div className="magazineBox">
		<div className="magazineBox__view">
		  {!isMobile && (
			<div className="magazineBox__view__info">
			  <p className="tit">{magazineView.title}</p>
			  {Array.isArray(magazineView.hashTags) && magazineView.hashTags.length > 0 && (
					<ul className="hash">
						{magazineView.hashTags.map((tag, i) => (
						<li key={i}>#{tag}</li>
						))}
					</ul>
				)}


			</div>
		  )}
		  <div className="magazineBox__view__infoFix" ref={triggerBox}>
			<div className="magazineBox__view__infoFix__left">
			  <div className="vol">Vol.{magazineView.postNum}</div>
			  {magazineViewImg && (
				<div className="date">{formatDate(magazineViewImg.regDtm)}</div>
			  )}
			</div>
			<div className="magazineBox__view__infoFix__right">
			  <Link to="/Magazine" className="listBtn">목록보기</Link>
			</div>
		  </div>
		  {magazineViewImg && (
			<div className="magazineBox__view__con">
			  <div className="magazineBox__view__con__img">
				<img src={magazineViewImg.imgUrl} alt="" />
			  </div>
			  <div className="magazineBox__view__con__topBtn">
				<button type="button" onClick={() => window.scrollTo({ top: 0 })}>
				  <span><img src={`/static/front/images/common/ico_topBtn_wt.png`} alt="위로" /></span>
				</button>
			  </div>
			</div>
		  )}
		</div>
	  </div>
	</div>
  );
}
