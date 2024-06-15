import { IFirstQuest } from "@/testContent/firstQuest";

const images = [
  "/assets/bgSrcQuestion/bgSrcQuestion1.png",
  "/assets/bgSrcQuestion/bgSrcQuestion2.png",
  "/assets/bgSrcQuestion/bgSrcQuestion3.png",
  "/assets/bgSrcQuestion/bgSrcQuestion5.png",
  "/assets/bgSrcQuestion/bgSrcQuestion6.png",
  "/assets/bgSrcQuestion/bgSrcQuestion7.png",
  "/assets/bgSrcQuestion/bgSrcQuestion8.png",
  "/assets/bgSrcQuestion/bgSrcQuestion9.png",
];

const mobileImages = [
  "/assets/bgSrcMobileQuestion/bgmobile1.png",
  "/assets/bgSrcMobileQuestion/bgmobile2.png",
  "/assets/bgSrcMobileQuestion/bgmobile3.png",
  "/assets/bgSrcMobileQuestion/bgmobile4.png",
  "/assets/bgSrcMobileQuestion/bgmobile5.png",
  "/assets/bgSrcMobileQuestion/bgmobile6.png",
  "/assets/bgSrcMobileQuestion/bgmobile7.png",
  "/assets/bgSrcMobileQuestion/bgmobile8.png",
  "/assets/bgSrcMobileQuestion/bgmobile9.png",
  "/assets/bgSrcMobileQuestion/bgmobile10.png",
  "/assets/bgSrcMobileQuestion/bgmobile11.png",
];

function getRandomImage(imagesArray: string[]) {
  const randomIndex = Math.floor(Math.random() * imagesArray.length);
  return imagesArray[randomIndex];
}

type SectionKey =
  | "sectionVariantFirstPhoto"
  | "sectionFreeInputFirstPhoto"
  | "sectionImageQuestion"
  | "sectionInputFood"
  | "sectionVariantRelationShip"
  | "sectionVariantTheMost"
  | "sectionVariantMomentsTogether"
  | "sectionVariantAdventuresTogether"
  | "sectionVariantTogetherWeCan"
  | "sectionVariantFinal";

export const assignRandomImages = (testObject: IFirstQuest): void => {
  const sections: SectionKey[] = [
    "sectionVariantFirstPhoto",
    "sectionFreeInputFirstPhoto",
    "sectionImageQuestion",
    "sectionInputFood",
    "sectionVariantRelationShip",
    "sectionVariantTheMost",
    "sectionVariantMomentsTogether",
    "sectionVariantAdventuresTogether",
    "sectionVariantTogetherWeCan",
    "sectionVariantFinal",
  ];

  sections.forEach((section) => {
    const sectionObj = testObject[section];
    if (sectionObj && sectionObj.question) {
      sectionObj.question.bgSrcQuestion = getRandomImage(images);
      sectionObj.question.bgMobile = getRandomImage(mobileImages);
    }
  });
};
