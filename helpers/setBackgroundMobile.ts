type TNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const setBackgroundMobile = (number: TNumber): string => {
  const backgrounds: string[] = [
    "",
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
  ];
  return backgrounds[number];
};
