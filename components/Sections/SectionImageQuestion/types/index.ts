import { Language } from "@/types";
import { IQuestionProps } from "@/types/question";
import { ISection, TypeSections } from "@/types/section";

export interface Images {
  path: string;
  id: string;
  correct: boolean;
}

export interface IQuestionImage {
  bgSrcQuestion: string;
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

export interface ISectionImageQuestion<TQuestion, TAnswer>
  extends ISection<TQuestion, TAnswer> {
  type: TypeSections.sectionImage;
}

export interface ISectionImageQuestionProps<TQuestion, TAnswer> {
  data: ISectionImageQuestion<TQuestion, TAnswer>;
  onAllowNextSlide: () => void;
  name: string;
  lang: Language;
}
