import { IQuestionProps } from "@/types/question";

export interface IQuestionImage {
  bgImage: string;
  title: string;
  questionText: string;
  images: Array<{
    path: string;
    id: string;
    width: number;
    height: number;
    correct: boolean;
  }>;
  buttonText: string;
  wrongAnswerText: string;
  wrongAnswerButtonText: string;
  gift?: string;
  giftText?: string;
}

export interface ImageQuestionProps extends IQuestionProps {
  question: IQuestionImage;
}
