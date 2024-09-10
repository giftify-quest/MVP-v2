import { ISectionFinalSurprise } from "@/components/Sections/SectionFinalSurprise/types";
import { ISectionFirst } from "@/components/Sections/SectionFirst/types";
import {
  IQuestionWithFreeInput,
  ISectionFreeInput,
} from "@/components/Sections/SectionFreeInput/types";
import {
  IQuestionImage,
  ISectionImageQuestion,
} from "@/components/Sections/SectionImageQuestion/types";
import {
  IQuestionVariant,
  ISectionVariant,
} from "@/components/Sections/SectionVariantQuestion/types";
import { TAnswerComponent } from "../answer";
import { Language } from "..";

export type TypeSectionsQuest =
  | ISectionFirst
  | ISectionVariant<IQuestionVariant, TAnswerComponent>
  | ISectionFreeInput<IQuestionWithFreeInput, TAnswerComponent>
  | ISectionImageQuestion<IQuestionImage, TAnswerComponent>
  | ISectionFinalSurprise;

export interface IQuest {
  name: string;
  password: string;
  lang: Language;
  sections: TypeSectionsQuest[];
}
