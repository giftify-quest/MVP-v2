

export interface VariantQuestionInterface {
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