import { ITest } from "@/testContent/firstQuest";

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

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
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

export const assignRandomImages = (testObject: ITest) => {
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
      sectionObj.question.bgSrcQuestion = getRandomImage();
    }
  });
};
