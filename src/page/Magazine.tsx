

import MagazineList from '@/component/magazine/MagazineList';

// type isMobileProps = {
// 	isMobile: boolean;
// };


const Magazine = () => {
	return (
		<div id="contents" className="magazine contentPages">
			<div className={"magazineBox active"}>
				<MagazineList />
			</div>
		</div>
	);
};

export default Magazine


