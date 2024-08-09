import { TypeSectionsQuest } from "@/types/quest";
import { IQuestionWithFreeInput, ISectionFreeInput } from "../types";
import { TypeSections } from "@/types/section";
import { TAnswerComponent } from "@/types/answer";

export function isSectionFreeInput(
  section: TypeSectionsQuest,
): section is ISectionFreeInput<IQuestionWithFreeInput, TAnswerComponent> {
  return (
    (section as ISectionFreeInput<IQuestionWithFreeInput, TAnswerComponent>)
      .type === TypeSections.sectionWithFreeInput
  );
}
