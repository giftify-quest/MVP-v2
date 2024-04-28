export interface IAnswerWithOutPicture {
  bgImage: string;
  successText: string;
  secondaryText?: string;
  bgSrcAnswer: string;
}

export interface IAnswerWithPicture {
  successText: string;
  secondaryText?: string;
  bgSrc: string;
  framedPhotoSrc: string;
}

export interface IQuestionProps {
  onReady: () => void;
}