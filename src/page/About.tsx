import { useEffect , useRef  } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger);

type isMobileProps = {
	isMobile: boolean;
};

const About = ({isMobile} : isMobileProps) => {
	
	const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
	const headerRef = useRef<HTMLDivElement | null>(null);
	const headerLogoRef = useRef<HTMLDivElement | null>(null);
	const killListRef = useRef<ScrollTrigger[]>([]);
	const location = useLocation();

	const headerHandler = () => {
		killListRef.current.forEach(t => t.kill()); 
		killListRef.current = [];
		const header = document.querySelector('.header') as HTMLElement | null;
		const headerLogo = document.querySelector('.header__logo') as HTMLElement | null;

		if (header) {
			gsap.set(header, { clearProps: 'all' });
		}
		if (headerLogo) {
			headerLogo.classList.remove('white');
		}
	}

	useEffect(() => {
		killListRef.current.forEach(t => t.kill());
		killListRef.current = [];
		const handleResize = () => ScrollTrigger.refresh();

		requestAnimationFrame(() => {
			itemRefs.current = Array.from(document.querySelectorAll('.aboutBox__section')) as HTMLDivElement[];;
			headerRef.current = document.querySelector('.header');
			headerLogoRef.current = document.querySelector('.header__logo');

			const header = headerRef.current;
			const headerLogo = headerLogoRef.current;

			const headerHeight = header?.offsetHeight || 0;

			itemRefs.current.forEach((e) => {
				console.log(e);
			if (!e) return;

			const txtcolor = e.dataset.txtcolor;


			const headerTrigger = ScrollTrigger.create({
				trigger: e,
				start: `top top+=${headerHeight / 2}`,
				end: `bottom top+=${headerHeight / 2}`,
				markers: false,
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

			killListRef.current.push(headerTrigger);
			});

			
			window.addEventListener('resize', () => {
				handleResize();
				headerHandler();
			});
			ScrollTrigger.refresh();
		});

		return () => {
			
			window.removeEventListener('resize', () => {
				handleResize();
				headerHandler();
			});
			

		};
	}, [ location.pathname]);

	return (
		<div id="contents" className="about contentPages">
			<div className="aboutBox">
				<div className="aboutBox__section aboutBox__section--1" data-txtcolor="Black" data-bgcolor="white">
					<div className="aboutBox__sectionInner">
						<div className="txtBox">
							<div className="left">
								<p>인픽스의 트렌드 매거진 탭탭</p>
							</div>
							<div className="right">
								<dl>
									<dt>TAPTAP</dt>
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
									<dt>
										트렌드가 궁금해 <br/>
										두드리게 되는 탭탭
									</dt>
									<dd>
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
									<p>
										버프와 너프가 전하는 재밌는 이야기
									</p>
								</div>
								<div className="speechBubble white">
									<p>
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
							<p className="tit">인픽스의 진심이 만들어낸 <br className='moBlock'/>매거진 탭탭</p>
							<p className="desc">누구나 웹사이트 등 인픽스 채널을 통해 <br className='moBlock'/>구독이 가능합니다.</p>
							<Link to="https://www.inpix.com/newsletter/add">구독하러 가기</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About