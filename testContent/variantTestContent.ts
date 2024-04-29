import { IQuestionVariant } from "@/components/Sections/SectionVariantQuestion/types";
import { IAnswerWithOutPicture } from "@/types/answer";
import { SectionQuestionProps } from "@/types/section";


export const variantTestContent:SectionQuestionProps<IQuestionVariant, IAnswerWithOutPicture> = {
    id: "949494",
    nextSectionId: "next",
    title: {
        mainWord: "Hello",
        secondWord: "second word"
    },
    question: {
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
    },
    blockImage: [
        { path: "/assets/component-photos.jpg" },
        { path: "/assets/component-photos.jpg" },
      ],
      answer: {
        bgImage: "/assets/bg-answer-with-out-present.jpg",
        successText:
          "Success text Success text  Success text  Success text  Success text  Success text  Success text",
        secondaryText: "Fred",
        bgSrcAnswer:"/assets/bg-answer-with-out-present.jpg",
      },
}