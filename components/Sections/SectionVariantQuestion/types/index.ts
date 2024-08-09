import { Language } from "@/types";
import { IQuestionProps } from "@/types/question";
import { ISection, TypeSections } from "@/types/section";

export interface IQuestionVariant {
  bgSrcQuestion: string;
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

export interface ISectionVariant<TQuestion, TAnswer>
  extends ISection<TQuestion, TAnswer> {
  type: TypeSections.sectionVariant;
}

export interface ISectionVariantProps<TQuestion, TAnswer> {
  data: ISectionVariant<TQuestion, TAnswer>;
  onAllowNextSlide: () => void;
  name: string;
  lang: Language;
}
