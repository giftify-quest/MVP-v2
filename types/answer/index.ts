export interface IAnswerWithOutPicture {
  successText: string;
  secondaryText?: string;
  bgSrc: string;
  bgMobileSrc: string;
}

export interface IAnswerWithPicture {
  successText: string;
  secondaryText?: string;
  bgSrc: string;
  bgMobileSrc: string;
  framedPhotoSrc: string;
  framedPhotoText: string;
}
