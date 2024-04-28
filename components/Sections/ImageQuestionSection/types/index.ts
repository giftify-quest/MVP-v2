import { IQuestionProps } from "@/types/answer";

export interface ImageQuestionType {
    bgSrcQuestion: string,
    questionText: string,
    name: string,
    buttonTitle: string,
    errorMessage:string,
    images: Array<{path: string; id: string; width:number, height:number, correct: boolean, }>
}


export interface ImageAnswerType {
    successText: string,
    secondaryText: string,
    bgImage: string,
}

export interface SectionImageQuestion {
    title:string,

    images: { path: string; id: string; width: number; height: number; correct: boolean; }[];
    id:string,
    nextSectionId:string,
    underSectionImage: Array<{path:string}>,
    question:ImageQuestionType,
    answer: ImageAnswerType
}


export interface ImageQuestionType  extends IQuestionProps {
    
}
