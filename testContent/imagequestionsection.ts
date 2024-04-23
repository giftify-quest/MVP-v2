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
    id:string,
    nextSectionId:string,
    underSectionImage: Array<{path:string}>,
    question:ImageQuestionType,
    answer: ImageAnswerType
}



export const SectionImageQuestionTestContent:SectionImageQuestion = {

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
        errorMessage:
          "error Message error Message error Message error Message error Message error Message error Message",
        images: [
            {id:'1', path:'/imageQuestionSection/image2.png', width:300, height:340, correct:false},
            {id:'2', path:'/imageQuestionSection/image1.png', width:300, height:340, correct:false},
            {id:'3', path:'/imageQuestionSection/image3.png', width:300, height:340, correct:true}
        ]
    },
    answer: {
        successText: "hello",
        secondaryText: "Fred",
        bgImage: '/assets/bg-answer-with-out-present.jpg',
    },
   
}