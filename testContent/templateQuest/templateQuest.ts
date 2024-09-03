import { setBackgroundDesktop } from "@/helpers/setBackgroundDesktop";
import { setBackgroundMobile } from "@/helpers/setBackgroundMobile";
import { Language } from "@/types";
import { Answer } from "@/types/answer";
import { IQuest } from "@/types/quest";
import { TypeSections } from "@/types/section";

export const testTemplateQuest: IQuest = {
  name: "Ivan",
  lang: Language.rus,
  sections: [
    {
      type: TypeSections.firstSection,
      id: "section1",
      nextId: "949494",
      titlePhoto: {
        imgSrc: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILXWbXRg1GI6SmxBL-apoCtaBnkkt2AAIm6jEb9zq5SjPuooxVepzzAQADAgADeAADNQQ",
        dateEvent: "09.09.24",
        dateYears: "1.5",
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
    {
      id: "949494",
      type: TypeSections.sectionVariant,
      nextSectionId: "next",
      title: {
        mainWord: "First",
        secondWord: "provocative question",
      },
      question: {
        bgSrcQuestion: setBackgroundDesktop(8),
        bgMobile: setBackgroundMobile(1),
        questionText:
          "Вспомни ваше первое свидание, как бы ты его описал 1 фразой?",
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
            text: "Очень хорошо. Теперь попробую угадать, какое, из твоих фото",
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
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILCWbXRO3MJwNC2BSYZ7MUI_VD0a1gAAIO6jEb9zq5StlzFwkXUNZ4AQADAgADeQADNQQ" },
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILEmbXRX3aBP7R_SnRcnpFklWrHII8AAIT6jEb9zq5SnKu41meE7JKAQADAgADbQADNQQ" },
      ],
      answer: {
        type: Answer.answerWithPicture,
        bgSrc: "/assets/bg-answer-with-out-present.jpg",
        bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
        successText:
          "Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше первое фото?",
        framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
        framedPhotoText: "12.12.12",
      },
    },
    {
      id: "1222",
      nextSectionId: "Нужно обсудить???",
      type: TypeSections.sectionWithFreeInput,
      title: {
        mainWord: "Where",
        secondWord: "did we go on our first trip?",
      },
      blockImage: [
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILG2bXRZIbaRGaJnxQzLjm0MEpBA57AAIV6jEb9zq5SikhT6BGleodAQADAgADeAADNQQ" },
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILJGbXRaOJ9pb3W61UjTcUEUgTwezxAAIX6jEb9zq5SkBY6s0U3Y6WAQADAgADbQADNQQ" },
      ],
      answer: {
        type: Answer.answerWithPicture,
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
        questionText: "Что больше всего ты ценишь в твоем человеке, для которого мы готовим квест?",
        buttonTitle: "Check",
        errorMessage: "Not there  😅 ",
        answers: "Germany",
      },
    },
    {
      id: "1111",
      nextSectionId: "123",
      type: TypeSections.sectionImage,
      title: {
        mainWord: "What",
        secondWord: "is my favorite photo?",
      },
      blockImage: [
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILLWbXRbRVEZV3v-VXJk35hQJhzWp2AAIZ6jEb9zq5ShKAw2aJT0PKAQADAgADeAADNQQ" },
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILNmbXRcWL1LXjCln7AQpaJ0lktxv1AAIb6jEb9zq5SvbZAu2XC0edAQADAgADbQADNQQ" },
      ],
      question: {
        bgSrcQuestion: setBackgroundDesktop(2),
        bgMobile: setBackgroundMobile(2),
        title: "hello",
        questionText:
          "В какой момент ваших отношений ты бы хотел(а) вернуться?",
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
        type: Answer.answerWithPicture,
        successText:
          "It was the most delicious stolen lemon in my life 😂🍋 The second gift you can find in the shelf next to bed. ",
        bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
        bgSrc: "/assets/bg-answer-with-out-present.jpg",
        framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
        framedPhotoText: "",
      },
    },
    {
      id: "1222",
      nextSectionId: "Нужно обсудить???",
      type: TypeSections.sectionWithFreeInput,
      title: {
        mainWord: "Food",
        secondWord: "",
      },
      blockImage: [
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILP2bXRdSDUpxFImRaXKrcA0LCxpPrAAIe6jEb9zq5SvWzStVjWUrEAQADAgADeAADNQQ" },
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILSGbXReKR2ZnEF-ySiTIokfpXVunvAAIg6jEb9zq5Snnd8cjBurUNAQADAgADeAADNQQ" },
      ],
      answer: {
        type: Answer.answerWithPicture,
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
          "Какое самое необычное приключение вы пережили вместе ?",
        buttonTitle: "Check",
        errorMessage: "You didn't guess😆",
        answers: "Watermelon",
      },
    },
    {
      id: "1212123123",
      nextSectionId: "next",
      type: TypeSections.sectionVariant,
      title: {
        mainWord: "Our",
        secondWord: "relationship is..",
      },
      question: {
        bgSrcQuestion: setBackgroundDesktop(4),
        bgMobile: setBackgroundMobile(4),
        questionText: "Как бы ты описал ваши отношения в трех словах?",
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
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILUWbXRfXZxhWRXVHJNBrnN-KV1_qiAAIj6jEb9zq5SoOc0TZsFW15AQADAgADbQADNQQ" },
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILWmbXRgfxVMKWoR6xacXsRQaC1dCDAAIl6jEb9zq5Sm4EE24rEIdbAQADAgADeAADNQQ" },
      ],
      answer: {
        type: Answer.answerWithPicture,
        bgSrc: "/assets/bg-answer-with-out-present.jpg",
        bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
        successText: "It is correct mon amour!",
        framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
        framedPhotoText: "",
      },
    },
    {
      id: "949494",
      nextSectionId: "next",
      type: TypeSections.sectionVariant,
      title: {
        mainWord: "The most",
        secondWord: "...",
      },
      question: {
        bgSrcQuestion: setBackgroundDesktop(5),
        bgMobile: setBackgroundMobile(5),
        questionText: "Какие цели ты обязательно хочешь достичь вместе с твоим близким человеком?",
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
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILDGbXRXAdvrIHdCkSFk78DrDzVKJWAAIS6jEb9zq5SkxH4h8QEXZkAQADAgADeAADNQQ" },
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILFWbXRYTqQOXb6h2Rxjn7M4pFKdJxAAIU6jEb9zq5Sq9c1eCEZFz0AQADAgADeAADNQQ" },
      ],
      answer: {
        type: Answer.answerWithPicture,
        bgSrc: "/assets/bg-answer-with-out-present.jpg",
        bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
        successText:
          "Of course this is the correct answer. You are the most wonderful person I have ever met in my life ❤️️",
        framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
        framedPhotoText: "",
      },
    },
    {
      id: "12312111",
      nextSectionId: "next",
      type: TypeSections.sectionVariant,
      title: {
        mainWord: "Moments",
        secondWord: "together",
      },
      question: {
        bgSrcQuestion: setBackgroundDesktop(6),
        bgMobile: setBackgroundMobile(6),
        questionText:
          "Если бы вы могли провести целый день вместе, не ограничиваясь временем, чем бы вы занялись?",
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
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILHmbXRZco7ukFSqRLLg8hRXAHspHUAAIW6jEb9zq5SuKc3YLYZJrdAQADAgADbQADNQQ" },
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILJ2bXRajKrelUnrUBPQZIdWf192lOAAIY6jEb9zq5SpR2EeEcUSNnAQADAgADbQADNQQ" },
      ],
      answer: {
        type: Answer.answerWithPicture,
        bgSrc: "/assets/bg-answer-with-out-present.jpg",
        bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
        successText: "Yes, because I love each second together.",
        framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
        framedPhotoText: "",
      },
    },
    {
      id: "11222555",
      nextSectionId: "next",
      type: TypeSections.sectionVariant,
      title: {
        mainWord: "Adventures",
        secondWord: "together",
      },
      question: {
        bgSrcQuestion: setBackgroundDesktop(7),
        bgMobile: setBackgroundMobile(7),
        questionText:
          "Какого цвета твои глаза?",
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
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILMGbXRbl-4o_qFKkUu1EJlZTM4lElAAIa6jEb9zq5SingFWlv5buKAQADAgADeAADNQQ" },
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILOWbXRcqMI8v8UdYZkLwHtWjqy0yFAAId6jEb9zq5SmqZ0EhZFZqXAQADAgADeAADNQQ" },
      ],
      answer: {
        type: Answer.answerWithPicture,
        bgSrc: "/assets/bg-answer-with-out-present.jpg",
        bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
        successText:
          "Great, you are moving towards the finish line successfully.",
        framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
        framedPhotoText: "",
      },
    },
    {
      id: "111155522",
      nextSectionId: "next",
      type: TypeSections.sectionVariant,
      title: {
        mainWord: "Together",
        secondWord: "we can everything",
      },
      question: {
        bgSrcQuestion: setBackgroundDesktop(8),
        bgMobile: setBackgroundMobile(8),
        questionText:
          "Как ты понял(а), что твой партнер - это твой, тот самый человек?",
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
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILQmbXRdk2PUkXPXJ7WWrmQXuq82fgAAIf6jEb9zq5ShzlFtDKit4GAQADAgADeAADNQQ" },
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILS2bXRedAZrzfz29zA4IU4UBpMptsAAIh6jEb9zq5ShtcmNSdOL2uAQADAgADeAADNQQ" },
      ],
      answer: {
        type: Answer.answerWithPicture,
        bgSrc: "/assets/bg-answer-with-out-present.jpg",
        bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
        successText:
          "Yes, our whole life is in front of us, and I am sure we will make it as we dream.",
        framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
        framedPhotoText: "",
      },
    },
    {
      id: "1230990977",
      nextSectionId: "next",
      type: TypeSections.sectionVariant,
      title: {
        mainWord: "Final",
        secondWord: "question",
      },
      question: {
        bgSrcQuestion: setBackgroundDesktop(0),
        bgMobile: setBackgroundMobile(9),
        questionText:
          "Как думаешь, какой ваш волшебный ингредиент в отношениях?",
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
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILVGbXRfttFL-NHBqKZZjp3r87G8O-AAIk6jEb9zq5Shqtrx0rYOT9AQADAgADeAADNQQ" },
        { path: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILXWbXRg1GI6SmxBL-apoCtaBnkkt2AAIm6jEb9zq5SjPuooxVepzzAQADAgADeAADNQQ" },
      ],
      answer: {
        type: Answer.answerWithPicture,
        bgSrc: "/assets/bg-answer-with-out-present.jpg",
        bgMobileSrc: "/assets/adaptiveAnswerBckgImg.png",
        successText: "Haha, good job! You can find a small surprise in my bag.",
        framedPhotoSrc: "/templateQuest/answerWithImage/dateImg.png",
        framedPhotoText: "",
      },
    },
    {
      title: {
        mainWord: "Final",
        secondWord: "surprise",
      },
      id: "22939h",
      type: TypeSections.sectionFinalSurprise,
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
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILCWbXRO3MJwNC2BSYZ7MUI_VD0a1gAAIO6jEb9zq5StlzFwkXUNZ4AQADAgADeQADNQQ",
              width: 440,
              height: 649,
            },
            {
              id: "2",
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILEmbXRX3aBP7R_SnRcnpFklWrHII8AAIT6jEb9zq5SnKu41meE7JKAQADAgADbQADNQQ",
              width: 440,
              height: 525,
            },
            {
              id: "4",
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILG2bXRZIbaRGaJnxQzLjm0MEpBA57AAIV6jEb9zq5SikhT6BGleodAQADAgADeAADNQQ",
              width: 440,
              height: 648,
            },
            {
              id: "5",
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILJGbXRaOJ9pb3W61UjTcUEUgTwezxAAIX6jEb9zq5SkBY6s0U3Y6WAQADAgADbQADNQQ",
              width: 440,
              height: 649,
            },
            {
              id: "7",
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILLWbXRbRVEZV3v-VXJk35hQJhzWp2AAIZ6jEb9zq5ShKAw2aJT0PKAQADAgADeAADNQQ",
              width: 440,
              height: 649,
            },
            {
              id: "8",
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILNmbXRcWL1LXjCln7AQpaJ0lktxv1AAIb6jEb9zq5SvbZAu2XC0edAQADAgADbQADNQQ",
              width: 440,
              height: 649,
            },
            {
              id: "9",
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILP2bXRdSDUpxFImRaXKrcA0LCxpPrAAIe6jEb9zq5SvWzStVjWUrEAQADAgADeAADNQQ",
              width: 440,
              height: 648,
            },
            {
              id: "10",
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILSGbXReKR2ZnEF-ySiTIokfpXVunvAAIg6jEb9zq5Snnd8cjBurUNAQADAgADeAADNQQ",
              width: 440,
              height: 648,
            },
            {
              id: "11",
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILUWbXRfXZxhWRXVHJNBrnN-KV1_qiAAIj6jEb9zq5SoOc0TZsFW15AQADAgADbQADNQQ",
              width: 440,
              height: 648,
            },
            {
              id: "12",
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILWmbXRgfxVMKWoR6xacXsRQaC1dCDAAIl6jEb9zq5Sm4EE24rEIdbAQADAgADeAADNQQ",
              width: 440,
              height: 649,
            },
            {
              id: "14",
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILUWbXRfXZxhWRXVHJNBrnN-KV1_qiAAIj6jEb9zq5SoOc0TZsFW15AQADAgADbQADNQQ",
              width: 440,
              height: 525,
            },
            {
              id: "15",
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILDGbXRXAdvrIHdCkSFk78DrDzVKJWAAIS6jEb9zq5SkxH4h8QEXZkAQADAgADeAADNQQ",
              width: 440,
              height: 648,
            },
            {
              id: "15",
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILQmbXRdk2PUkXPXJ7WWrmQXuq82fgAAIf6jEb9zq5ShzlFtDKit4GAQADAgADeAADNQQ",
              width: 440,
              height: 649,
            },
            {
              id: "16",
              src: "https://login.sendpulse.com/api/telegram-service/guest/messages/media/?bot_id=66a51f1e70b785b77d05e416&file_id=AgACAgIAAxkBAAILXWbXRg1GI6SmxBL-apoCtaBnkkt2AAIm6jEb9zq5SjPuooxVepzzAQADAgADeAADNQQ",
              width: 440,
              height: 649,
            },
          ],
        },
        bgMobileSrc: "/assets/finalSurpriseMobeliBg.png",
      },
    },
  ],
};
