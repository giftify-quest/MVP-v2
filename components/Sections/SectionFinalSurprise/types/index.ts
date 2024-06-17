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
  wishersData: IWishesFinalSurprise;
}

export interface ISectionFinalSurpriseProps extends ISectionFinalSurprise {
  name: string;
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
