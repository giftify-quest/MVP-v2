"use client";

import { VariantQuestion } from "@/components/QuestionWithAnswerVariant/VariantQuestion";
import { FramedPhoto } from "@/components/reusableComponent/FramedPhoto/FramedPhoto";
import { VariantQuestionSections } from "@/components/sections/VariantsQustionSections/VariantsQuestionSection";
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
   
      <VariantQuestionSections
            bgImage={testContent.bgImage}
            title={testContent.title}
            questionText={testContent.questionText}
            answers={testContent.answers}
            buttonText={testContent.buttonText}
            wrongAnswerText={testContent.wrongAnswerText}
            wrongAnswerButtonText={testContent.wrongAnswerButtonText}
            multipleAnswer={testContent.multipleAnswer} />

      <FramedPhoto imageSrc={""} text={""}/>
    </main>
  );
}
