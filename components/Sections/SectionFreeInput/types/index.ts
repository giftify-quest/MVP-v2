import { IQuestionProps } from "@/types/answer";

export interface IQuestionWithFreeInput {
  bgSrcQuestion: string;
  questionText: string;
  name: string;
  buttonTitle: string;
  errorMessage: string;
  answers: string | string[];
}

export interface IQuestionWithFreeInputProps
  extends IQuestionProps {
    question: IQuestionWithFreeInput
  }

