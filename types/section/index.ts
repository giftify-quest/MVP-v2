import { ITitleSection } from '../index';

export interface SectionQuestionProps<TQuestion, TAnswer> {
  id: string;
  question: TQuestion;
  answer: TAnswer;
  nextSectionId: string;
  title: ITitleSection;
  blockImage: {
      path: string;
    }[];
}
