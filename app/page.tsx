"use client";

import { SectionFinalSurprise } from "@/components/Sections/SectionFinalSurprise/section/SectionFinalSurprise";
import SectionFirst from "@/components/Sections/SectionFirst";
import SectionFreeInput from "@/components/Sections/SectionFreeInput";
import SectionImageQuestion from "@/components/Sections/SectionImageQuestion";
import { SectionVariantQuestion } from "@/components/Sections/SectionVariantQuestion/section/SectionVariantQuestion";
import { questTest } from "@/testContent/questTest";
import { useState } from "react";
import { firstQuest } from "@/testContent/firstQuest";

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
            titlePhoto={firstQuest.sectionFirst.titlePhoto}
            title={firstQuest.sectionFirst.title}
            bgImg={questTest.sectionFirst.bgImg}
            bgMobileSrc={firstQuest.sectionFirst.bgMobileSrc}
            buttonTitle={firstQuest.sectionFirst.buttonTitle}
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
            question={firstQuest.sectionVariantFirstPhoto.question}
            answer={firstQuest.sectionVariantFirstPhoto.answer}
            id={firstQuest.sectionVariantFirstPhoto.id}
            blockImage={firstQuest.sectionVariantFirstPhoto.blockImage}
            nextSectionId={firstQuest.sectionVariantFirstPhoto.nextSectionId}
            title={firstQuest.sectionVariantFirstPhoto.title}
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
            name={firstQuest.name}
            question={firstQuest.sectionFreeInputFirstPhoto.question}
            answer={firstQuest.sectionFreeInputFirstPhoto.answer}
            id={firstQuest.sectionFreeInputFirstPhoto.id}
            blockImage={firstQuest.sectionFreeInputFirstPhoto.blockImage}
            nextSectionId={firstQuest.sectionFreeInputFirstPhoto.nextSectionId}
            title={firstQuest.sectionFreeInputFirstPhoto.title}
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
            question={firstQuest.sectionImageQuestion.question}
            answer={firstQuest.sectionImageQuestion.answer}
            id={firstQuest.sectionImageQuestion.id}
            blockImage={firstQuest.sectionImageQuestion.blockImage}
            nextSectionId={firstQuest.sectionImageQuestion.nextSectionId}
            title={firstQuest.sectionImageQuestion.title}
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
            name={firstQuest.name}
            question={firstQuest.sectionInputFood.question}
            answer={firstQuest.sectionInputFood.answer}
            id={firstQuest.sectionInputFood.id}
            blockImage={firstQuest.sectionInputFood.blockImage}
            nextSectionId={firstQuest.sectionInputFood.nextSectionId}
            title={firstQuest.sectionInputFood.title}
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
            name={questTest.name}
            question={firstQuest.sectionVariantRelationShip.question}
            answer={firstQuest.sectionVariantRelationShip.answer}
            id={firstQuest.sectionVariantRelationShip.id}
            blockImage={firstQuest.sectionVariantRelationShip.blockImage}
            nextSectionId={firstQuest.sectionVariantRelationShip.nextSectionId}
            title={firstQuest.sectionVariantRelationShip.title}
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
            name={questTest.name}
            question={firstQuest.sectionVariantTheMost.question}
            answer={firstQuest.sectionVariantTheMost.answer}
            id={firstQuest.sectionVariantTheMost.id}
            blockImage={firstQuest.sectionVariantTheMost.blockImage}
            nextSectionId={firstQuest.sectionVariantTheMost.nextSectionId}
            title={firstQuest.sectionVariantTheMost.title}
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
            name={questTest.name}
            question={firstQuest.sectionVariantMomentsTogether.question}
            answer={firstQuest.sectionVariantMomentsTogether.answer}
            id={firstQuest.sectionVariantMomentsTogether.id}
            blockImage={firstQuest.sectionVariantMomentsTogether.blockImage}
            nextSectionId={
              firstQuest.sectionVariantMomentsTogether.nextSectionId
            }
            title={firstQuest.sectionVariantMomentsTogether.title}
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
            name={questTest.name}
            question={firstQuest.sectionVariantAdventuresTogether.question}
            answer={firstQuest.sectionVariantAdventuresTogether.answer}
            id={firstQuest.sectionVariantAdventuresTogether.id}
            blockImage={firstQuest.sectionVariantAdventuresTogether.blockImage}
            nextSectionId={
              firstQuest.sectionVariantAdventuresTogether.nextSectionId
            }
            title={firstQuest.sectionVariantAdventuresTogether.title}
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
            name={questTest.name}
            question={firstQuest.sectionVariantTogetherWeCan.question}
            answer={firstQuest.sectionVariantTogetherWeCan.answer}
            id={firstQuest.sectionVariantTogetherWeCan.id}
            blockImage={firstQuest.sectionVariantTogetherWeCan.blockImage}
            nextSectionId={firstQuest.sectionVariantTogetherWeCan.nextSectionId}
            title={firstQuest.sectionVariantTogetherWeCan.title}
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
            name={questTest.name}
            question={firstQuest.sectionVariantFinal.question}
            answer={firstQuest.sectionVariantFinal.answer}
            id={firstQuest.sectionVariantFinal.id}
            blockImage={firstQuest.sectionVariantFinal.blockImage}
            nextSectionId={firstQuest.sectionVariantFinal.nextSectionId}
            title={firstQuest.sectionVariantFinal.title}
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
            name={firstQuest.name}
            title={firstQuest.sectionFinalSurprise.title}
            wishersData={firstQuest.sectionFinalSurprise.wishersData}
          />
        );
      },
      isAllowed: true,
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
