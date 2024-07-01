type TNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export const setBackgroundDesktop = (number: TNumber): string => {
  const backgrounds: string[] = [
    "",
    "/assets/bgSrcQuestion/bgSrcQuestion1.png",
    "/assets/bgSrcQuestion/bgSrcQuestion2.png",
    "/assets/bgSrcQuestion/bgSrcQuestion3.png",
    "/assets/bgSrcQuestion/bgSrcQuestion5.png",
    "/assets/bgSrcQuestion/bgSrcQuestion6.png",
    "/assets/bgSrcQuestion/bgSrcQuestion7.png",
    "/assets/bgSrcQuestion/bgSrcQuestion8.png",
    "/assets/bgSrcQuestion/bgSrcQuestion9.png",
  ];
  return backgrounds[number];
};
