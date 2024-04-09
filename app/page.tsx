"use client";


import { SectionFreeInput } from "@/components/Sections/SectionFreeInput/SectionFreeInput";
import { TextField } from "@/components/reusableComponent/TextField/TextField";
import { VariantQuestionSections } from "@/components/sections/VariantsQustionSections/VariantsQuestionSection";
import { SectionFreeInputTestContent } from "@/testContent/sectionFreeInput";
import { testAnswerContent } from "@/testContent/variantAnswerTestContent";
import { variantSectionTestContent } from "@/testContent/variantSectionTest";
import { testContent } from "@/testContent/variantTestContent";

export default function Home() {
  return (
    <main
      style={{
        background: "#F6F5DE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 40px",
      }}
    >
    <VariantQuestionSections id={testAnswerContent.id}
        answer={variantSectionTestContent.answer}
        nextSectionId={""}
        underSectionImage={variantSectionTestContent.underSectionImage}
        title={""}
        question={variantSectionTestContent.question} />
      {/* <SectionFreeInput
        question={SectionFreeInputTestContent.question}
        answer={SectionFreeInputTestContent.answer}
        id={SectionFreeInputTestContent.id}
        nextSectionId={SectionFreeInputTestContent.nextSectionId}
        underSectionImage={SectionFreeInputTestContent.underSectionImage}
      /> */}
    </main>
  );
}
