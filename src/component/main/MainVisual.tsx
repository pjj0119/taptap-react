
import { useEffect , useRef, useState  } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from 'react-router-dom';



import MainVisualItem from './MainVisualItem';
import MainVisualTitle from './MainVisualTitle';
import MainViewAllBtn from './MainViewAllBtn';
import type { MainVisualProps } from '@/types/MainTypes';

gsap.registerPlugin(ScrollTrigger);

const MainVisual = ({ listDatas }: MainVisualProps) => {

	const titleRef = useRef<HTMLDivElement | null>(null);
	const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
	const headerRef = useRef<HTMLDivElement | null>(null);
	const headerLogoRef = useRef<HTMLDivElement | null>(null);
	const viewBtnRef = useRef<HTMLDivElement | null>(null);
	const footerRef = useRef<HTMLDivElement | null>(null);
	const conIsFirstrRef = useRef<HTMLDivElement | null>(null);
	const [conIndex, setConIndex] = useState(0);
	
  	const location = useLocation();
	
	const viewBtnHandler = () => {

		const viewBtn = document.querySelector('.mainViewAllBtn') as HTMLElement | null;

		if (viewBtn) {
			gsap.set(viewBtn, { clearProps: 'all' });
			viewBtn.classList.remove('noFixed');
		}
	}

	useEffect(() => {
		const killList: ScrollTrigger[] = [];
		const handleResize = () => ScrollTrigger.refresh();
		
		requestAnimationFrame(() => {
			conIsFirstrRef.current = document.querySelector('.mainBox__visual__con.isFirst ');
			headerRef.current = document.querySelector('.header');
			headerLogoRef.current = document.querySelector('.header__logo');
			footerRef.current = document.querySelector('.footer');

			const title = titleRef.current;
			const header = headerRef.current;
			const headerLogo = headerLogoRef.current;
			const viewBtn = viewBtnRef.current;
			const footer = footerRef.current;

			const titleHeight = title?.offsetHeight || 0;
			const titleTop = title?.getBoundingClientRect().top || 0;
			const headerHeight = header?.offsetHeight || 0;
			const viewBtnHeight = viewBtn?.offsetHeight || 0;
			const viewBtnTop = viewBtn?.getBoundingClientRect().top || 0;

			itemRefs.current.forEach((e, i) => {
			if (!e) return;

			const txtcolor = e.dataset.txtcolor;

			title?.classList.add('active');
			setTimeout(() => {
				if (itemRefs.current[0]) {
					itemRefs.current[0]!.classList.add('del0');
				}
			},2500);
			const mainTrigger = ScrollTrigger.create({
				trigger: e,
				start: `top top+=${titleHeight + titleTop * 0.5}`,
				end: `bottom top+=${titleHeight + titleTop * 0.5}`,
				onEnter: () => {
					if (title && txtcolor) title.style.color = txtcolor;
					setConIndex(i + 1);
				},
				onEnterBack: () => {
					if (title && txtcolor) title.style.color = txtcolor;
					setConIndex(i + 1);
				},
			});

			const headerTrigger = ScrollTrigger.create({
				trigger: e,
				start: `top top+=${headerHeight}`,
				// markers: true,
				onEnter: () => {
					if (header && txtcolor) {
						header.style.color = txtcolor;
						headerLogo?.classList.toggle('white', txtcolor.toLowerCase() === 'white');
						e.classList.add('active');
					}
				},
				onEnterBack: () => {
					if (header && txtcolor) {
						header.style.color = txtcolor;
						headerLogo?.classList.toggle('white', txtcolor.toLowerCase() === 'white');
						e.classList.add('active');
					}
				},
				
				onLeave: () => {
					e.classList.remove('active');
				},

				onLeaveBack: () => {
					e.classList.remove('active');
				},
			});

			const viewBtnTrigger = ScrollTrigger.create({
				trigger: e,
				start: `top top+=${viewBtnHeight + viewBtnTop}`,
				end: `bottom top+=${viewBtnHeight + viewBtnTop}`,
				markers: false,
				onEnter: () => {
				if (viewBtn && txtcolor) {
					viewBtn.style.color = txtcolor;
					viewBtn.querySelector('span')?.classList.toggle('white', txtcolor.toLowerCase() === 'white');
				}
				},
				onEnterBack: () => {
				if (viewBtn && txtcolor) {
					viewBtn.style.color = txtcolor;
					viewBtn.querySelector('span')?.classList.toggle('white', txtcolor.toLowerCase() === 'white');
				}
				},
			});

			const unfixBtnTrigger = ScrollTrigger.create({
				trigger: footer,
				start: `top bottom-=30`,
				end: `top bottom-=30`,
				onEnter: () => viewBtn?.classList.add('noFixed'),
				onEnterBack: () => viewBtn?.classList.remove('noFixed'),
			});

			killList.push(mainTrigger, headerTrigger, viewBtnTrigger, unfixBtnTrigger);
			
			});

			window.addEventListener('resize', () => {
				handleResize();
				viewBtnHandler();
			});
			ScrollTrigger.refresh();
		});

		return () => {
			killList.forEach(t => t.kill());
			viewBtnHandler();
			window.removeEventListener('resize', () => {
				handleResize();
				viewBtnHandler();
			});

		};
	}, [listDatas?.length, location.pathname]);


	return (
		<div className="mainBox__visual">
			<MainVisualTitle ref={titleRef} conTotalNum={itemRefs.current?.length} conIndex={conIndex}/>

			{listDatas?.map((item, i) => (
				<MainVisualItem
					key={i}
					imgSrc={item.imgSrc}
					volume={item.volume}
					desc={item.desc}
					bgColor={item.bgColor}
					txtColor ={item.txtColor}
					ref={(e) => {itemRefs.current[i] = e}}
					taptapSeq = {item.taptapSeq}
					isFirst={i === 0}
				/>
			))}

			<MainViewAllBtn ref={viewBtnRef}/>
		</div>
	);
};

export default MainVisual;
