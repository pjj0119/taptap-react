export type MainVisualItemType = {
    imgSrc: string;
    volume: number;
    desc: string;
    bgColor: string;
    txtColor: string;
    taptapSeq : number;
    isFirst? : boolean
};

export type MainVisualProps = {
    isMobile: boolean;
	listDatas: MainVisualItemType[];
};


export type MainVisualTitleProps = {
	currentIndex?: number;
	totalSlides?: number;
	isMobile?: boolean;
	conTotalNum?: number;
	conIndex?: number;
};