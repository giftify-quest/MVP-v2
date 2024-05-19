import { IQuestionProps } from "@/types/question";

export interface Images {
  path: string;
  id: string;
  correct: boolean;
}

export interface IQuestionImage {
  bgImage: string;
  bgMobile: string;
  title: string;
  questionText: string;
  images: Images[];
  buttonText: string;
  wrongAnswerText: string;
  wrongAnswerButtonText: string;
  gift?: string;
  giftText?: string;
}

export interface ImageQuestionProps extends IQuestionProps {
  question: IQuestionImage;
}
