export interface TitleProps {
  mainText: string;
  secondaryText: string;
  thirdText: string;
}

export interface TitlePhotoProps {
  imgSrc: string;
  dateEvent: string;
}

export interface ISectionFirst {
  titlePhoto: TitlePhotoProps;
  title: TitleProps;
  bgImg: string;
  buttonTitle: string;
}