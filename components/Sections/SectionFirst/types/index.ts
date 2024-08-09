import { Language } from "@/types";
import { TypeSections } from "@/types/section";

export interface TitleProps {
  mainText: string;
  secondaryText: string;
  thirdText?: string;
}

export interface TitlePhotoProps {
  imgSrc: string;
  dateEvent: string;
  dateMinutes: string;
  dateHours: string;
  dateDays: string;
  dateYears: string;
}

export interface ISectionFirst {
  type: TypeSections.firstSection;
  id: string;
  nextId: string;
  titlePhoto: TitlePhotoProps;
  title: TitleProps;
  bgImg: string;
  buttonTitle: string;
  bgMobileSrc: string;
}

export interface ISectionFirstProps {
  data: ISectionFirst;
  name: string;
  lang: Language;
  onAllowNextSlide?: () => void;
}
