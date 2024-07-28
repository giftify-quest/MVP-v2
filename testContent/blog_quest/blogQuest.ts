import { ISectionFinalSurprise } from "@/components/Sections/SectionFinalSurprise/types";
import { ISectionFirst } from "@/components/Sections/SectionFirst/types";
import { IQuestionWithFreeInput } from "@/components/Sections/SectionFreeInput/types";
import { IQuestionImage } from "@/components/Sections/SectionImageQuestion/types";
import { IQuestionVariant } from "@/components/Sections/SectionVariantQuestion/types";
import { setBackgroundDesktop } from "@/helpers/setBackgroundDesktop";
import { setBackgroundMobile } from "@/helpers/setBackgroundMobile";
import { Language } from "@/types";
import { Answer, TAnswerComponent } from "@/types/answer";
import { ISection } from "@/types/section";

export interface TemplateQuest {
  name: string;
  lang: Language;
  sectionFirst: ISectionFirst;
  sectionVariantFirstPhoto: ISection<IQuestionVariant, TAnswerComponent>;
  sectionVariantSecondQuestion: ISection<IQuestionVariant, TAnswerComponent>;
  sectionVariantThirdQuestion: ISection<IQuestionVariant, TAnswerComponent>;
  sectionVariantFourthQuestion: ISection<IQuestionVariant, TAnswerComponent>;
  sectionImageFivethQuestion: ISection<IQuestionImage, TAnswerComponent>;
  sectionImageSixQuestion: ISection<IQuestionImage, TAnswerComponent>;
  sectionVariantSevenQuestion: ISection<IQuestionVariant, TAnswerComponent>;
  sectionVariantEightQuestion: ISection<IQuestionVariant, TAnswerComponent>;
  sectionVariantNineQuestion: ISection<IQuestionVariant, TAnswerComponent>;
  sectionVariantTenQuestion: ISection<IQuestionVariant, TAnswerComponent>;
  sectionFinalSurprise: ISectionFinalSurprise;
}

