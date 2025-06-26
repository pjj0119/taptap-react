export type ArchiveListItemType = {
  imgSrc: string;
  brandTitle: string;
  linkUrl: string;
  magazineNum: string[];
  postNums: string[];
};

export type AlphabetGroupedType = {
  [key: string]: ArchiveListItemType[];
};


export type AlphabetGroupedProps = {
  alphabetGrouped: AlphabetGroupedType;
};

export type AlphabetGroupedPropsItems = {
  alphabetGroupedItems: ArchiveListItemType[];
};