

import { useRef, useState } from 'react';
import MainVisualItem from './MainVisualItem';
import MainVisualTitle from './MainVisualTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import type { MainVisualProps } from '@/types/MainTypes';



const MainVisualSwiper = ({ isMobile, listDatas }: MainVisualProps) => {
	const swiperRef = useRef<any>(null);
	const [currentIndex, setCurrentIndex] = useState(1);
	const updateHeaderClass = (swiper: any) => {
		const header = document.querySelector('.header__logo');
		const title = document.querySelector('.mainBox__visual__title ');
		if (!header || !title) return;
		

		const activeSlide = swiper.slides[swiper.activeIndex];
		const hasWhiteText = !!activeSlide?.querySelector('[data-txtcolor="White"]');
		header.classList.toggle('white', hasWhiteText);
		
		// title.classList.toggle('white', hasWhiteText);
		const vol = listDatas?.[swiper.realIndex];
		const vol7 = Number(vol?.volume) === 7;
		title.classList.toggle('white', hasWhiteText || vol7);

	};
	return (
		<div className="mainBox__visual">


			<MainVisualTitle isMobile={isMobile} currentIndex={currentIndex} totalSlides={listDatas?.length} />


			<Swiper
				modules={[Autoplay]}
				slidesPerView={1}
				loop={true}
				autoplay={{ delay: 3000 }}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
					updateHeaderClass(swiper); // 초기화 시에도 반영
				}}
				onSlideChange={(swiper) => {
					setCurrentIndex(swiper.realIndex + 1);// 현재 페이지
    				updateHeaderClass(swiper);
				}}
			>
				{listDatas?.map((item, i) => (
					<SwiperSlide key={i}>
						<MainVisualItem
							imgSrc={item.imgSrc}
							volume={item.volume}
							desc={item.desc}
							bgColor={item.bgColor}
							txtColor ={item.txtColor}
							taptapSeq = {item.taptapSeq}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default MainVisualSwiper