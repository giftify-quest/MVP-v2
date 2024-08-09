import { TypeSectionsQuest } from "@/types/quest";
import { IQuestionImage, ISectionImageQuestion } from "../types";
import { TAnswerComponent } from "@/types/answer";
import { TypeSections } from "@/types/section";

export function isSectionImageQuestion(
  section: TypeSectionsQuest,
): section is ISectionImageQuestion<IQuestionImage, TAnswerComponent> {
  return (
    (section as ISectionImageQuestion<IQuestionImage, TAnswerComponent>)
      .type === TypeSections.sectionImage
  );
}
