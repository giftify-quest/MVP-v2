'use client'

import { QuestionInterface } from "@/types/question/QuestionInterface";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { QuestionType } from "@/types/question/QuestionType";
import { TextFieldInfo } from "@/reusableComponent/TextFieldInfo/TextFieldInfo";
import { TextField } from "@/reusableComponent/TextField/TextField";
import { ChangeEvent } from "react";
import VariantTextField from "@/reusableComponent/VariantsTextField/VariantTextField";
import { ButtonMain } from "@/reusableComponent/ButtonMain/ButtonMain";
import { SectionTitle } from "@/reusableComponent/section-title/SectionTitle";





export const VariantQuestion: React.FC = () => {
  return (
    <div >
    <div style={{paddingBottom:'2rem'}}>
   
    <SectionTitle mainWord={"Hello"} variant={"green"}/>
    </div>
    <div className={styles.wrapper} >
      <div style={{width:'80%'}}>
      <TextFieldInfo mainText={"Когда мы сделали наше первое фото? Когда мы сделали наше первое фото? Когда мы сделали наше "} variant={"question"} secondaryText={"Pavel"} />
      </div>
      <div className={styles.variants}>
        <div style={{display:'flex', marginLeft:'1rem', gap:'4rem', rotate:'2deg'}} >
          <VariantTextField text={"08л04р20211цу"} isSelected={false} onChooseVariant={function (id: string, correct: boolean, text: string): void {
            throw new Error("Function not implemented.");
          } } />
          <VariantTextField text={"Очень хорошо. Теперь попробую угадать, какое, из твоих фото"} isSelected={false} onChooseVariant={function (id: string, correct: boolean, text: string): void {
            throw new Error("Function not implemented.");
          } } />
        </div>
        <div style={{display:'flex', marginLeft:'1rem', gap:'4rem',rotate:'-2deg'}} >
          <VariantTextField text={"Очень хорошо. Теперь попробую угадать от"} isSelected={false} onChooseVariant={function (id: string, correct: boolean, text: string): void {
            throw new Error("Function not implemented.");
          } } />
          <VariantTextField text={"Очень хорошо. Теперь попробую угадать от"} isSelected={false} onChooseVariant={function (id: string, correct: boolean, text: string): void {
            throw new Error("Function not implemented.");
          } } />
        </div>
      </div>
      <ButtonMain title={"Я Уверена"} onClick={function (): void {
        throw new Error("Function not implemented.");
      }} />
    </div>
    </div>
  );
};



