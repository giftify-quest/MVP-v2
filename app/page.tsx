"use client";

import { ButtonConfirm } from "@/reusableComponent/ButtonConfirm/ButtonConfirm";
import { VariantQuestion } from "@/components/QuestionWithAnswerVariant/VariantQuestion";
import { QuestionInterface } from "@/types/question/QuestionInterface";
import { TextField } from "@/reusableComponent/TextField/TextField";
import { TextFieldInfo } from "@/reusableComponent/TextFieldInfo/TextFieldInfo";
import { SectionTitle } from "@/reusableComponent/section-title/SectionTitle";
import { ChangeEvent } from "react";
import { VariantTextField } from "@/reusableComponent/VariantsTextField/VariantTextField";
import { ButtonMain } from "@/reusableComponent/ButtonMain/ButtonMain";

export default function Home() {
  return (
    <main style={{ background: "#F6F5DE", display:'flex', alignItems:'center', justifyContent:'center', padding: "20px 40px" }}>
    
      <VariantQuestion/>
   
    </main>
  );
}
