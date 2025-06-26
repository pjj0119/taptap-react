import { forwardRef } from "react";
import { Link } from 'react-router-dom';

const MainViewAllBtn = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<div ref={ref} className="mainBox__visual__viewAllBtn">
			<Link to="/Magazine">View All <span></span></Link>
		</div>
	);
});

MainViewAllBtn.displayName = "MainViewAllBtn";
export default MainViewAllBtn;
