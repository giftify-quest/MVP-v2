import SectionFinalSurprise from "@/components/Sections/SectionFinalSurprise";
import SectionFirst from "@/components/Sections/SectionFirst";
import SectionImageQuestion from "@/components/Sections/SectionImageQuestion";
import SectionVariantQuestion from "@/components/Sections/SectionVariantQuestion";
import SectionFreeInput from "@/components/Sections/SectionFreeInput";
import { useState } from "react";
import { Language } from "@/types";
import { IQuest, TypeSectionsQuest } from "@/types/quest";
import { TypeSections } from "@/types/section";
import { isSectionFirst } from "@/components/Sections/SectionFirst/helpers";
import { isSectionFinalSurprise } from "@/components/Sections/SectionFinalSurprise/helpers";
import { isSectionImageQuestion } from "@/components/Sections/SectionImageQuestion/helpers";
import { isSectionVariant } from "@/components/Sections/SectionVariantQuestion/helpers";
import { isSectionFreeInput } from "@/components/Sections/SectionFreeInput/helpers";

interface CreateQuestProps {
  quest: IQuest;
}

interface Components {
  component: JSX.Element;
  isAllowed: boolean;
}

export const CreateQuest: React.FC<CreateQuestProps> = ({ quest }) => {
  const [state, setState] = useState<Components[]>(
    initialState(quest, onAllowNextSlide),
  );

  function onAllowNextSlide(componentIndex: number) {
    setState((prevComponents) =>
      prevComponents.map((comp, index) =>
        index === componentIndex
          ? { ...comp, isAllowed: true, isHideButtonConfirm: true }
          : comp,
      ),
    );
  }

  return (
    <>
      {state.map((item) => {
        return item.isAllowed ? item.component : null;
      })}
    </>
  );
};

function initialState(q: IQuest, func: (num: number) => void): Components[] {
  const { name, lang, sections } = q;
  const components: Components[] = sections.map((item, index) => {
    return {
      component: getSection(item, name, lang, func, index + 1),
      isAllowed: item.type === TypeSections.firstSection,
    };
  });
  return components;
}

function getSection(
  section: TypeSectionsQuest,
  name: string,
  lang: Language,
  onAllowNextSlide: (index: number) => void,
  index: number,
) {
  if (section.type === TypeSections.firstSection && isSectionFirst(section)) {
    return (
      <SectionFirst
        key={section.id}
        name={name}
        lang={lang}
        data={section}
        onAllowNextSlide={() => onAllowNextSlide(index)}
      />
    );
  } else if (
    section.type === TypeSections.sectionFinalSurprise &&
    isSectionFinalSurprise(section)
  ) {
    return (
      <SectionFinalSurprise
        key={section.id}
        lang={lang}
        name={name}
        data={section}
      />
    );
  } else if (
    section.type === TypeSections.sectionImage &&
    isSectionImageQuestion(section)
  ) {
    return (
      <SectionImageQuestion
        key={section.id}
        name={name}
        lang={lang}
        data={section}
        onAllowNextSlide={() => onAllowNextSlide(index)}
      />
    );
  } else if (
    section.type === TypeSections.sectionVariant &&
    isSectionVariant(section)
  ) {
    return (
      <SectionVariantQuestion
        key={section.id}
        name={name}
        lang={lang}
        data={section}
        onAllowNextSlide={() => onAllowNextSlide(index)}
      />
    );
  } else if (
    section.type === TypeSections.sectionWithFreeInput &&
    isSectionFreeInput(section)
  ) {
    return (
      <SectionFreeInput
        data={section}
        key={section.id}
        name={name}
        lang={lang}
        onAllowNextSlide={() => onAllowNextSlide(index)}
      />
    );
  } else {
    return <h1>Component not found</h1>;
  }
}

// function getSection(
//   section: TypeSectionsQuest,
//   name: string,
//   lang: Language,
//   onAllowNextSlide: (index: number) => void,
//   index: number,
// ) {
//   switch (section.type) {
//     case TypeSections.firstSection:
//       if (isSectionFirst(section)) {
//         return (
//           <SectionFirst
//             key={section.id}
//             name={name}
//             lang={lang}
//             data={section}
//             onAllowNextSlide={() => onAllowNextSlide(index)}
//           />
//         );
//       } else {
//         return <h1>Component not found</h1>;
//       }

//     case TypeSections.sectionFinalSurprise:
//       if (isSectionFinalSurprise(section)) {
//         return (
//           <SectionFinalSurprise
//             key={section.id}
//             lang={lang}
//             name={name}
//             data={section}
//           />
//         );
//       } else {
//         return <h1>Component not found</h1>;
//       }
//     case TypeSections.sectionImage:
//       if (isSectionImageQuestion(section)) {
//         return (
//           <SectionImageQuestion
//             key={section.id}
//             name={name}
//             lang={lang}
//             data={section}
//             onAllowNextSlide={() => onAllowNextSlide(index)}
//           />
//         );
//       } else {
//         return <h1>Component not found</h1>;
//       }
//     case TypeSections.sectionVariant:
//       if (isSectionVariant(section)) {
//         return (
//           <SectionVariantQuestion
//             key={section.id}
//             name={name}
//             lang={lang}
//             data={section}
//             onAllowNextSlide={() => onAllowNextSlide(index)}
//           />
//         );
//       } else {
//         return <h1>Component not found</h1>;
//       }
//     case TypeSections.sectionWithFreeInput:
//       if (isSectionFreeInput(section)) {
//         return (
//           <SectionFreeInput
//             data={section}
//             key={section.id}
//             name={name}
//             lang={lang}
//             onAllowNextSlide={() => onAllowNextSlide(index)}
//           />
//         );
//       } else {
//         return <h1>Component not found</h1>;
//       }

//     default:
//       return <h1>Component not found</h1>;
//   }
// }
