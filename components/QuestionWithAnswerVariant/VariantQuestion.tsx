'use client'

import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import { VariantQuestionInterface } from "@/types/answer/VariantAsnwerType";
import { ButtonConfirm } from "../reusableComponent/ButtonConfirm/ButtonConfirm";
import { VariantAnswersField } from "../reusableComponent/VariantsAnswerField/VariantAnswersField";
import { WrapperWithBackground } from "../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import styles from "./styles.module.scss";


interface VariantQuestionProps {
  question: VariantQuestionInterface,
  isCorrectChoose: boolean;
  selectedAnswerId: string[] | null;
  showExplanatoryText: boolean;
  isActiveButton: boolean;
  isDisabledButton: boolean
  handleChooseMultipleVariant: (id: string, correct: boolean, date: string) => void,
  handleCheckMultipleVariant: () => void

}

export const VariantQuestion: React.FC<VariantQuestionProps> = ({ question,
  isCorrectChoose, selectedAnswerId, showExplanatoryText, isActiveButton, isDisabledButton,
  handleCheckMultipleVariant, handleChooseMultipleVariant }) => {



  return (

    <div>
      <WrapperWithBackground bgSrc={question.bgImage}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <TextFieldInfo mainText={question.questionText} variant={"question"} secondaryText={"Pavel"} />
          </div>

          <div className={styles.variants}>
            <VariantAnswersField
              answers={question.answers}
              onChooseVariant={handleChooseMultipleVariant}
              selectedAnswerId={selectedAnswerId}
              isCorrectChoose={isCorrectChoose} />
          </div>

          {showExplanatoryText &&
            <div className={styles.wrongText}>
              <TextFieldInfo mainText={question.wrongAnswerText} variant={"errorMessage"} />
            </div>
          }
          <ButtonConfirm title={question.buttonText} onClick={handleCheckMultipleVariant} isActive={isActiveButton} isDisabled={isDisabledButton} />
        </div>
      </WrapperWithBackground>
    </div>

  );
};


