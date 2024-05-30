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
  sectionVariantFirstPhoto: ISection<IQuestionVariant, IAnswerWithPicture>;
  sectionFreeInputFirstPhoto: ISection<
    IQuestionWithFreeInput,
    IAnswerWithPicture
  >;
  sectionInputFood: ISection<IQuestionWithFreeInput, IAnswerWithPicture>;
  sectionVariantRelationShip: ISection<IQuestionVariant, IAnswerWithPicture>;
  sectionVariantTheMost: ISection<IQuestionVariant, IAnswerWithPicture>;
  sectionVariantMomentsTogether: ISection<IQuestionVariant, IAnswerWithPicture>;
  sectionVariantAdventuresTogether: ISection<
    IQuestionVariant,
    IAnswerWithPicture
  >;
  sectionVariantTogetherWeCan: ISection<IQuestionVariant, IAnswerWithPicture>;
  sectionVariantFinal: ISection<IQuestionVariant, IAnswerWithPicture>;
  sectionFinalSurprise: ISectionFinalSurprise;
  sectionImageQuestion: ISection<IQuestionImage, IAnswerWithPicture>;
}

export const firstQuest: ITest = {
  name: "Михаил",
  sectionFirst: {
    titlePhoto: {
      imgSrc: "/assets/testImage/testFirstTest.png",
      dateEvent: "09.06.24",
    },
    title: {
      mainText: "Today is our day my love",
      secondaryText:
        "To celebrate this special date I have a surprise for you.",
      thirdText: "Are you ready?",
    },
    bgImg: "/assets/bg-answer-with-present-photo.jpg",
    buttonTitle: "Yes, I can’t wait 🎁!",
    bgMobileSrc: "/assets/section-first/bg-mobile-section-first.png",
  },
  // !
  sectionVariantFirstPhoto: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "First",
      secondWord: "provocative question",
    },
    question: {
      bgImage: "/assets/testImage/background.png",
      bgMobile: "/assets/adaptiveQuestionBckgImg.png",
      questionText: "When did you write me for the first time?",
      answers: [
        {
          id: "1",
          text: "20.04.2022",
          isCorrect: false,
        },
        {
          id: "2",
          text: "30.04.2023",
          isCorrect: false,
        },
        {
          id: "3",
          text: "09.06.2022",
          isCorrect: false,
        },
        {
          id: "4",
          text: "17.05.2022",
          isCorrect: true,
        },
      ],
      buttonText: "I am sure!",
      wrongAnswerText: "Oups, not correct 😅",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/firstQuest/firstVariant/photo1.jpg" },
      { path: "/firstQuest/firstVariant/photo2.jpg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText:
        "You have a good memory me love! Your small prize is waiting under the pillow. By the way, it was your first message, crazy man.",
      framedPhotoSrc: "/firstQuest/firstVariant/answerPhotoFirst.jpg",
      framedPhotoText: "12.12.12",
    },
  },
  sectionFreeInputFirstPhoto: {
    id: "1222",
    nextSectionId: "Нужно обсудить???",
    title: {
      mainWord: "Where",
      secondWord: "did we go on our first trip?",
    },
    blockImage: [
      { path: "/firstQuest/secondQuestion/photo3.jpg" },
      { path: "/firstQuest/secondQuestion/photo4.jpg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText:
        "Right, and I wish to we explore much more new destinations together!",
      framedPhotoSrc: "/firstQuest/secondQuestion/answerPhotoGermany.jpg",
      framedPhotoText: "",
    },
    question: {
      bgSrcQuestion: "/assets/bg-answer-with-present.jpg",
      bgMobile: "/assets/adaptiveQuestionBckgImg.png",
      questionText: "Remember how we chose a hotel near the forest in .. ?",
      buttonTitle: "Не могу уже ждать ",
      errorMessage: "Not there  😅 ",
      answers: "Germany",
    },
  },

  sectionImageQuestion: {
    title: {
      mainWord: "What",
      secondWord: "is my favourite photo ?",
    },
    id: "1111",
    nextSectionId: "123",
    blockImage: [
      { path: "/firstQuest/thirdQuestion/photo5.jpg" },
      { path: "/firstQuest/thirdQuestion/photo6.jpg" },
    ],
    question: {
      bgImage: "/assets/bg-answer-with-present.jpg",
      bgMobile: "/assets/adaptiveQuestionBckgImg.png",
      title: "hello",
      questionText:
        "Amazing! Now choose one photo that shows our small crime 🤫",
      buttonText: "Correct?",
      wrongAnswerText: "Did not guess😆",
      wrongAnswerButtonText: "error",
      images: [
        {
          id: "1",
          path: "/firstQuest/thirdQuestion/imageQuestion1.jpg",
          correct: false,
        },
        {
          id: "2",
          path: "/firstQuest/thirdQuestion/imageQuestion2.jpg",
          correct: true,
        },
        {
          id: "3",
          path: "/firstQuest/thirdQuestion/imageQuestion3.jpg",
          correct: false,
        },
      ],
    },
    answer: {
      successText:
        "It was the most delicious stolen lemon in my life 😂🍋 The second gift you can find in the shelf next to bed. ",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      framedPhotoSrc: "/firstQuest/thirdQuestion/answerPhotoLemon.jpg",
      framedPhotoText: "",
    },
  },
  sectionInputFood: {
    id: "1222",
    nextSectionId: "Нужно обсудить???",
    title: {
      mainWord: "Where",
      secondWord: "did we go on our first trip?",
    },
    blockImage: [
      { path: "/firstQuest/fourthQuestion/photo7.jpg" },
      { path: "/firstQuest/fourthQuestion/photo8.jpg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "Yes! It was sooo romantic!",
      framedPhotoSrc: "/firstQuest/fourthQuestion/answerPhotoFood.jpg",
      framedPhotoText: "",
    },
    question: {
      bgSrcQuestion: "/assets/bg-answer-with-present.jpg",
      bgMobile: "/assets/adaptiveQuestionBckgImg.png",
      questionText:
        "The main gift is so close… Few more tricky questions.What fruit did you bring to our first picnic in Napoleon park?",
      buttonTitle: "Check",
      errorMessage: "You didn't guess😆",
      answers: "Watermelon",
    },
  },
  sectionVariantRelationShip: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "First",
      secondWord: "provocative question",
    },
    question: {
      bgImage: "/assets/testImage/background.png",
      bgMobile: "/assets/adaptiveQuestionBckgImg.png",
      questionText: "Guess how would I describe our relationship in 3 words…",
      answers: [
        {
          id: "1",
          text: "Comedy, hell, fun",
          isCorrect: false,
        },
        {
          id: "2",
          text: "Love, support, communication",
          isCorrect: true,
        },
        {
          id: "3",
          text: "Adventure, game, attention",
          isCorrect: false,
        },
        {
          id: "4",
          text: "Romance, sadness,trips",
          isCorrect: false,
        },
      ],
      buttonText: "I am sure!",
      wrongAnswerText: "Hah, nooo 😆 ",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/firstQuest/fivethQuestion/photo09.jpg" },
      { path: "/firstQuest/fivethQuestion/photo10.jpg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "It is correct mon amour!",
      framedPhotoSrc: "/firstQuest/fivethQuestion/answerPhotoOur.jpg",
      framedPhotoText: "",
    },
  },
  sectionVariantTheMost: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "The most",
      secondWord: "...",
    },
    question: {
      bgImage: "/assets/testImage/background.png",
      bgMobile: "/assets/adaptiveQuestionBckgImg.png",
      questionText: "The most I love in you...",
      answers: [
        {
          id: "1",
          text: "Your kindness",
          isCorrect: false,
        },
        {
          id: "2",
          text: "Your character",
          isCorrect: false,
        },
        {
          id: "3",
          text: "Everything",
          isCorrect: true,
        },
        {
          id: "4",
          text: "Your sincerity",
          isCorrect: false,
        },
      ],
      buttonText: "I am sure!",
      wrongAnswerText: "Oh no, it's wrong answer 😆 ",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/firstQuest/sixQuestion/photo11.jpg" },
      { path: "/firstQuest/sixQuestion/photo12.jpg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText:
        "Of course this is the correct answer. You are the most wonderful person I have ever met in my life ❤️️",
      framedPhotoSrc: "/firstQuest/sixQUestion/answerPhotoTheMost.jpg",
      framedPhotoText: "",
    },
  },
  sectionVariantMomentsTogether: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "Moments",
      secondWord: "together",
    },
    question: {
      bgImage: "/assets/testImage/background.png",
      bgMobile: "/assets/adaptiveQuestionBckgImg.png",
      questionText:
        "If we could go back in time, what moment of our history do you think I would choose? ",
      answers: [
        {
          id: "1",
          text: "First kiss",
          isCorrect: false,
        },
        {
          id: "2",
          text: "Skydiving",
          isCorrect: false,
        },
        {
          id: "3",
          text: "Present moment",
          isCorrect: true,
        },
        {
          id: "4",
          text: "Holiday in Mallorca",
          isCorrect: false,
        },
      ],
      buttonText: "Check",
      wrongAnswerText:
        "This moment was also amazing, but this is the wrong answer 😆 ",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/firstQuest/sevenQuestion/photo13.jpg" },
      { path: "/firstQuest/sevenQuestion/photo14.jpg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "Yes, because I love each second together.",
      framedPhotoSrc: "firstQuest/sevenQuestion/answerPhotoMomentTogether.jpg",
      framedPhotoText: "",
    },
  },
  sectionVariantAdventuresTogether: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "Moments",
      secondWord: "together",
    },
    question: {
      bgImage: "/assets/testImage/background.png",
      bgMobile: "/assets/adaptiveQuestionBckgImg.png",
      questionText:
        "What is the most unusual adventure we have been through together?",
      answers: [
        {
          id: "1",
          text: "Heineken museum",
          isCorrect: false,
        },
        {
          id: "2",
          text: "Trip to Mallorca",
          isCorrect: false,
        },
        {
          id: "3",
          text: "Skydiving",
          isCorrect: true,
        },
        {
          id: "4",
          text: "Presentation Food Space Lux",
          isCorrect: false,
        },
      ],
      buttonText: "Check",
      wrongAnswerText: "New day - new adventure, but it’s not what i mean 😆",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/firstQuest/eightsQuestion/photo15.jpg" },
      { path: "/firstQuest/eightsQuestion/photo16.jpg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText:
        "Great, you are moving towards the finish line successfully.",
      framedPhotoSrc: "/firstQuest/eightsQuestion/answerPhotoAdventures.jpg",
      framedPhotoText: "",
    },
  },
  sectionVariantTogetherWeCan: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "Together",
      secondWord: "we can everything",
    },
    question: {
      bgImage: "/assets/testImage/background.png",
      bgMobile: "/assets/adaptiveQuestionBckgImg.png",
      questionText:
        "What goals we will definitely achieve together in the future?",
      answers: [
        {
          id: "1",
          text: "To build our dream house ",
          isCorrect: true,
        },
        {
          id: "2",
          text: "To travel all around the world",
          isCorrect: true,
        },
        {
          id: "3",
          text: "To become a parents",
          isCorrect: true,
        },
        {
          id: "4",
          text: "To build our business",
          isCorrect: true,
        },
      ],
      buttonText: "Check",
      wrongAnswerText: "No 😆 ",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/firstQuest/togetherWeCan/photo17.jpg" },
      { path: "/firstQuest/togetherWeCan/photo18.jpg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText:
        "Yes, our whole life is in front of us, and I am sure we will make it as we dream.",
      framedPhotoSrc: "/firstQuest/togetherWeCan/answerPhotoWeCan.jpg",
      framedPhotoText: "",
    },
  },
  sectionVariantFinal: {
    id: "949494",
    nextSectionId: "next",
    title: {
      mainWord: "Final",
      secondWord: "question",
    },
    question: {
      bgImage: "/assets/testImage/background.png",
      bgMobile: "/assets/adaptiveQuestionBckgImg.png",
      questionText:
        "If you could only choose ONE ‘bulochka’ for the rest of your life, it would be …  ",
      answers: [
        {
          id: "1",
          text: "Chocolate bulochka",
          isCorrect: false,
        },
        {
          id: "2",
          text: "Jam bulochka",
          isCorrect: false,
        },
        {
          id: "3",
          text: "Cherry bulochka",
          isCorrect: false,
        },
        {
          id: "4",
          text: "The one in front of you",
          isCorrect: true,
        },
      ],
      buttonText: "Check",
      wrongAnswerText: "No, you’re on diet 😆",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/firstQuest/nineQUestion/photo19.jpg" },
      { path: "/firstQuest/nineQUestion/photo20.jpg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "Haha, good job! You can find a small surprise in my bag.",
      framedPhotoSrc: "/firstQuest/nineQUestion/answerPhotoFinal.jpg",
      framedPhotoText: "",
    },
  },
  // !
  sectionFinalSurprise: {
    title: {
      mainWord: "",
    },
    wishersData: {
      textConfirmButton: "Thank you ❤️",
      bgSrc: "/assets/bg-answer-with-present.jpg",
      wishers: [
        {
          wisher:
            "Congratulations, you have successfully completed this quest. Now it's time for hugs and kisses. ",
        },
        {
          wisher:
            "But first, look under the bed, there's something waiting for you ",
        },
      ],
      feedPhotos: {
        title: "Look",
        subTitle: "How many moments we have? ❤️",
        collage: [
          {
            id: "1",
            src: "/firstQuest/collage/photo_2024-05-27_22-10-23.jpg",
            width: 440,
            height: 649,
          },
          {
            id: "2",
            src: "/firstQuest/collage/photo_2024-05-27_22-10-32.jpg",
            width: 440,
            height: 525,
          },
          {
            id: "4",
            src: "/firstQuest/collage/photo_2024-05-27_22-10-44.jpg",
            width: 440,
            height: 648,
          },
          {
            id: "5",
            src: "/firstQuest/collage/photo_2024-05-27_22-10-47.jpg",
            width: 440,
            height: 649,
          },
          {
            id: "7",
            src: "/firstQuest/collage/photo_2024-05-27_22-11-00.jpg",
            width: 440,
            height: 649,
          },
          {
            id: "8",
            src: "/firstQuest/collage/photo_2024-05-27_22-11-04.jpg",
            width: 440,
            height: 649,
          },
          {
            id: "9",
            src: "/firstQuest/collage/photo_2024-05-27_22-11-07.jpg",
            width: 440,
            height: 648,
          },
          {
            id: "10",
            src: "/firstQuest/collage/photo_2024-05-27_22-11-13.jpg",
            width: 440,
            height: 648,
          },
          {
            id: "11",
            src: "/firstQuest/collage/photo_2024-05-27_22-11-17.jpg",
            width: 440,
            height: 648,
          },
          {
            id: "12",
            src: "/firstQuest/collage/photo_2024-05-27_22-11-20.jpg",
            width: 440,
            height: 822,
          },
          {
            id: "14",
            src: "/firstQuest/collage/photo_2024-05-27_22-11-27.jpg",
            width: 440,
            height: 609,
          },
          {
            id: "15",
            src: "/firstQuest/collage/photo_2024-05-27_22-11-30.jpg",
            width: 440,
            height: 609,
          },
          {
            id: "15",
            src: "/firstQuest/collage/photo_2024-05-27_22-11-33.jpg",
            width: 440,
            height: 609,
          },
          {
            id: "16",
            src: "/firstQuest/collage/photo_2024-05-27_22-11-37.jpg",
            width: 440,
            height: 609,
          },
        ],
      },
      bgMobileSrc: "/assets/adaptiveQuestionBckgImg.png",
    },
  },
};
