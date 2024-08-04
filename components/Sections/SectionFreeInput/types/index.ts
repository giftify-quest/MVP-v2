import { Language } from "@/types";
import { IQuestionProps } from "@/types/question";
import { ISection, TypeSections } from "@/types/section";

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
  lang: Language;
}

export interface ISectionFreeInput<TQuestion, TAnswer>
  extends ISection<TQuestion, TAnswer> {
  type: TypeSections.sectionWithFreeInput;
}

export interface ISectionFreeInputProps<TQuestion, TAnswer> {
  data: ISectionFreeInput<TQuestion, TAnswer>;
  onAllowNextSlide: () => void;
  name: string;
  lang: Language;
}
