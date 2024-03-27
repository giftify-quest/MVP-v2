import { VariantQuestionInterface } from "@/types/answer/VariantAsnwerType";


export const testContent:VariantQuestionInterface = {

    bgImage: '/testImage/background.png',
    title:"Hello",
    questionText:"Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше ",
    answers: [
        {
            id:'1',
            text: "Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше ",
            isCorrect:true
        },
        {
            id:'2',
            text: "Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше ",
            isCorrect:false
        },
        {
            id:'3',
            text: "Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше ",
            isCorrect:true
        },
        {
            id:'4',
            text: "Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше ",
            isCorrect:false
        },
       
    ],
    buttonText:"Я Уверена",
    wrongAnswerText:"Podumaj jeshe",
    wrongAnswerButtonText:'Teperto4no' ,
    multipleAnswer:true

}