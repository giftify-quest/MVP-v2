'use client'

import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import { VariantQuestionInterface } from "@/types/answer/VariantAsnwerType";
import { useEffect, useState } from "react";
import { ButtonConfirm } from "../reusableComponent/ButtonConfirm/ButtonConfirm";
import styles from "./styles.module.scss";
import { VariantAnswersField } from "../reusableComponent/VariantsAnswerField/VariantAnswersField";
import { WrapperWithBackground } from "../reusableComponent/WrapperWithBackground/WrapperWithBackground";



export const VariantQuestion: React.FC<VariantQuestionInterface> = ({ title, bgImage, gift, giftText,
  questionText, answers, buttonText, wrongAnswerText, wrongAnswerButtonText, multipleAnswer }) => {

  const [isShowVariants, setIsShowVariants] = useState(false);
  const [isCorrectChoose, setIsCorrectChoose] = useState(true);
  const [selectedAnswerText, setSelectedAnswerText] = useState(buttonText);
  const [selectedAnswerId, setSelectedAnswerId] = useState<null | string[]>(null);
  const [showFinalComponent, setShowFinalComponent] = useState(false);
  const [showExplanatoryText, setShowExplanatoryText] = useState(false);
  const [correctDate, setCorrectDate] = useState("");
  const [clearSelectedAfterCheck, setClearSelectedAfterCheck] = useState(false);
  const [isActiveButton , setIsActiveButton] = useState(false)
  const [isDisabledButton, setIsDisabledButtton] = useState (true)

    /* //если выбирать только один вариант то работает как надо 
const handleChoseOneVariant = (id: string, correct: boolean, date: string) => {

  setSelectedAnswerId([id]);
  setIsCorrectChoose(true);
  setShowExplanatoryText(true);
  setCorrectDate(date);
  setSelectedAnswerText(buttonText);

}; */

  const handleChooseMultipleVariant = (id: string, correct: boolean, date: string) => {
    if (clearSelectedAfterCheck) {
      setSelectedAnswerId([id]);
      setClearSelectedAfterCheck(false)
      setIsDisabledButtton(true)
     
    } else {
      setIsDisabledButtton(true)
      if (!isCorrectChoose && selectedAnswerId) {
        setSelectedAnswerId(selectedAnswerId.map(item => (item === id ? item : null)) as string[]);
      }
      setSelectedAnswerId(prevSelected =>
        prevSelected && prevSelected.includes(id) && !isCorrectChoose
          ? prevSelected.filter(item => item !== id)
          : [...(prevSelected || []), id]
      );
    }
    setIsDisabledButtton(false)
    setIsActiveButton(true)
    setIsCorrectChoose(true);
    setCorrectDate(date);
    setSelectedAnswerText(buttonText);
  };
  

  const handleCheckMultipleVariant = () => {
    if (selectedAnswerId && selectedAnswerId.length > 0) {
      const allSelectedAreCorrect = selectedAnswerId.every(id =>
        answers.find(answer => answer.id === id)?.isCorrect
      );

      if (allSelectedAreCorrect) {
       
        setSelectedAnswerText(wrongAnswerButtonText);
        setShowFinalComponent(true);
        setIsCorrectChoose(true);
        setShowExplanatoryText(false);

      } else {

      
        setShowExplanatoryText(true);
        setIsCorrectChoose(false);
        setClearSelectedAfterCheck(true)

      }
    } else {
     
      setShowExplanatoryText(true);
      setIsCorrectChoose(false);
      setShowFinalComponent(false);
    }
  };




  return (

    <div>
      <div className={styles.title}>
        <SectionTitle mainWord={title} variant={"green"} />
      </div>
      <WrapperWithBackground bgSrc={bgImage}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <TextFieldInfo mainText={questionText} variant={"question"} secondaryText={"Pavel"} />
          </div>
          {!isShowVariants && (
            <div className={styles.variants}>
              <VariantAnswersField
                answers={answers}
                onChooseVariant={handleChooseMultipleVariant}
                selectedAnswerId={selectedAnswerId}
                isCorrectChoose={isCorrectChoose} />
            </div>
          )}
          {showExplanatoryText &&
            <div className={styles.wrongText}>
              <TextFieldInfo mainText={wrongAnswerText} variant={"errorMessage"} />
            </div>
          }
          <ButtonConfirm title={buttonText} onClick={handleCheckMultipleVariant} isActive={isActiveButton} isDisabled={isDisabledButton} />
        </div>
      </WrapperWithBackground>
    </div>

  );
};


