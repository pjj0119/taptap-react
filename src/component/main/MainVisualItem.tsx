import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

type MainVisualItemType = {
	imgSrc: string;
	volume: number;
	desc: string;
	bgColor: string;
	txtColor: string;
	taptapSeq : number;
	isFirst? : boolean
};


const MainVisualItem = forwardRef<HTMLDivElement, MainVisualItemType>(
	({ imgSrc, volume, desc, bgColor, txtColor , taptapSeq, isFirst }, ref) => {
	return (
		<div
			className={`mainBox__visual__con ${isFirst ? 'isFirst' : ''}`}
			style={{ backgroundColor: bgColor }}
			data-txtcolor={txtColor}
			ref={ref}

		>
			<div className="mainBox__visual__conSticky">
				<div className="mainBox__visual__con__img ani">
					<Link to={`/Magazine/${taptapSeq}`}>
						<img src={imgSrc} alt={`Vol.${volume} 이미지`} />
					</Link>
				</div>
				<div
					className="mainBox__visual__con__desc " 
					style={{ color: txtColor }}
				>
					<Link to={`/Magazine/${taptapSeq}`}>
						<p className="volumeNum ani">Vol.{volume}</p>
						<p
							className="desc ani"
							dangerouslySetInnerHTML={{ __html: desc }}
						/>
					</Link>
				</div>
			</div>
		</div>
		);
	}
);

export default MainVisualItem;
