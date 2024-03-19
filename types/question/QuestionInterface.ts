import { QuestionType } from "./QuestionType";

export interface QuestionInterface {
    questionType: QuestionType;
    bgImage:string;
    question:string;
    id:string;
    wrongAnswertext:string;
    order:number;
    submitAnswerButton:string;
}