import { IQuestionProps } from "@/types/question";

export interface IQuestionWithFreeInput {
  bgSrcQuestion: string;
  bgMobile: string;
  questionText: string;
  buttonTitle: string;
  errorMessage: string;
  answers: string | string[];
}

export interface IQuestionWithFreeInputProps extends IQuestionProps {
  question: IQuestionWithFreeInput;
}
