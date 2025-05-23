import { Link } from 'react-router-dom';

type isMobileProps = {
	isMobile?: boolean;
};

const Archive = ({isMobile} : isMobileProps) => {
	console.log('isMobile', isMobile);
	return (
		<div id="contents" className="archive contentPages">
			<div className="archiveBox">
				{!isMobile && 
				<div className="archiveBox__lnb">
					
					<div className="archiveBox__lnb__tit">
						<p>A - Z</p>
					</div>

					<div className="archiveBox__lnb__listBox">
						<div className="archiveBox__lnb__list">
							<p className="archiveBox__lnb__list__tit">A</p>
							<ul>
								<li className="archiveBox__lnb__list__item">
									<ul>
										<li>ARC’TERYX</li>
										<li>A.P.C</li>
										<li>AUDI</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className="archiveBox__lnb__list">
							<p className="archiveBox__lnb__list__tit">A</p>
							<ul>
								<li className="archiveBox__lnb__list__item">
									<ul>
										<li>ARC’TERYX</li>
										<li>A.P.C</li>
										<li>AUDI</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className="archiveBox__lnb__list">
							<p className="archiveBox__lnb__list__tit">A</p>
							<ul>
								<li className="archiveBox__lnb__list__item">
									<ul>
										<li>ARC’TERYX</li>
										<li>A.P.C</li>
										<li>AUDI</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className="archiveBox__lnb__list">
							<p className="archiveBox__lnb__list__tit">A</p>
							<ul>
								<li className="archiveBox__lnb__list__item">
									<ul>
										<li>ARC’TERYX</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className="archiveBox__lnb__list">
							<p className="archiveBox__lnb__list__tit">A</p>
							<ul>
								<li className="archiveBox__lnb__list__item">
									<ul>
										<li>ARC’TERYX</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>

				</div>
				}

				<div className="archiveBox__con">

					<div className="archiveBox__con__tit">
						<p>A</p>
					</div>
					<div className="archiveBox__con__listBox">
						<div className="archiveBox__con__list">
							<ul>
								<li className="archiveBox__con__list__item">
									<div className="archiveBox__con__list__item__img">
										<img src={`/static/front/images/archive/ikea_logo.png`} alt="" />
									</div>
									<div className="archiveBox__con__list__item__txt">
										<dl>
											<dt>IKEA</dt>
											<dd><Link to={"https://www.ikea.com/kr/ko/"}>https://www.ikea.com/kr/ko/</Link></dd>
										</dl>
										<ul className="linkBox">
											<li><Link to={''}>Vol.00</Link></li>
										</ul>
									</div>
								</li>
								<li className="archiveBox__con__list__item">
									<div className="archiveBox__con__list__item__img">
										<img src={`/static/front/images/archive/ikea_logo.png`} alt="" />
									</div>
									<div className="archiveBox__con__list__item__txt">
										<dl>
											<dt>IKEA</dt>
											<dd><Link to={"https://www.ikea.com/kr/ko/"}>https://www.ikea.com/kr/ko/</Link></dd>
										</dl>
										<ul className="linkBox">
											<li><Link to={''}>Vol.00</Link></li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
						<div className="archiveBox__con__list">
							<p className="archiveBox__con__list__tit">B</p>
							<ul>
								<li className="archiveBox__con__list__item">
									<div className="archiveBox__con__list__item__img">
										<img src={`/static/front/images/archive/ikea_logo.png`} alt="" />
									</div>
									<div className="archiveBox__con__list__item__txt">
										<dl>
											<dt>IKEA</dt>
											<dd><Link to={"https://www.ikea.com/kr/ko/"}>https://www.ikea.com/kr/ko/</Link></dd>
										</dl>
										<ul className="linkBox">
											<li><Link to={''}>Vol.00</Link></li>
											<li><Link to={''}>Vol.00</Link></li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
						<div className="archiveBox__con__list">
							<p className="archiveBox__con__list__tit">C</p>
							<ul>
								<li className="archiveBox__con__list__item">
									<div className="archiveBox__con__list__item__img">
										<img src={`/static/front/images/archive/ikea_logo.png`} alt="" />
									</div>
									<div className="archiveBox__con__list__item__txt">
										<dl>
											<dt>IKEA</dt>
											<dd><Link to={"https://www.ikea.com/kr/ko/"}>https://www.ikea.com/kr/ko/</Link></dd>
										</dl>
										<ul className="linkBox">
											<li><Link to={''}>Vol.00</Link></li>
											<li><Link to={''}>Vol.00</Link></li>
											<li><Link to={''}>Vol.00</Link></li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
						<div className="archiveBox__con__list">
							<p className="archiveBox__con__list__tit">ETC</p>
							<ul>
								<li className="archiveBox__con__list__item">
									<div className="archiveBox__con__list__item__img">
										<img src={`/static/front/images/archive/ikea_logo.png`} alt="" />
									</div>
									<div className="archiveBox__con__list__item__txt">
										<dl>
											<dt>IKEA</dt>
											<dd><Link to={"https://www.ikea.com/kr/ko/"}>https://www.ikea.com/kr/ko/</Link></dd>
										</dl>
										<ul className="linkBox">
											<li><Link to={''}>Vol.00</Link></li>
											<li><Link to={''}>Vol.00</Link></li>
											<li><Link to={''}>Vol.00</Link></li>
											<li><Link to={''}>Vol.00</Link></li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>

				</div>

			</div>
		</div>
	)
  }
  
  export default Archive