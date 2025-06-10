import { useEffect , useRef, useState  } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { isMobileProps } from '@/types/IsMobileTypes';


gsap.registerPlugin(ScrollTrigger);

const About = ({isMobile} : isMobileProps) => {
	
	const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
	const headerRef = useRef<HTMLElement | null>(null);
	const headerLogoRef = useRef<HTMLElement | null>(null);
	const killListRef = useRef<ScrollTrigger[]>([]);
	const location = useLocation();

	const [active, setActive] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setActive(true);
		}, 1750);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		killListRef.current.forEach(t => t.kill());
		killListRef.current = [];

		requestAnimationFrame(() => {
			itemRefs.current = Array.from(document.querySelectorAll('.aboutBox__section')) as HTMLDivElement[];;
			headerRef.current = document.querySelector('.header') as HTMLElement;
			headerLogoRef.current = document.querySelector('.header__logo');

			// const header = headerRef.current;
			// const headerLogo = headerLogoRef.current;

			// const headerHeight = header?.offsetHeight || 0;
			// const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

			itemRefs.current.forEach((e) => {
				if (!e) return;
				// const txtcolor = e.dataset.txtcolor;

				// const headerTrigger = ScrollTrigger.create({
				// 	trigger: e,
				// 	start: !isMobile ? `top top+=${headerHeight * 2}` : `top top+=${headerHeight}`,
				// 	end: !isMobile ? `bottom top+=${headerHeight * 2}` : `bottom top+=${headerHeight}`,
				// 	// markers: true,
				// 	onEnter: () => {
				// 		if (header && txtcolor) {
				// 			header.style.color = txtcolor;
				// 			headerLogo?.classList.toggle('white', txtcolor.toLowerCase() === 'white');
				// 		}
				// 	},
				// 	onEnterBack: () => {
				// 		if (header && txtcolor) {
				// 			header.style.color = txtcolor;
				// 			headerLogo?.classList.toggle('white', txtcolor.toLowerCase() === 'white');
				// 			e.classList.add('active');
				// 		}
				// 	},
				// });

				const itemRefsTrigger = ScrollTrigger.create({
					trigger: e,
					start: !isMobile ? `top 50%` : `-20% 50%`,
					// markers: true,
					onEnter: () => e.classList.add('active'),
					onEnterBack: () => {
						e.classList.add('active');
						if (window.scrollY === 0 && e !== itemRefs.current[0]) {
							setTimeout(() => {
								e.classList.remove('active');
								console
							},0);
						}
					},
					onLeave: () => e.classList.remove('active'),
					onLeaveBack: () => e.classList.remove('active'),
				});

				// killListRef.current.push(headerTrigger, itemRefsTrigger);
				killListRef.current.push( itemRefsTrigger);
			});

			
			ScrollTrigger.refresh();
		});

		const handleResize = () => ScrollTrigger.refresh();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			killListRef.current.forEach(t => t.kill());
			killListRef.current = [];
		};
	}, [location.pathname, isMobile]);

	return (
		<div id="contents" className="about contentPages">
			<div className="aboutBox active">
				<div className="aboutBox__section aboutBox__section--1" data-txtcolor="Black" data-bgcolor="white">
					<div className="aboutBox__sectionInner">
						<div className="txtBox">
							<div className="left">
								<p className={active && !isMobile ? 'on' : ''}>인픽스의 트렌드 매거진 탭탭</p>
							</div>
							<div className="right">
								<dl className={active && !isMobile ? 'on' : ''}> 
									<dt>
										{!isMobile ? 
										<>
											<span className='before'>탭탭</span>
											<span className='after'>TAPTAP</span>
										</>
										:
										<span className='after'>TAPTAP</span>
										
										}
									</dt>
									<dd>
										리듬을 타듯 경쾌하게 <br/>
										사람들이 새로운 트렌드와 콘텐츠를<br className="moNone"/>
										두드리고 발견하기를 바랍니다.
									</dd>
								</dl>
							</div>
						</div>
						{!isMobile ? 
						<div className="imgBox">
							<div className="left">
								<img src="/front/images/about/img_about01.png" alt="" />
							</div>
							<div className="right">
								<img src="/front/images/about/img_about02.png" alt="" />
							</div>

						</div>
						:
						<div className="imgBox">
							<img src="/front/images/about/img_about01_mo.png" alt="" />
							<img src="/front/images/about/img_about02_mo.png" alt="" />
						</div>
						}
					</div>
				</div>
				<div className="aboutBox__section aboutBox__section--2" data-txtcolor="White" data-bgcolor="black">
					<div className="aboutBox__sectionInner">
						<div className="txtBox">
							
							{!isMobile && <div className="left"></div>}
							<div className="right">
								<dl>
									<dt className='ani'>
										트렌드가 궁금해 <br/>
										두드리게 되는 탭탭
									</dt>
									<dd className='ani'>
										유용한 정보를 전달하기 위해 다양한 데이터를 분석하고, <br className="moNone"/>
										필요한 콘텐츠가 조화롭게 균형을 이루도록 깊이 고민했습니다.
									</dd>
								</dl>
							</div>
						</div>
					</div>
						
					{!isMobile ? 
					<div className="imgBox">
						<img src="/front/images/about/img_about03.png" alt="" />
					</div>
					:
					<div className="imgBox">
						<img src="/front/images/about/img_about03_mo.png" alt="" />
					</div>
					}
				</div>
				<div className="aboutBox__section aboutBox__section--3" data-txtcolor="black" data-bgcolor="White">
					<div className="aboutBox__sectionInner">
						{!isMobile &&
						<div className="imgBox left">
							<img src="/front/images/about/img_about04.png" alt="" />
						</div>
						}	
						<div className="txtBox right">
							<div className="speechBubbleBox">
								<div className="speechBubble black">
									<p className='ani'>
										버프와 너프가 전하는 재밌는 이야기
									</p>
								</div>
								<div className="speechBubble white">
									<p className='ani'>
										대화형 콘텐츠로<br/>
										재미와 신선함을 전달드립니다
									</p>
								</div>
								
							</div>
							{isMobile &&
							<div className="imgBox">
								<img src="/front/images/about/img_about04.png" alt="" />
							</div>
							}	
							<div className="profileBox">
								<dl>
									<dt>
										<img src="/front/images/about/img_about05.png" alt="" />
									</dt>
									<dd>
										<span>긍정왕 버프</span>
										온라인 게임에서 좋은 효과를 부여해주는 ‘버프(Buff)’라는 <br className="moNone"/>
										이름을 가진 아기곰 캐릭터. 영문 표현과 만연체를 주로 사용합니다.
									</dd>
								</dl>
								<dl>
									<dt>
										<img src="/front/images/about/img_about06.png" alt="" />
									</dt>
									<dd>
										<span>의심왕 너프</span>
										약한 효과를 부여하는 의미인 ‘너프(Nerf)’라는 이름을 가진 <br className="moNone"/>
										두더지 캐릭터 동화체나 어린 아이 같은 말투를 주로 사용합니다.
									</dd>
								</dl>

							</div>
						</div>
					</div>
				</div>
				
				<div className="aboutBox__section aboutBox__section--4" data-txtcolor="black" data-bgcolor="White">
					<div className="aboutBox__sectionInner">
						<div className="textBox">
							<p className="tit ani">인픽스의 진심이 만들어낸 <br className='moBlock'/>매거진 탭탭</p>
							<p className="desc ani">누구나 웹사이트 등 인픽스 채널을 통해 <br className='moBlock'/>구독이 가능합니다.</p>
							<Link to="https://www.inpix.com/newsletter/add" className='ani'>구독하러 가기</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About