"use client";

import { SectionFinalSurprise } from "@/components/Sections/SectionFinalSurprise/section/SectionFinalSurprise";
import SectionFirst from "@/components/Sections/SectionFirst";
import SectionFreeInput from "@/components/Sections/SectionFreeInput";
import SectionImageQuestion from "@/components/Sections/SectionImageQuestion";
import { SectionVariantQuestion } from "@/components/Sections/SectionVariantQuestion/section/SectionVariantQuestion";
import { useState } from "react";
import { templateQuest } from "@/testContent/templateQuest/templateQuest";
import { blogQuest } from "@/testContent/blog_quest/blogQuest";

export interface Components {
  component: (onClick: () => void, key: number) => JSX.Element;
  isAllowed: boolean;
}

export default function Home(): JSX.Element {
  const [components, setComponents] = useState<Components[]>([
    {
      component: (onClick, key) => (
        <SectionFirst
          key={key}
          titlePhoto={blogQuest.sectionFirst.titlePhoto}
          title={blogQuest.sectionFirst.title}
          bgImg={blogQuest.sectionFirst.bgImg}
          bgMobileSrc={blogQuest.sectionFirst.bgMobileSrc}
          buttonTitle={blogQuest.sectionFirst.buttonTitle}
          onAllowNextSlide={onClick}
          id={blogQuest.sectionFirst.id}
          nextId={blogQuest.sectionFirst.nextId}
        />
      ),
      isAllowed: true,
    },
    {
      component: (onClick, key) => (
        <SectionVariantQuestion
          key={key}
          name={blogQuest.name}
          lang={blogQuest.lang}
          question={blogQuest.sectionVariantFirstPhoto.question}
          answer={blogQuest.sectionVariantFirstPhoto.answer}
          id={blogQuest.sectionVariantFirstPhoto.id}
          blockImage={blogQuest.sectionVariantFirstPhoto.blockImage}
          nextSectionId={blogQuest.sectionVariantFirstPhoto.nextSectionId}
          title={blogQuest.sectionVariantFirstPhoto.title}
          onAllowNextSlide={onClick}
        />
      ),
      isAllowed: false,
    },
    {
      component: (onClick, key) => (
        <SectionVariantQuestion
          key={key}
          name={blogQuest.name}
          lang={blogQuest.lang}
          question={blogQuest.sectionVariantSecondQuestion.question}
          answer={blogQuest.sectionVariantSecondQuestion.answer}
          id={blogQuest.sectionVariantSecondQuestion.id}
          blockImage={blogQuest.sectionVariantSecondQuestion.blockImage}
          nextSectionId={blogQuest.sectionVariantSecondQuestion.nextSectionId}
          title={blogQuest.sectionVariantSecondQuestion.title}
          onAllowNextSlide={onClick}
        />
      ),
      isAllowed: false,
    },
    {
      component: (onClick, key) => (
        <SectionVariantQuestion
          key={key}
          name={blogQuest.name}
          lang={blogQuest.lang}
          question={blogQuest.sectionVariantThirdQuestion.question}
          answer={blogQuest.sectionVariantThirdQuestion.answer}
          id={blogQuest.sectionVariantThirdQuestion.id}
          blockImage={blogQuest.sectionVariantThirdQuestion.blockImage}
          nextSectionId={blogQuest.sectionVariantThirdQuestion.nextSectionId}
          title={blogQuest.sectionVariantThirdQuestion.title}
          onAllowNextSlide={onClick}
        />
      ),
      isAllowed: false,
    },
    {
      component: (onClick, key) => (
        <SectionVariantQuestion
          key={key}
          name={blogQuest.name}
          lang={blogQuest.lang}
          question={blogQuest.sectionVariantFourthQuestion.question}
          answer={blogQuest.sectionVariantFourthQuestion.answer}
          id={blogQuest.sectionVariantFourthQuestion.id}
          blockImage={blogQuest.sectionVariantFourthQuestion.blockImage}
          nextSectionId={blogQuest.sectionVariantFourthQuestion.nextSectionId}
          title={blogQuest.sectionVariantFourthQuestion.title}
          onAllowNextSlide={onClick}
        />
      ),
      isAllowed: false,
    },
    {
      component: (onClick, key) => (
        <SectionImageQuestion
          key={key}
          name={blogQuest.name}
          lang={blogQuest.lang}
          question={blogQuest.sectionImageFivethQuestion.question}
          answer={blogQuest.sectionImageFivethQuestion.answer}
          id={blogQuest.sectionImageFivethQuestion.id}
          blockImage={blogQuest.sectionImageFivethQuestion.blockImage}
          nextSectionId={blogQuest.sectionImageFivethQuestion.nextSectionId}
          title={blogQuest.sectionImageFivethQuestion.title}
          onAllowNextSlide={onClick}
        />
      ),
      isAllowed: false,
    },
    {
      component: (onClick, key) => (
        <SectionImageQuestion
          key={key}
          name={blogQuest.name}
          lang={blogQuest.lang}
          question={blogQuest.sectionImageSixQuestion.question}
          answer={blogQuest.sectionImageSixQuestion.answer}
          id={blogQuest.sectionImageSixQuestion.id}
          blockImage={blogQuest.sectionImageSixQuestion.blockImage}
          nextSectionId={blogQuest.sectionImageSixQuestion.nextSectionId}
          title={blogQuest.sectionImageSixQuestion.title}
          onAllowNextSlide={onClick}
        />
      ),
      isAllowed: false,
    },
    {
      component: (onClick, key) => (
        <SectionVariantQuestion
          key={key}
          name={blogQuest.name}
          lang={blogQuest.lang}
          question={blogQuest.sectionVariantSevenQuestion.question}
          answer={blogQuest.sectionVariantSevenQuestion.answer}
          id={blogQuest.sectionVariantSevenQuestion.id}
          blockImage={blogQuest.sectionVariantSevenQuestion.blockImage}
          nextSectionId={blogQuest.sectionVariantSevenQuestion.nextSectionId}
          title={blogQuest.sectionVariantSevenQuestion.title}
          onAllowNextSlide={onClick}
        />
      ),
      isAllowed: false,
    },
    {
      component: (onClick, key) => (
        <SectionVariantQuestion
          key={key}
          name={blogQuest.name}
          lang={blogQuest.lang}
          question={blogQuest.sectionVariantEightQuestion.question}
          answer={blogQuest.sectionVariantEightQuestion.answer}
          id={blogQuest.sectionVariantEightQuestion.id}
          blockImage={blogQuest.sectionVariantEightQuestion.blockImage}
          nextSectionId={blogQuest.sectionVariantEightQuestion.nextSectionId}
          title={blogQuest.sectionVariantEightQuestion.title}
          onAllowNextSlide={onClick}
        />
      ),
      isAllowed: false,
    },
    {
      component: (onClick, key) => (
        <SectionVariantQuestion
          key={key}
          name={blogQuest.name}
          lang={blogQuest.lang}
          question={blogQuest.sectionVariantNineQuestion.question}
          answer={blogQuest.sectionVariantNineQuestion.answer}
          id={blogQuest.sectionVariantNineQuestion.id}
          blockImage={blogQuest.sectionVariantNineQuestion.blockImage}
          nextSectionId={blogQuest.sectionVariantNineQuestion.nextSectionId}
          title={blogQuest.sectionVariantNineQuestion.title}
          onAllowNextSlide={onClick}
        />
      ),
      isAllowed: false,
    },
    {
      component: (onClick, key) => (
        <SectionVariantQuestion
          key={key}
          name={blogQuest.name}
          lang={blogQuest.lang}
          question={blogQuest.sectionVariantTenQuestion.question}
          answer={blogQuest.sectionVariantTenQuestion.answer}
          id={blogQuest.sectionVariantTenQuestion.id}
          blockImage={blogQuest.sectionVariantTenQuestion.blockImage}
          nextSectionId={blogQuest.sectionVariantTenQuestion.nextSectionId}
          title={blogQuest.sectionVariantTenQuestion.title}
          onAllowNextSlide={onClick}
        />
      ),
      isAllowed: false,
    },
    {
      component: (onClick, key) => (
        <SectionFinalSurprise
          key={key}
          name={blogQuest.name}
          title={blogQuest.sectionFinalSurprise.title}
          wishersData={blogQuest.sectionFinalSurprise.wishersData}
        />
      ),
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
