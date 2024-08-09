export interface TitleProps {
  mainText: string;
  secondaryText: string;
  thirdText?: string;
}

export interface TitlePhotoProps {
  imgSrc: string;
  dateEvent: string;
  dateYears?: string;
}

export interface ISectionFirst {
  id: string;
  nextId: string;
  titlePhoto: TitlePhotoProps;
  title: TitleProps;
  bgImg: string;
  buttonTitle: string;
  bgMobileSrc: string;
}

export interface ISectionFirstProps extends ISectionFirst {
  onAllowNextSlide?: () => void;
}
