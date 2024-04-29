import { IQuestionImage } from "@/components/Sections/ImageQuestionSection/types";
import { IAnswerWithOutPicture } from "@/types/answer";
import { SectionQuestionProps } from "@/types/section";




export const SectionImageQuestionTestContent:SectionQuestionProps<IQuestionImage, IAnswerWithOutPicture> = {
    title: {
        mainWord: "Hello",
        secondWord: "second word"
    },
    id: '1111',
    nextSectionId: '123',
    blockImage: [
        { path: "/assets/component-photos.jpg" },
        { path: "/assets/component-photos.jpg" },
    ],
    question: {
        bgImage: "/assets/bg-answer-with-present.jpg",
        title:'hello',
        name:'fred',
        questionText: "Do you speak English?",
        buttonText: "Active",
        wrongAnswerText: "error Message error Message error Message error Message error Message error Message error Message",
        wrongAnswerButtonText: "error",
        images: [
            { id: '1', path: '/imageQuestionSection/image2.png', width: 300, height: 340, correct: false },
            { id: '2', path: '/imageQuestionSection/image1.png', width: 300, height: 340, correct: false },
            { id: '3', path: '/imageQuestionSection/image3.png', width: 300, height: 340, correct: true }
        ],
     
    },
    answer: {
        successText: "hello",
        secondaryText: "Fred",
        bgSrcAnswer: '/assets/bg-answer-with-out-present.jpg',
        bgImage: "/assets/bg-answer-with-out-present.jpg",
    },
   
}