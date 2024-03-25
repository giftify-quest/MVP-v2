"use client";

import { ButtonConfirm } from "@/components/reusableComponent/ButtonConfirm/ButtonConfirm";
import { VariantQuestion } from "@/components/QuestionWithAnswerVariant/VariantQuestion";
import { QuestionInterface } from "@/types/question/QuestionInterface";
import { TextField } from "@/components/reusableComponent/TextField/TextField";
import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import { ChangeEvent } from "react";
import { VariantTextField } from "@/components/reusableComponent/VariantsTextField/VariantTextField";
import { ButtonMain } from "@/components/reusableComponent/ButtonMain/ButtonMain";
import { testContent } from "@/testContent/variantTestContent";

export default function Home() {
  return (
    <main style={{ background: "#F6F5DE", display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "20px 40px" }}>
 <VariantQuestion
        bgImage={testContent.bgImage}
        title={testContent.title}
        questionText={testContent.questionText}
        answers={testContent.answers}
        buttonText={testContent.buttonText}
        wrongAnswerText={testContent.wrongAnswerText}
        wrongAnswerButtonText={testContent.wrongAnswerButtonText}
      />

    </main>
  );
}
