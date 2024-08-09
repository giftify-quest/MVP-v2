import { TypeSections } from "@/types/section";
import { ISectionFirst } from "../types";
import { TypeSectionsQuest } from "@/types/quest";

export function isSectionFirst(
  section: TypeSectionsQuest,
): section is ISectionFirst {
  return (section as ISectionFirst).type === TypeSections.firstSection;
}
