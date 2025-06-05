
export type HeaderProps = {
	isMobile: boolean;
  	isClicked: boolean;
	setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export type LayoutProps = {
  children: React.ReactNode;
  isMobile: boolean;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export type HeaderMoGnbProps = {
    setIsClicked: (isClicked: boolean) => void;
	pageTit?: string;
}

export type pageTitProps = {
	pageTit: string;
};
