"use client";

import { SectionFinalSurprise } from "@/components/Sections/SectionFinalSurprise/section/SectionFinalSurprise";
import SectionFirst from "@/components/Sections/SectionFirst";
import SectionFreeInput from "@/components/Sections/SectionFreeInput";
import SectionImageQuestion from "@/components/Sections/SectionImageQuestion";
import { SectionVariantQuestion } from "@/components/Sections/SectionVariantQuestion/section/SectionVariantQuestion";
import { questTest } from "@/testContent/questTest";
import { useState } from "react";

export interface Components {
  component: (onClick: () => void, key: number) => JSX.Element;
  isAllowed: boolean;
}

export default function Home(): JSX.Element {
  const [components, setComponents] = useState<Components[]>([
    {
      component: (onClick, key) => {
        return (
          <SectionFirst
            key={key}
            titlePhoto={questTest.sectionFirst.titlePhoto}
            title={questTest.sectionFirst.title}
            bgImg={questTest.sectionFirst.bgImg}
            buttonTitle={questTest.sectionFirst.buttonTitle}
            onAllowNextSlide={onClick}
          />
        );
      },
      isAllowed: true,
    },
    {
      component: (onClick, key) => {
        return (
          <SectionVariantQuestion
            key={key}
            name={questTest.name}
            question={questTest.sectionVariantFirstPhoto.question}
            answer={questTest.sectionVariantFirstPhoto.answer}
            id={questTest.sectionVariantFirstPhoto.id}
            blockImage={questTest.sectionVariantFirstPhoto.blockImage}
            nextSectionId={questTest.sectionVariantFirstPhoto.nextSectionId}
            title={questTest.sectionVariantFirstPhoto.title}
            onAllowNextSlide={onClick}
          />
        );
      },
      isAllowed: false,
    },
    {
      component: (onClick, key) => {
        return (
          <SectionFreeInput
            key={key}
            name={questTest.name}
            question={questTest.sectionFreeInputFirstPhoto.question}
            answer={questTest.sectionFreeInputFirstPhoto.answer}
            id={questTest.sectionFreeInputFirstPhoto.id}
            blockImage={questTest.sectionFreeInputFirstPhoto.blockImage}
            nextSectionId={questTest.sectionFreeInputFirstPhoto.nextSectionId}
            title={questTest.sectionFreeInputFirstPhoto.title}
            onAllowNextSlide={onClick}
          />
        );
      },
      isAllowed: false,
    },

    {
      component: (onClick, key) => {
        return (
          <SectionImageQuestion
            key={key}
            name={questTest.name}
            question={questTest.sectionImageQuestion.question}
            answer={questTest.sectionImageQuestion.answer}
            id={questTest.sectionImageQuestion.id}
            blockImage={questTest.sectionImageQuestion.blockImage}
            nextSectionId={questTest.sectionImageQuestion.nextSectionId}
            title={questTest.sectionImageQuestion.title}
            onAllowNextSlide={onClick}
          />
        );
      },
      isAllowed: false,
    },

    {
      component: (onClick, key) => {
        return (
          <SectionFinalSurprise
            key={key}
            name={questTest.name}
            title={questTest.sectionFinalSurprise.title}
            wishersData={questTest.sectionFinalSurprise.wishersData}
          />
        );
      },
      isAllowed: false,
    },
  ]);

  const onAllowNextSlide = (componentIndex: number) => {
    setComponents((prevComponents) =>
      prevComponents.map((comp, index) =>
        index === componentIndex
          ? { ...comp, isAllowed: true, isHideButtonConfirm: true }
          : comp,
      ),
    );
  };

  return (
    <main className="page">
      {components.map((component, index) => {
        if (component.isAllowed) {
          return component.component(() => onAllowNextSlide(index + 1), index);
        }
        return null;
      })}
    </main>
  );
}
