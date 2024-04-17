"use client";

import { SectionFinalSurprise } from "@/components/Sections/SectionFinalSurprise/section/SectionFinalSurprise";
import SectionFreeInput from "@/components/Sections/SectionFreeInput";
import { SectionVariantQuestion } from "@/components/Sections/SectionVariantQuestion/section/SectionVariantQuestion";
import { sectionFinalSurprise } from "@/testContent/sectionFinalSurprise";

import { SectionFreeInputTestContent } from "@/testContent/sectionFreeInput";
import { variantTestContent } from "@/testContent/variantTestContent";

export default function Home() {
  return (
    <main className="page">
      <SectionFreeInput
        question={SectionFreeInputTestContent.question}
        answer={SectionFreeInputTestContent.answer}
        id={SectionFreeInputTestContent.id}
        blockImage={SectionFreeInputTestContent.blockImage}
        nextSectionId={SectionFreeInputTestContent.nextSectionId}
        title={SectionFreeInputTestContent.title}
      />
      <SectionVariantQuestion
        question={variantTestContent.question}
        answer={variantTestContent.answer}
        id={variantTestContent.id}
        blockImage={variantTestContent.blockImage}
        nextSectionId={variantTestContent.nextSectionId}
        title={variantTestContent.title}
      />
      <SectionFinalSurprise
        title={sectionFinalSurprise.title}
        wishersData={sectionFinalSurprise.wishersData}
      />
    </main>
  );
}
