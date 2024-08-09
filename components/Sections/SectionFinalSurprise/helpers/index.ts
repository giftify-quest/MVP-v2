import { TypeSectionsQuest } from "@/types/quest";
import { ISectionFinalSurprise } from "../types";
import { TypeSections } from "@/types/section";

export function isSectionFinalSurprise(
  section: TypeSectionsQuest,
): section is ISectionFinalSurprise {
  return (
    (section as ISectionFinalSurprise).type ===
    TypeSections.sectionFinalSurprise
  );
}
