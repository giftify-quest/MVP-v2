import { Answer } from "./answer/Answer";
import { Params } from "./Params";
import { QuestionInterface } from "./question/QuestionInterface";

export interface Section {
    id:string;
    answer:Answer;
    nextSectionId:string;
    underSectionImage: string[];
    title:string;
    question: QuestionInterface;
}
