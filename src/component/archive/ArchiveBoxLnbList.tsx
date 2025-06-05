

type ArchiveListItemType = {
  imgSrc: string;
  brandTitle: string;
  linkUrl: string;
  magazineNum: string[];
};

type AlphabetGroupedProps = {
  alphabetGrouped: {
    [key: string]: ArchiveListItemType[];
  };
};
const ArchiveBoxConList = ({alphabetGrouped} : AlphabetGroupedProps) => {
	const makeSafeId = (text: string) => text.toLowerCase().replace(/[^a-z0-9]/gi, '-');

	return (
		<>
			{Object.entries(alphabetGrouped).map(([i, item]) => (
				<div key={i} className="archiveBox__lnb__list">
					<p className="archiveBox__lnb__list__tit">{i}</p>

					<div className="archiveBox__lnb__list__item">

						<ul>
								{item.map((item, idx) => (
								<li key={idx}>
									<a
									href="#"
										onClick={(e) => {
											e.preventDefault();
											const el = document.getElementById(makeSafeId(item.brandTitle));
											el?.scrollIntoView({ behavior: 'smooth' });
										}}
									>
									{item.brandTitle}
									</a>


								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</>
	)
  }
  
  export default ArchiveBoxConList