"use client";

import { VariantQuestion } from "@/components/QuestionWithAnswerVariant/VariantQuestion";
import { SectionFreeInput } from "@/components/Sections/SectionFreeInput/SectionFreeInput";
import { TextField } from "@/components/reusableComponent/TextField/TextField";
import { SectionFreeInputTestContent } from "@/testContent/sectionFreeInput";
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
      {/* <VariantQuestion
        bgImage={testContent.bgImage}
 
       
     
        title={testContent.title}
        questionText={testContent.questionText}
        answers={testContent.answers}
        
        buttonText={testContent.buttonText}
        wrongAnswerText={testContent.wrongAnswerText}
        wrongAnswerButtonText={testContent.wrongAnswerButtonText}
         multipleAnswer={testContent.multipleAnswer}    /> */}
      <SectionFreeInput
        question={SectionFreeInputTestContent.question}
        answer={SectionFreeInputTestContent.answer}
      />
    </main>
  );
}
