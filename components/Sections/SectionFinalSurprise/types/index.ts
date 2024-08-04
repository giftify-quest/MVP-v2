import { ITitleSection, Language } from "@/types";
import { TypeSections } from "@/types/section";

export interface ICollage {
  collage: {
    id: string;
    src: string;
    width: number;
    height: number;
  }[];
}

export interface ISectionFinalSurprise {
  id: string;
  title: ITitleSection;
  wishersData: IWishesFinalSurprise;
  type: TypeSections.sectionFinalSurprise;
}

export interface ISectionFinalSurpriseProps {
  data: ISectionFinalSurprise;
  name: string;
  lang: Language;
}

export interface IWishesFinalSurprise {
  nextId: string;
  textConfirmButton: string;
  bgSrc: string;
  bgMobileSrc: string;
  wishers: {
    wisher: string;
  }[];
  feedPhotos: IFeedPhotosComponent;
  musicSrc: string;
}

export interface IWishesFinalSurpriseProps extends IWishesFinalSurprise {
  name: string;
}

export interface IFeedPhotosComponent {
  id: string;
  title: string;
  subTitle: string;
  collage: {
    id: string;
    src: string;
    width: number;
    height: number;
  }[];
}
