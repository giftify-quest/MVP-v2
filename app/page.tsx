"use client";

import { VariantQuestion } from "@/components/QuestionWithAnswerVariant/VariantQuestion";
import { SectionFinalSurprise } from "@/components/Sections/SectionFinalSurprise/SectionFinalSurprise";
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
      <SectionFinalSurprise />
    </main>
  );
}