export const blogQuest: TemplateQuest = {
  name: "mamamia",
  lang: Language.rus,
  sectionFirst: {
    id: "section1",
    nextId: "949494",
    titlePhoto: {
      imgSrc: "/blogQuest/titleComponent/titlePhoto.png",
      dateEvent: "30.07.24",
    },
    title: {
      mainText: "Годовщина нашей свадьбы",
      secondaryText:
        " Чтобы мы стали друг к другу ближе, предлагаю пройти квест.",
      thirdText: "Готов?",
    },
    bgImg: "/assets/bg-answer-with-present-photo.jpg",
    buttonTitle: "Не могу уже ждать!",
    bgMobileSrc: "/assets/section-first/bg-mobile-section-first.png",
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
      bgSrcQuestion: setBackgroundDesktop(8),
      bgMobile: setBackgroundMobile(1),
      questionText: "Ты помнил что у нас сегодня годовщина или забыл?",
      answers: [
        {
          id: "1",
          text: "забыл",
          isCorrect: false,
        },
        {
          id: "2",
          text: "ой)",
          isCorrect: false,
        },
        {
          id: "3",
          text: "сегодня??",
          isCorrect: false,
        },
        {
          id: "4",
          text: "помнил, конечно",
          isCorrect: true,
        },
      ],
      buttonText: "Вот так",
      wrongAnswerText: "ррр...как ты мог?!)",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/blogQuest/photoGallery/photoGallery1.png" },
      { path: "/blogQuest/photoGallery/photoGallery2.png" },
    ],
    answer: {
      type: Answer.answerWithOutPicture,
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "Мы",
    },
  },
  sectionVariantSecondQuestion: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "Тот",
      secondWord: "самый лень",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(8),
      bgMobile: setBackgroundMobile(1),
      questionText: "Дата нашего знакомства ?",
      answers: [
        {
          id: "1",
          text: "1 апреля",
          isCorrect: false,
        },
        {
          id: "2",
          text: "8 апреля",
          isCorrect: false,
        },
        {
          id: "3",
          text: "3 апреля",
          isCorrect: true,
        },
        {
          id: "4",
          text: "9 апреля",
          isCorrect: false,
        },
      ],
      buttonText: "Я уверен",
      wrongAnswerText: "А я думаю по-другому",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/blogQuest/photoGallery/photoGallery3.png" },
      { path: "/blogQuest/photoGallery/photoGallery4.png" },
    ],
    answer: {
      type: Answer.answerWithPicture,
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "Мы",
      framedPhotoSrc: "/blogQuest/firstAnswer.png",
    },
  },
  sectionVariantThirdQuestion: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "Что-то",
      secondWord: "вкусненькое",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(8),
      bgMobile: setBackgroundMobile(1),
      questionText: "Чем я тебя угостила на первой нашей встрече?",
      answers: [
        {
          id: "1",
          text: "Кусочек торто",
          isCorrect: true,
        },
        {
          id: "2",
          text: "Гамбургер",
          isCorrect: false,
        },
        {
          id: "3",
          text: "Конфетка",
          isCorrect: false,
        },
        {
          id: "4",
          text: "Кофе",
          isCorrect: false,
        },
      ],
      buttonText: "Я уверен",
      wrongAnswerText: "Неа, другое",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/blogQuest/photoGallery/photoGallery7.png" },
      { path: "/blogQuest/photoGallery/photoGallery8.png" },
    ],
    answer: {
      type: Answer.answerWithPicture,
      bgSrc: "/blogQuest/answerBg/bgThirdAnswer.png",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "Вот он)",
      framedPhotoSrc: "/blogQuest/answerThird.png",
    },
  },
  sectionVariantFourthQuestion: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "А помнишь?",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(8),
      bgMobile: setBackgroundMobile(1),
      questionText: "Сколько детей я хотела до деторождения?)",
      answers: [
        {
          id: "1",
          text: "3",
          isCorrect: true,
        },
        {
          id: "2",
          text: "2",
          isCorrect: false,
        },
        {
          id: "3",
          text: "1",
          isCorrect: false,
        },
        {
          id: "4",
          text: "5",
          isCorrect: false,
        },
      ],
      buttonText: "Я уверен",
      wrongAnswerText: "Не угадал :)",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/blogQuest/photoGallery/photoGallery9.png" },
      { path: "/blogQuest/photoGallery/photoGallery10.png" },
    ],
    answer: {
      type: Answer.answerWithOutPicture,
      bgSrc: setBackgroundDesktop(5),
      bgMobileSrc: setBackgroundMobile(5),
      successText: "Да, именно трое",
    },
  },
  sectionImageFivethQuestion: {
    title: {
      mainWord: "Наши",
      secondWord: "хотелки",
    },
    id: "1111",
    nextSectionId: "123",
    blockImage: [
      { path: "/blogQuest/photoGallery/photoGallery11.png" },
      { path: "/blogQuest/photoGallery/photoGallery12.png" },
    ],
    question: {
      bgSrcQuestion: setBackgroundDesktop(2),
      bgMobile: setBackgroundMobile(2),
      title: "hello",
      questionText: "Какую я хочу машину себе?",
      buttonText: "Проверить",
      wrongAnswerText: "Упс! Не она)",
      wrongAnswerButtonText: "error",
      images: [
        {
          id: "1",
          path: "/blogQuest/fiveQuestion/imgQuestion1.png",
          correct: false,
        },
        {
          id: "2",
          path: "/blogQuest/fiveQuestion/imgQuestion2.png",
          correct: true,
        },
        {
          id: "3",
          path: "/blogQuest/fiveQuestion/imgQuestion3.png",
          correct: false,
        },
      ],
    },
    answer: {
      type: Answer.answerWithPicture,
      successText: "Над цветом я еще подумаю)",
      bgSrc: "/blogQuest/answerBg/bgThirdAnswer.png",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      framedPhotoSrc: "/blogQuest/fiveQuestion/fiveQuestionAnswer.png",
      framedPhotoText: "",
    },
  },
  sectionImageSixQuestion: {
    title: {
      mainWord: "Идеальное место",
      secondWord: "",
    },
    id: "1111",
    nextSectionId: "123",
    blockImage: [
      { path: "/blogQuest/photoGallery/photoGallery11.png" },
      { path: "/blogQuest/photoGallery/photoGallery12.png" },
    ],
    question: {
      bgSrcQuestion: setBackgroundDesktop(2),
      bgMobile: setBackgroundMobile(2),
      title: "hello",
      questionText: "Где я хотела бы жить?",
      buttonText: "Уверен!",
      wrongAnswerText: "Нет, это не совсем то)",
      wrongAnswerButtonText: "error",
      images: [
        {
          id: "1",
          path: "/blogQuest/sixQuestion/sixQuestion1.png",
          correct: false,
        },
        {
          id: "2",
          path: "/blogQuest/sixQuestion/sixQuestion2.png",
          correct: true,
        },
        {
          id: "3",
          path: "/blogQuest/sixQuestion/sixQuestion3.png",
          correct: false,
        },
      ],
    },
    answer: {
      type: Answer.answerWithPicture,
      successText: "Конечно, дом",
      bgSrc: "/blogQuest/sixQuestion/bgAnswerSix.png",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      framedPhotoSrc: "/blogQuest/sixQuestion/sixQuestionAnswer.png",
      framedPhotoText: "",
    },
  },
  sectionVariantSevenQuestion: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "Памятный",
      secondWord: "моментик",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(8),
      bgMobile: setBackgroundMobile(1),
      questionText: "Когда были сделаны наши первые фото?",
      answers: [
        {
          id: "1",
          text: "В машине",
          isCorrect: false,
        },
        {
          id: "2",
          text: "На концерте",
          isCorrect: false,
        },
        {
          id: "3",
          text: "Моей сестрой в Дукоре",
          isCorrect: true,
        },
        {
          id: "4",
          text: "зимой",
          isCorrect: false,
        },
      ],
      buttonText: "Ааа, я помню",
      wrongAnswerText: "Попробуй ответить еще раз)",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/blogQuest/photoGallery/photoGallery13.png" },
      { path: "/blogQuest/photoGallery/photoGallery14.png" },
    ],
    answer: {
      type: Answer.answerWithPicture,
      bgSrc: "/blogQuest/sixQuestion/bgAnswerSix.png",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "Это то самое фото",
      framedPhotoSrc: "/blogQuest/sevenPhotoAnswer.png",
    },
  },
  sectionVariantEightQuestion: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "Куда",
      secondWord: "летим дальше?)",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(8),
      bgMobile: setBackgroundMobile(1),
      questionText: "Сколько детей я хотела до деторождения?)",
      answers: [
        {
          id: "1",
          text: "Франция, Япония, Италия",
          isCorrect: false,
        },
        {
          id: "2",
          text: "Китай, Индия, Япония",
          isCorrect: false,
        },
        {
          id: "3",
          text: "Япония, Ирландия, США",
          isCorrect: true,
        },
        {
          id: "4",
          text: "Италия, Испания, Ирландия",
          isCorrect: false,
        },
      ],
      buttonText: "Думаю сюда",
      wrongAnswerText: "Интересно, нужно обсудить, но я думаю о других",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/blogQuest/photoGallery/photoGallery15.png" },
      { path: "/blogQuest/photoGallery/photoGallery16.png" },
    ],
    answer: {
      type: Answer.answerWithOutPicture,
      bgSrc: setBackgroundDesktop(5),
      bgMobileSrc: setBackgroundMobile(5),
      successText: "Ты молодец, все так.Какая страна будет нашей следующей?)",
    },
  },
  sectionVariantNineQuestion: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "Вместе",
      secondWord: "мы можем все",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(8),
      bgMobile: setBackgroundMobile(1),
      questionText: "Какие цели мы преследуем в будущем?",
      answers: [
        {
          id: "1",
          text: "Родить третьего ребенка",
          isCorrect: false,
        },
        {
          id: "2",
          text: "Завести кота",
          isCorrect: false,
        },
        {
          id: "3",
          text: "Открыть свой бизнес",
          isCorrect: false,
        },
        {
          id: "4",
          text: "Построить дом/квартиру",
          isCorrect: false,
        },
      ],
      buttonText: "Я уверен",
      wrongAnswerText: "Все возможно, но какая ближайшая цель?",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/blogQuest/photoGallery/photoGallery17.png" },
      { path: "/blogQuest/photoGallery/photoGallery18.png" },
    ],
    answer: {
      type: Answer.answerWithPicture,
      bgSrc: "/blogQuest/answerBg/bgThirdAnswer.png",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "Вместе мы все сможем",
      framedPhotoSrc: "/blogQuest/sixQuestion/sixQuestionAnswer.png",
    },
  },
  sectionVariantTenQuestion: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "Планы на вечер",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(8),
      bgMobile: setBackgroundMobile(1),
      questionText:
        "Если бы у нас не было детей, куда бы мы отправились этим вечером?",
      answers: [
        {
          id: "1",
          text: "Ресторан",
          isCorrect: false,
        },
        {
          id: "2",
          text: "СПА",
          isCorrect: false,
        },
        {
          id: "3",
          text: "Море",
          isCorrect: false,
        },
        {
          id: "4",
          text: "На Зыбицкую",
          isCorrect: true,
        },
      ],
      buttonText: "Я уверен",
      wrongAnswerText: "Еще варианты?)",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/blogQuest/photoGallery/photoGallery19.png" },
      { path: "/blogQuest/photoGallery/photoGallery20.png" },
    ],
    answer: {
      type: Answer.answerWithPicture,
      bgSrc: "/blogQuest/answerBg/bgThirdAnswer.png",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "Танцы!",
      framedPhotoSrc: "/blogQuest/tenQuestionAnswer.png",
    },
  },
  // !
  sectionFinalSurprise: {
    title: {
      mainWord: "Final",
      secondWord: "surprise",
      variant: "",
    },
    wishersData: {
      nextId: "collage",
      musicSrc: "/firstQuest/music/music.mp3",
      textConfirmButton: "Сюрприз 👇",
      bgSrc: "/assets/bg-answer-with-present.jpg",
      wishers: [
        {
          wisher: "Ты красавчик ! Так держать:)",
        },
        {
          wisher:
            " Это твой заслуженный подарок. Иди покоряй этот мир ! Но сначала поцелуй меня)",
        },
      ],
      feedPhotos: {
        id: "collage",
        title: "Смотри 🥰",
        subTitle: "Хочешь узнать, сколько у нас красивых моментов?",
        collage: [
          {
            id: "1",
            src: "/blogQuest/collage/photo1.png",
            width: 440,
            height: 649,
          },
          {
            id: "2",
            src: "/blogQuest/collage/photo2.png",
            width: 440,
            height: 525,
          },
          {
            id: "4",
            src: "/blogQuest/collage/photo3.png",
            width: 440,
            height: 648,
          },
          {
            id: "5",
            src: "/blogQuest/collage/photo4.png",
            width: 440,
            height: 649,
          },
          {
            id: "7",
            src: "/blogQuest/collage/photo5.png",
            width: 440,
            height: 649,
          },
          {
            id: "8",
            src: "/blogQuest/collage/photo6.png",
            width: 440,
            height: 649,
          },
          {
            id: "9",
            src: "/blogQuest/collage/photo7.png",
            width: 440,
            height: 648,
          },
          {
            id: "10",
            src: "/blogQuest/collage/photo8.png",
            width: 440,
            height: 648,
          },
          {
            id: "11",
            src: "/blogQuest/collage/photo9.png",
            width: 440,
            height: 648,
          },
          {
            id: "12",
            src: "/blogQuest/collage/photo10.png",
            width: 440,
            height: 822,
          },
          {
            id: "14",
            src: "/blogQuest/collage/photo11.png",
            width: 440,
            height: 609,
          },
          {
            id: "15",
            src: "/blogQuest/collage/photo12.png",
            width: 440,
            height: 609,
          },
          {
            id: "15",
            src: "/blogQuest/collage/photo13.png",
            width: 440,
            height: 609,
          },
          {
            id: "16",
            src: "/blogQuest/collage/photo14.png",
            width: 440,
            height: 609,
          },
        ],
      },
      bgMobileSrc: "/assets/finalSurpriseMobeliBg.png",
    },
  },
};
