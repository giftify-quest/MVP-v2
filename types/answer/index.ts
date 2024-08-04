export interface IAnswerWithOutPicture {
  type: Answer.answerWithOutPicture;
  successText: string;
  secondaryText?: string;
  bgSrc: string;
  bgMobileSrc: string;
}

export interface IAnswerWithPicture {
  type: Answer.answerWithPicture;
  successText: string;
  secondaryText?: string;
  bgSrc: string;
  bgMobileSrc: string;
  framedPhotoSrc: string;
  framedPhotoText?: string;
}

export type TAnswerComponent = IAnswerWithPicture | IAnswerWithOutPicture;

export enum Answer {
  answerWithPicture = "answerWithPicture",
  answerWithOutPicture = "answerWithOutPicture",
}
