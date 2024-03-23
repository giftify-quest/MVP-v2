

export interface VariantQuestionInterface {
    bgImage:string,
    title:string,
    questionText:string,
    answer1: Array< {
        id:string,
        text: string,
        isCorrect:boolean
    }> 
    ,
    answer2: Array< {
            id:string,
            text: string,
            isCorrect:boolean
        }>,
    buttonText:string,
    wrongAnswerText:string,
    wrongAnswerButtonText:string
}