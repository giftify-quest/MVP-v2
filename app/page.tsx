"use client";

import { VariantQuestionSections } from "@/components/sections/VariantsQustionSections/VariantsQuestionSection";
import { testAnswerContent } from "@/testContent/variantAnswerTestContent";
import { variantSectionTestContent } from "@/testContent/variantSectionTest";



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

        
    </main>
  );
}
