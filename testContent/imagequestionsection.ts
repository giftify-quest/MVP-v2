import { title } from 'process';
import { SectionImageQuestion } from "@/components/Sections/ImageQuestionSection/types";



export const SectionImageQuestionTestContent:SectionImageQuestion = {
    title:'hello',
    id: '1111',
    nextSectionId: '123',
    underSectionImage: [
        { path: "/assets/component-photos.jpg" },
        { path: "/assets/component-photos.jpg" },
    ],
    question: {
        bgSrcQuestion: "/assets/bg-answer-with-present.jpg",
        questionText: "Do you speak English?",
        name: "Fred",
        buttonTitle: "Active",
        errorMessage: "error Message error Message error Message error Message error Message error Message error Message",
        images: [
            { id: '1', path: '/imageQuestionSection/image2.png', width: 300, height: 340, correct: false },
            { id: '2', path: '/imageQuestionSection/image1.png', width: 300, height: 340, correct: false },
            { id: '3', path: '/imageQuestionSection/image3.png', width: 300, height: 340, correct: true }
        ],
     
    },
    answer: {
        successText: "hello",
        secondaryText: "Fred",
        bgImage: '/assets/bg-answer-with-out-present.jpg',
    },
   
}