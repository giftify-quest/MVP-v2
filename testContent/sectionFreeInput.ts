import {  IQuestionWithFreeInput } from "@/components/Sections/SectionFreeInput/types";
import { IAnswerWithOutPicture } from "@/types/answer";
import { SectionQuestionProps } from "@/types/section";


export const SectionFreeInputTestContent: SectionQuestionProps<IQuestionWithFreeInput, IAnswerWithOutPicture> = {
  id: "1222",
  nextSectionId: "Нужно обсудить???",
  title: {
    mainWord: "main words",
    secondWord: "secondary words",
  },
  blockImage: [
    { path: "/assets/component-photos.jpg" },
    { path: "/assets/component-photos.jpg" },
  ],
  answer: {
    bgSrcAnswer: "/assets/bg-answer-with-out-present.jpg",
    successText:
      "Success text Success text  Success text  Success text  Success text  Success text  Success text",
    secondaryText: "Fred",
  },
  question: {
    bgSrcQuestion: "/assets/bg-answer-with-present.jpg",
    questionText: "Do you speak English?",
    name: "Fred",
    buttonTitle: "Active",
    errorMessage:
      "error Message error Message error Message error Message error Message error Message error Message",
    answers: "welcome",
  },
}