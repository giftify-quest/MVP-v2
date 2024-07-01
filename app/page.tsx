"use client";

import { SectionFinalSurprise } from "@/components/Sections/SectionFinalSurprise/section/SectionFinalSurprise";
import SectionFirst from "@/components/Sections/SectionFirst";
import SectionFreeInput from "@/components/Sections/SectionFreeInput";
import SectionImageQuestion from "@/components/Sections/SectionImageQuestion";
import { SectionVariantQuestion } from "@/components/Sections/SectionVariantQuestion/section/SectionVariantQuestion";
import { questTest } from "@/testContent/questTest";
import { useEffect, useState } from "react";
import { firstQuest } from "@/testContent/firstQuest";
import { templateQuest } from "@/testContent/templateQuest/templateQuest";
import { assignRandomImages } from "@/hooks/setRandomBackground";

export interface Components {
  component: (onClick: () => void, key: number) => JSX.Element;
  isAllowed: boolean;
}

export default function Home(): JSX.Element {
  useEffect(() => {
    assignRandomImages(templateQuest);
  }, []);

  const [components, setComponents] = useState<Components[]>([
    {
      component: (onClick, key) => {
        return (
          <SectionFirst
            key={key}
            titlePhoto={templateQuest.sectionFirst.titlePhoto}
            title={templateQuest.sectionFirst.title}
            bgImg={templateQuest.sectionFirst.bgImg}
            bgMobileSrc={templateQuest.sectionFirst.bgMobileSrc}
            buttonTitle={templateQuest.sectionFirst.buttonTitle}
            onAllowNextSlide={onClick}
            id={templateQuest.sectionFirst.id}
            nextId={templateQuest.sectionFirst.nextId}
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
            name={templateQuest.name}
            question={templateQuest.sectionVariantFirstPhoto.question}
            answer={templateQuest.sectionVariantFirstPhoto.answer}
            id={templateQuest.sectionVariantFirstPhoto.id}
            blockImage={templateQuest.sectionVariantFirstPhoto.blockImage}
            nextSectionId={templateQuest.sectionVariantFirstPhoto.nextSectionId}
            title={templateQuest.sectionVariantFirstPhoto.title}
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
            name={templateQuest.name}
            question={templateQuest.sectionFreeInputFirstPhoto.question}
            answer={templateQuest.sectionFreeInputFirstPhoto.answer}
            id={templateQuest.sectionFreeInputFirstPhoto.id}
            blockImage={templateQuest.sectionFreeInputFirstPhoto.blockImage}
            nextSectionId={
              templateQuest.sectionFreeInputFirstPhoto.nextSectionId
            }
            title={templateQuest.sectionFreeInputFirstPhoto.title}
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
            name={templateQuest.name}
            question={templateQuest.sectionImageQuestion.question}
            answer={templateQuest.sectionImageQuestion.answer}
            id={templateQuest.sectionImageQuestion.id}
            blockImage={templateQuest.sectionImageQuestion.blockImage}
            nextSectionId={templateQuest.sectionImageQuestion.nextSectionId}
            title={templateQuest.sectionImageQuestion.title}
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
            name={templateQuest.name}
            question={templateQuest.sectionInputFood.question}
            answer={templateQuest.sectionInputFood.answer}
            id={templateQuest.sectionInputFood.id}
            blockImage={templateQuest.sectionInputFood.blockImage}
            nextSectionId={templateQuest.sectionInputFood.nextSectionId}
            title={templateQuest.sectionInputFood.title}
            onAllowNextSlide={onClick}
          />
        );
      },
      isAllowed: false,
    },
    {
      component: (onClick, key) => {
        return (
          <SectionVariantQuestion
            key={key}
            name={templateQuest.name}
            question={templateQuest.sectionVariantRelationShip.question}
            answer={templateQuest.sectionVariantRelationShip.answer}
            id={templateQuest.sectionVariantRelationShip.id}
            blockImage={templateQuest.sectionVariantRelationShip.blockImage}
            nextSectionId={
              templateQuest.sectionVariantRelationShip.nextSectionId
            }
            title={templateQuest.sectionVariantRelationShip.title}
            onAllowNextSlide={onClick}
          />
        );
      },
      isAllowed: false,
    },
    {
      component: (onClick, key) => {
        return (
          <SectionVariantQuestion
            key={key}
            name={templateQuest.name}
            question={templateQuest.sectionVariantTheMost.question}
            answer={templateQuest.sectionVariantTheMost.answer}
            id={templateQuest.sectionVariantTheMost.id}
            blockImage={templateQuest.sectionVariantTheMost.blockImage}
            nextSectionId={templateQuest.sectionVariantTheMost.nextSectionId}
            title={templateQuest.sectionVariantTheMost.title}
            onAllowNextSlide={onClick}
          />
        );
      },
      isAllowed: false,
    },
    {
      component: (onClick, key) => {
        return (
          <SectionVariantQuestion
            key={key}
            name={templateQuest.name}
            question={templateQuest.sectionVariantMomentsTogether.question}
            answer={templateQuest.sectionVariantMomentsTogether.answer}
            id={templateQuest.sectionVariantMomentsTogether.id}
            blockImage={templateQuest.sectionVariantMomentsTogether.blockImage}
            nextSectionId={
              templateQuest.sectionVariantMomentsTogether.nextSectionId
            }
            title={templateQuest.sectionVariantMomentsTogether.title}
            onAllowNextSlide={onClick}
          />
        );
      },
      isAllowed: false,
    },
    {
      component: (onClick, key) => {
        return (
          <SectionVariantQuestion
            key={key}
            name={templateQuest.name}
            question={templateQuest.sectionVariantAdventuresTogether.question}
            answer={templateQuest.sectionVariantAdventuresTogether.answer}
            id={templateQuest.sectionVariantAdventuresTogether.id}
            blockImage={
              templateQuest.sectionVariantAdventuresTogether.blockImage
            }
            nextSectionId={
              templateQuest.sectionVariantAdventuresTogether.nextSectionId
            }
            title={templateQuest.sectionVariantAdventuresTogether.title}
            onAllowNextSlide={onClick}
          />
        );
      },
      isAllowed: false,
    },
    {
      component: (onClick, key) => {
        return (
          <SectionVariantQuestion
            key={key}
            name={templateQuest.name}
            question={templateQuest.sectionVariantTogetherWeCan.question}
            answer={templateQuest.sectionVariantTogetherWeCan.answer}
            id={templateQuest.sectionVariantTogetherWeCan.id}
            blockImage={templateQuest.sectionVariantTogetherWeCan.blockImage}
            nextSectionId={
              templateQuest.sectionVariantTogetherWeCan.nextSectionId
            }
            title={templateQuest.sectionVariantTogetherWeCan.title}
            onAllowNextSlide={onClick}
          />
        );
      },
      isAllowed: false,
    },
    {
      component: (onClick, key) => {
        return (
          <SectionVariantQuestion
            key={key}
            name={templateQuest.name}
            question={templateQuest.sectionVariantFinal.question}
            answer={templateQuest.sectionVariantFinal.answer}
            id={templateQuest.sectionVariantFinal.id}
            blockImage={templateQuest.sectionVariantFinal.blockImage}
            nextSectionId={templateQuest.sectionVariantFinal.nextSectionId}
            title={templateQuest.sectionVariantFinal.title}
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
            name={templateQuest.name}
            title={templateQuest.sectionFinalSurprise.title}
            wishersData={templateQuest.sectionFinalSurprise.wishersData}
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
