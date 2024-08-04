import { TypeSectionsQuest } from "@/types/quest";
import { IQuestionVariant, ISectionVariant } from "../types";
import { TAnswerComponent } from "@/types/answer";
import { TypeSections } from "@/types/section";

export function isSectionVariant(
  section: TypeSectionsQuest,
): section is ISectionVariant<IQuestionVariant, TAnswerComponent> {
  return (
    (section as ISectionVariant<IQuestionVariant, TAnswerComponent>).type ===
    TypeSections.sectionVariant
  );
}
