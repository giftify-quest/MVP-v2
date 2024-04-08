export interface IQuestionWithFreeInput {
  bgSrcQuestion: string;
  questionText: string;
  name: string;
  buttonTitle: string;
  errorMessage: string;
  answers: string | string[];
}

export interface IAnswerWithOutPicture {
  successText: string;
  secondaryText?: string;
  bgSrcAnswer: string;
}

export interface SectionFreeInputProps {
  question: IQuestionWithFreeInput;
  answer: IAnswerWithOutPicture;
  id: string;
  nextSectionId: string;
  underSectionImage: {
    path: string;
  }[];
}

export const SectionFreeInputTestContent: SectionFreeInputProps = {
  id: "1222",
  nextSectionId: "Нужно обсудить???",
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
    answers: "welcome",
  },
  answer: {
    bgSrcAnswer: "/assets/bg-answer-with-out-present.jpg",
    successText:
      "Success text Success text  Success text  Success text  Success text  Success text  Success text",
    secondaryText: "Fred",
  }
}