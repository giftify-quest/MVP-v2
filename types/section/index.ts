import { ITitleSection } from "../index";

export interface ISection<TQuestion, TAnswer> {
  id: string;
  question: TQuestion;
  answer: TAnswer;
  nextSectionId: string;
  title: ITitleSection;
  blockImage: {
    path: string;
  }[];
}

export interface ISectionProps<TQuestion, TAnswer>
  extends ISection<TQuestion, TAnswer> {
  onAllowNextSlide: () => void;
  name: string;
}
