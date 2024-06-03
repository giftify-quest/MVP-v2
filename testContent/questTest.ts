import { ISectionFinalSurprise } from "@/components/Sections/SectionFinalSurprise/types";
import { ISectionFirst } from "@/components/Sections/SectionFirst/types";
import { IQuestionWithFreeInput } from "@/components/Sections/SectionFreeInput/types";
import { IQuestionImage } from "@/components/Sections/SectionImageQuestion/types";
import { IQuestionVariant } from "@/components/Sections/SectionVariantQuestion/types";
import { IAnswerWithOutPicture, IAnswerWithPicture } from "@/types/answer";
import { ISection } from "@/types/section";

interface ITest {
  name: string;
  sectionFirst: ISectionFirst;
  sectionVariantFirstPhoto: ISection<IQuestionVariant, IAnswerWithOutPicture>;
  sectionFreeInputFirstPhoto: ISection<
    IQuestionWithFreeInput,
    IAnswerWithOutPicture
  >;
  sectionFinalSurprise: ISectionFinalSurprise;
  sectionImageQuestion: ISection<IQuestionImage, IAnswerWithPicture>;
}

export const questTest: ITest = {
  name: "Михаил",
  sectionFirst: {
    titlePhoto: {
      imgSrc: "/assets/testImage/testFirstTest.png",
      dateEvent: "06.08.22",
    },
    title: {
      mainText: "Сегодня - наш день",
      secondaryText:
        "Чтобы отпраздновать этот особенный день, у меня есть сюрприз.",
      thirdText: "Готова?",
    },
    bgImg: "/assets/bg-answer-with-present-photo.jpg",
    buttonTitle: "Не могу уже ждать!",
    bgMobileSrc: "/assets/section-first/bg-mobile-section-first.png",
    id: "",
    nextId: "",
  },
  // !
  sectionVariantFirstPhoto: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "Первый",
      secondWord: "провокационный вопрос!",
    },
    question: {
      bgSrcQuestion: "/assets/testImage/background.png",
      bgMobile: "/assets/adaptiveQuestionBckgImg.png",
      questionText:
        "Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше ",
      answers: [
        {
          id: "1",
          text: "08л04р20211цу",
          isCorrect: true,
        },
        {
          id: "2",
          text: "Очень хорошо. Теперь попробую угадать от",
          isCorrect: false,
        },
        {
          id: "3",
          text: "Очень хорошо. Теперь попробую угадать, какое, из твоих фото",
          isCorrect: true,
        },
        {
          id: "4",
          text: "Очень хорошо. Теперь попробую угадать от",
          isCorrect: false,
        },
      ],
      buttonText: "Я Уверена",
      wrongAnswerText:
        "Шансов, что из всего произошедшего ты запомнишь название, было мало))",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/assets/component-photos.jpg" },
      { path: "/assets/component-photos.jpg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText:
        "Success text Success text  Success text  Success text  Success text  Success text  Success text",
    },
  },
  sectionFreeInputFirstPhoto: {
    id: "1222",
    nextSectionId: "Нужно обсудить???",
    title: {
      mainWord: "Первый",
      secondWord: "провокационный вопрос!",
    },
    blockImage: [
      { path: "/assets/component-photos.jpg" },
      { path: "/assets/component-photos.jpg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText:
        "Ну и память! Поищи свой следующий подарок в тумбе  у кровати)",
    },
    question: {
      bgSrcQuestion: "/assets/bg-answer-with-present.jpg",
      bgMobile: "/assets/adaptiveQuestionBckgImg.png",
      questionText:
        "Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше первое фото?",
      buttonTitle: "Не могу уже ждать ",
      errorMessage:
        "Шансов, что из всего произошедшего ты запомнишь название, было мало))",
      answers: "welcome",
    },
  },

  sectionImageQuestion: {
    title: {
      mainWord: "Первый",
      secondWord: "провокационный вопрос!",
    },
    id: "1111",
    nextSectionId: "123",
    blockImage: [
      { path: "/assets/component-photos.jpg" },
      { path: "/assets/component-photos.jpg" },
    ],
    question: {
      bgSrcQuestion: "/assets/bg-answer-with-present.jpg",
      bgMobile: "/assets/adaptiveQuestionBckgImg.png",
      title: "hello",
      questionText:
        "Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы фото?",
      buttonText: "Не могу уже ждать ",
      wrongAnswerText:
        "error Message error Message error Message error Message error Message error Message error Message",
      wrongAnswerButtonText: "error",
      images: [
        {
          id: "1",
          path: "/assets/testImage/image1.png",
          correct: false,
        },
        {
          id: "2",
          path: "/assets/testImage/image2.png",
          correct: false,
        },
        {
          id: "3",
          path: "/assets/testImage/image3.png",
          correct: true,
        },
      ],
    },
    answer: {
      successText:
        "Ну и память! Поищи свой следующий подарок в тумбе  у кровати)",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      framedPhotoSrc: "/assets/testImage/image3.png",
      framedPhotoText: "12.12.2012",
    },
  },
  // !
  sectionFinalSurprise: {
    title: {
      mainWord: "Смотри",
    },
    wishersData: {
      textConfirmButton: "Confirm button",
      bgSrc: "/assets/bg-answer-with-present.jpg",
      wishers: [
        {
          wisher: "Поздравляю, ты справилась на отлично, как всегда!",
        },
        {
          wisher: "Можешь оторваться от компа и зацеловать меня!",
        },
        {
          wisher: "welcomeHello",
        },
      ],
      feedPhotos: {
        title: "Смотри",
        subTitle: "Cколько у нас красивых моментов?",
        collage: [
          {
            id: "1",
            src: "/assets/collage/photo1.png",
            width: 440,
            height: 649,
          },
          {
            id: "2",
            src: "/assets/collage/photo2.png",
            width: 440,
            height: 525,
          },
          {
            id: "3",
            src: "/assets/collage/photo3.png",
            width: 440,
            height: 822,
          },
          {
            id: "4",
            src: "/assets/collage/photo4.png",
            width: 440,
            height: 648,
          },
          {
            id: "5",
            src: "/assets/collage/photo5.png",
            width: 440,
            height: 649,
          },
          {
            id: "6",
            src: "/assets/collage/photo6.png",
            width: 440,
            height: 822,
          },
          {
            id: "7",
            src: "/assets/collage/photo7.png",
            width: 440,
            height: 649,
          },
          {
            id: "8",
            src: "/assets/collage/photo8.png",
            width: 440,
            height: 649,
          },
          {
            id: "9",
            src: "/assets/collage/photo9.png",
            width: 440,
            height: 648,
          },
          {
            id: "10",
            src: "/assets/collage/photo10.png",
            width: 440,
            height: 648,
          },
          {
            id: "11",
            src: "/assets/collage/photo11.png",
            width: 440,
            height: 648,
          },
          {
            id: "12",
            src: "/assets/collage/photo12.png",
            width: 440,
            height: 822,
          },
          {
            id: "13",
            src: "/assets/collage/photo13.png",
            width: 440,
            height: 491,
          },
          {
            id: "14",
            src: "/assets/collage/photo14.png",
            width: 440,
            height: 609,
          },
        ],
        id: "",
      },
      bgMobileSrc: "/assets/adaptiveQuestionBckgImg.png",
      nextId: "",
    },
  },
};
