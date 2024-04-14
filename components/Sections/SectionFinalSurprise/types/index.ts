import { ITitleSection } from "@/types";

export interface ICollage {
  collage: {
    id: string;
    src: string;
    width: number;
    height: number;
  }[];
}

export interface ISectionFinalSurprise {
  title: ITitleSection;
  wishersData: IWishesFinalSurprise,
}

export interface IWishesFinalSurprise {
  textConfirmButton: string;
  bgSrc: string;
  wishers: {
    wisher: string;
    name: string;
  }[];
  feedPhotos: IFeedPhotosComponent
}

export interface IFeedPhotosComponent {
  title: string,
  subTitle: string,
  collage: {
      id: string,
      src: string,
      width: number,
      height: number
  }[]
}