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
  alphabetGrouped: {
    [key: string]: ArchiveListItemType[];
  };
};


export type AlphabetGroupedPropsItems = {
  alphabetGroupedItems: ArchiveListItemType[];
};