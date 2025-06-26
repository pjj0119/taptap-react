
import { useEffect , useRef, useState  } from 'react';
import ArchiveBoxConList from './ArchiveBoxConList'
import type { AlphabetGroupedProps } from '@/types/ArchiveTypes';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const ArchiveBoxCon = ({ alphabetGrouped }: AlphabetGroupedProps) => {
	
	const alphabetTriggerRef = useRef<(HTMLDivElement | null)[]>([]);
	const alphabetTitRefs = useRef<HTMLDivElement | null>(null);
	const [alphabet, setAlphabet] = useState("A");
	
	useEffect(() => {
		const killList: ScrollTrigger[] = [];
		const handleResize = () => ScrollTrigger.refresh();
		
		requestAnimationFrame(() => {



			alphabetTriggerRef.current.forEach((e) => {
			if (!e) return; 
			// const archiveBoxConListStyle = window.getComputedStyle(e);
			// const archiveBoxConListpaddingTop = parseFloat(archiveBoxConListStyle.paddingTop);


			const alphabetTrigger = ScrollTrigger.create({
				trigger: e,
				// start: `top+=${archiveBoxConListpaddingTop} top`,
				// end: `bottom+=${archiveBoxConListpaddingTop * 2} top`,
				start: `top+=80 top`,
				end: `bottom+=160 top`,
				scroller: '.archiveBox__con__listBox',
				// markers: true,
				onEnter: () => {
					setAlphabet(e.querySelector('.archiveBox__con__list__tit')?.textContent?.trim() || 'A');
				},
				onEnterBack: () => {
					setAlphabet(e.querySelector('.archiveBox__con__list__tit')?.textContent?.trim() || 'A');
				},
			});

			killList.push(alphabetTrigger);
			
			});

			window.addEventListener('resize', () => {
				handleResize();
			});
			ScrollTrigger.refresh();
		});

		return () => {
			killList.forEach(t => t.kill());
			window.removeEventListener('resize', () => {
				handleResize();
			});

		};
	}, [alphabetGrouped]);
	return (
		
		<div className="archiveBox__con">

			<div className="archiveBox__con__tit" >
				<p ref={alphabetTitRefs}>{alphabet}</p>
			</div>
			<div className="archiveBox__con__listBox">
				<ArchiveBoxConList alphabetGrouped={alphabetGrouped} alphabetTriggerRef={alphabetTriggerRef}/>
			</div>

		</div>
	)
  }
  
  export default ArchiveBoxCon