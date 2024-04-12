import { Answer } from "./answer/Answer";
import { VariantQuestionInterface } from "./answer/VariantAsnwerType";
import { Params } from "./Params";
import { QuestionInterface } from "./question/QuestionInterface";

export interface IAnswerProps {
    onReady: () => void;
  }
export interface Section {
    id:string;
    answer:Answer;
    nextSectionId:string;
    underSectionImage: {
        path: string;
      }[];
    title:string;
    question: VariantQuestionInterface;
}
