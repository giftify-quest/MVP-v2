import { IQuestionProps } from "@/types/question";

export interface IQuestionVariant {
  bgImage: string;
  bgMobile: string;
  questionText: string;
  answers: Array<{
    id: string;
    text: string;
    isCorrect: boolean;
  }>;
  buttonText: string;
  wrongAnswerText: string;
  wrongAnswerButtonText: string;
  gift?: string;
  giftText?: string;
  multipleAnswer: boolean;
}

export interface VariantQuestionProps extends IQuestionProps {
  question: IQuestionVariant;
}
