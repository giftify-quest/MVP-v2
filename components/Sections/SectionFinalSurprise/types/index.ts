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

export interface ISectionFinalSurpriseProps extends ISectionFinalSurprise {
  name: string;
}

export interface IWishesFinalSurprise {
  textConfirmButton: string;
  bgSrc: string;
  wishers: {
    wisher: string;
  }[];
  feedPhotos: IFeedPhotosComponent
}

export interface IWishesFinalSurpriseProps extends IWishesFinalSurprise {
  name: string;
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