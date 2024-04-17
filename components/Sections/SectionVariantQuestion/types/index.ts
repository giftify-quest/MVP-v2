import { IQuestionProps } from "@/types/answer"

export interface IQuestionVariant {
  bgImage:string,
  title:string,
  questionText:string,
  answers: Array< {
      id:string,
      text: string,
      isCorrect:boolean
  }>,
  buttonText:string,
  wrongAnswerText:string,
  wrongAnswerButtonText:string,
  gift?:string,
  giftText?:string,
  multipleAnswer:boolean
}

export interface VariantQuestionProps extends IQuestionProps {
  question: IQuestionVariant
}