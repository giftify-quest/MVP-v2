import { ISectionFinalSurprise } from "@/components/Sections/SectionFinalSurprise/types";
import { ISectionFirst } from "@/components/Sections/SectionFirst/types";
import { IQuestionWithFreeInput } from "@/components/Sections/SectionFreeInput/types";
import { IQuestionImage } from "@/components/Sections/SectionImageQuestion/types";
import { IQuestionVariant } from "@/components/Sections/SectionVariantQuestion/types";
import { setBackgroundDesktop } from "@/helpers/setBackgroundDesktop";
import { setBackgroundMobile } from "@/helpers/setBackgroundMobile";
import { Language } from "@/types";
import { IAnswerWithPicture } from "@/types/answer";
import { ISection } from "@/types/section";

export interface IFirstQuest {
  name: string;
  land: Language;
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

export const templateQuest: IFirstQuest = {
  name: "Anya",
  land: Language.eng,
  sectionFirst: {
    id: "section1",
    nextId: "949494",
    titlePhoto: {
      imgSrc: "/templateQuest/hero/heroImg.png",
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
      bgSrcQuestion: setBackgroundDesktop(8),
      bgMobile: setBackgroundMobile(0),
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
      { path: "/templateQuest/photoGallery/photoGallery1.jpeg" },
      { path: "/templateQuest/photoGallery/photoGallery2.jpeg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText:
        "You have a good memory my love! Your small prize is waiting under the pillow. By the way, it was your first message, crazy man.",
      framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
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
      { path: "/templateQuest/photoGallery/photoGallery3.jpeg" },
      { path: "/templateQuest/photoGallery/photoGallery4.jpeg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText:
        "Right, and I wish to we explore much more new destinations together!",
      framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
      framedPhotoText: "",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(1),
      bgMobile: setBackgroundMobile(1),
      questionText: "Remember how we chose a hotel near the forest in .. ?",
      buttonTitle: "Check",
      errorMessage: "Not there  😅 ",
      answers: "Germany",
    },
  },

  sectionImageQuestion: {
    title: {
      mainWord: "What",
      secondWord: "is my favorite photo?",
    },
    id: "1111",
    nextSectionId: "123",
    blockImage: [
      { path: "/templateQuest/photoGallery/photoGallery5.jpeg" },
      { path: "/templateQuest/photoGallery/photoGallery6.jpeg" },
    ],
    question: {
      bgSrcQuestion: setBackgroundDesktop(2),
      bgMobile: setBackgroundMobile(2),
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
      framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
      framedPhotoText: "",
    },
  },
  sectionInputFood: {
    id: "1222",
    nextSectionId: "Нужно обсудить???",
    title: {
      mainWord: "Food",
      secondWord: "",
    },
    blockImage: [
      { path: "/templateQuest/photoGallery/photoGallery1.jpeg" },
      { path: "/templateQuest/photoGallery/photoGallery2.jpeg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "Yes! It was sooo romantic!",
      framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
      framedPhotoText: "",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(3),
      bgMobile: setBackgroundMobile(3),
      questionText:
        "The main gift is so close… Few more tricky questions.What fruit did you bring to our first picnic in Napoleon park?",
      buttonTitle: "Check",
      errorMessage: "You didn't guess😆",
      answers: "Watermelon",
    },
  },
  sectionVariantRelationShip: {
    id: "1212123123",
    nextSectionId: "next",
    title: {
      mainWord: "Our",
      secondWord: "relationship is..",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(4),
      bgMobile: setBackgroundMobile(4),
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
      { path: "/templateQuest/photoGallery/photoGallery3.jpeg" },
      { path: "/templateQuest/photoGallery/photoGallery4.jpeg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "It is correct mon amour!",
      framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
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
      bgSrcQuestion: setBackgroundDesktop(5),
      bgMobile: setBackgroundMobile(5),
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
      { path: "/templateQuest/photoGallery/photoGallery5.jpeg" },
      { path: "/templateQuest/photoGallery/photoGallery6.jpeg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText:
        "Of course this is the correct answer. You are the most wonderful person I have ever met in my life ❤️️",
      framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
      framedPhotoText: "",
    },
  },
  sectionVariantMomentsTogether: {
    id: "12312111",
    nextSectionId: "next",
    title: {
      mainWord: "Moments",
      secondWord: "together",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(6),
      bgMobile: setBackgroundMobile(6),
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
      { path: "/templateQuest/photoGallery/photoGallery1.jpeg" },
      { path: "/templateQuest/photoGallery/photoGallery2.jpeg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "Yes, because I love each second together.",
      framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
      framedPhotoText: "",
    },
  },
  sectionVariantAdventuresTogether: {
    id: "11222555",
    nextSectionId: "next",
    title: {
      mainWord: "Adventures",
      secondWord: "together",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(7),
      bgMobile: setBackgroundMobile(7),
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
      buttonText: "I'm sure",
      wrongAnswerText: "New day - new adventure, but it’s not what i mean 😆",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/templateQuest/photoGallery/photoGallery4.jpeg" },
      { path: "/templateQuest/photoGallery/photoGallery3.jpeg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText:
        "Great, you are moving towards the finish line successfully.",
      framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
      framedPhotoText: "",
    },
  },
  sectionVariantTogetherWeCan: {
    id: "111155522",
    nextSectionId: "next",
    title: {
      mainWord: "Together",
      secondWord: "we can everything",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(8),
      bgMobile: setBackgroundMobile(8),
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
      { path: "/templateQuest/photoGallery/photoGallery5.jpeg" },
      { path: "/templateQuest/photoGallery/photoGallery6.jpeg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText:
        "Yes, our whole life is in front of us, and I am sure we will make it as we dream.",
      framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
      framedPhotoText: "",
    },
  },
  sectionVariantFinal: {
    id: "1230990977",
    nextSectionId: "next",
    title: {
      mainWord: "Final",
      secondWord: "question",
    },
    question: {
      bgSrcQuestion: setBackgroundDesktop(0),
      bgMobile: setBackgroundMobile(9),
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
      buttonText: "I'm sure",
      wrongAnswerText: "No, you’re on diet 😆",
      wrongAnswerButtonText: "Teperto4no???",
      multipleAnswer: true,
    },
    blockImage: [
      { path: "/templateQuest/photoGallery/photoGallery1.jpeg" },
      { path: "/templateQuest/photoGallery/photoGallery2.jpeg" },
    ],
    answer: {
      bgSrc: "/assets/bg-answer-with-out-present.jpg",
      bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
      successText: "Haha, good job! You can find a small surprise in my bag.",
      framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
      framedPhotoText: "",
    },
  },
  // !
  sectionFinalSurprise: {
    title: {
      mainWord: "Final",
      secondWord: "surprise",
    },
    wishersData: {
      nextId: "collage",
      musicSrc: "/firstQuest/music/music.mp3",
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
        id: "collage",
        title: "Look 🥰",
        subTitle:
          "Do you want to see how many beautiful moments and memories we have together?",
        collage: [
          {
            id: "1",
            src: "/templateQuest/feedPhoto/photo1.png",
            width: 440,
            height: 649,
          },
          {
            id: "2",
            src: "/templateQuest/feedPhoto/photo2.png",
            width: 440,
            height: 525,
          },
          {
            id: "4",
            src: "/templateQuest/feedPhoto/photo3.png",
            width: 440,
            height: 648,
          },
          {
            id: "5",
            src: "/templateQuest/feedPhoto/photo4.png",
            width: 440,
            height: 649,
          },
          {
            id: "7",
            src: "/templateQuest/feedPhoto/photo5.png",
            width: 440,
            height: 649,
          },
          {
            id: "8",
            src: "/templateQuest/feedPhoto/photo6.png",
            width: 440,
            height: 649,
          },
          {
            id: "9",
            src: "/templateQuest/feedPhoto/photo7.png",
            width: 440,
            height: 648,
          },
          {
            id: "10",
            src: "/templateQuest/feedPhoto/photo8.png",
            width: 440,
            height: 648,
          },
          {
            id: "11",
            src: "/templateQuest/feedPhoto/photo9.png",
            width: 440,
            height: 648,
          },
          {
            id: "12",
            src: "/templateQuest/feedPhoto/photo10.png",
            width: 440,
            height: 822,
          },
          {
            id: "14",
            src: "/templateQuest/feedPhoto/photo11.png",
            width: 440,
            height: 609,
          },
          {
            id: "15",
            src: "/templateQuest/feedPhoto/photo12.png",
            width: 440,
            height: 609,
          },
          {
            id: "15",
            src: "/templateQuest/feedPhoto/photo13.png",
            width: 440,
            height: 609,
          },
          {
            id: "16",
            src: "/templateQuest/feedPhoto/photo14.png",
            width: 440,
            height: 609,
          },
        ],
      },
      bgMobileSrc: "/assets/finalSurpriseMobeliBg.png",
    },
  },
};
