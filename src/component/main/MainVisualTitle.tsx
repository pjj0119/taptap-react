import { forwardRef } from "react";

type MainVisualTitleProps = {
	currentIndex?: number;
	totalSlides?: number;
	isMobile?: boolean;
	conTotalNum?: number;
	conIndex?: number;
};

const MainVisualTitle = forwardRef<HTMLDivElement, MainVisualTitleProps>(
	({ currentIndex, totalSlides, isMobile , conTotalNum , conIndex }, ref) => {
		// console.log(currentIndex)
	return (
		<div className="mainBox__visual__title " ref={ref}>
			<p className="tit ani">
				Magazine <br className="moNone" />TAPTAP
			</p>
			<div className="pageNum ani">

				<span className="on">{isMobile || String(currentIndex) == 'NaN' ? String(currentIndex).padStart(2, '0') : String(conIndex).padStart(2, '0')}</span>
				<span className="slash">/</span>
				<span>{isMobile ? String(totalSlides).padStart(2, '0') : String(conTotalNum).padStart(2, '0')}</span>
			</div>
		</div>
		);
	}
);

export default MainVisualTitle;
