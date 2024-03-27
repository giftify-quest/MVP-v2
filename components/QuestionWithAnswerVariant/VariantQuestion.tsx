'use client'

import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import { VariantQuestionInterface } from "@/types/answer/VariantAsnwerType";
import { useEffect, useState } from "react";
import { ButtonConfirm } from "../reusableComponent/ButtonConfirm/ButtonConfirm";
import styles from "./styles.module.scss";
import { VariantAnswersField } from "../reusableComponent/VariantsAnswerField/VariantAnswersField";
<<<<<<< HEAD
import { WrapperWithBackground } from "../reusableComponent/WrapperWithBackground/WrapperWithBackground";



export const VariantQuestion: React.FC<VariantQuestionInterface> = ({ title, bgImage, gift, giftText,
=======



export const VariantQuestion: React.FC<VariantQuestionInterface> = ({ title, bgImage, gift, giftText, 
>>>>>>> main
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
  

<<<<<<< HEAD
  const handleCheckMultipleVariant = () => {
    if (selectedAnswerId && selectedAnswerId.length > 0) {
      const allSelectedAreCorrect = selectedAnswerId.every(id =>
        answers.find(answer => answer.id === id)?.isCorrect
      );
=======

  const handleCheckVariant = () => {
    if (selectedAnswerId) {
>>>>>>> main

      if (allSelectedAreCorrect) {
       
        setSelectedAnswerText(wrongAnswerButtonText);
        setShowFinalComponent(true);
        setIsCorrectChoose(true);
        setShowExplanatoryText(false);

      } else {

      
        setShowExplanatoryText(true);
        setIsCorrectChoose(false);
<<<<<<< HEAD
        setClearSelectedAfterCheck(true)

=======
        setSelectedAnswerId(null)
>>>>>>> main
      }
    } else {
     
      setShowExplanatoryText(true);
      setIsCorrectChoose(false);
      setShowFinalComponent(false);
    }
  };

<<<<<<< HEAD

=======


  const handleChooseVariant = (id: string, correct: boolean, date: string) => {


    setSelectedAnswerId(id);
    setIsCorrectChoose(correct);
    setCorrectDate(date);
    if (!isCorrectChoose) {
      setSelectedAnswerText(buttonText);
    }

  };
>>>>>>> main

  const handleCheckMultipleVariant = () => {
    if (selectedAnswerId && selectedAnswerId.length > 0) {
      const allSelectedAreCorrect = selectedAnswerId.every(id =>
        answers.find(answer => answer.id === id)?.isCorrect
      );

      if (allSelectedAreCorrect) {
        console.log('correct');
        setSelectedAnswerText(wrongAnswerButtonText);
        setShowFinalComponent(true);
      } else {
        console.log('wrong');
        setSelectedAnswerText("wrong");
        setSelectedAnswerId(null)
      }
    } else {
      setShowFinalComponent(false);
    }
  };

  const handleChooseMultipleVariant = (id: string, correct: boolean, date: string) => {
    if (selectedAnswerId === null) {
      setSelectedAnswerId([id]);
    } else {
      setSelectedAnswerId([...selectedAnswerId, id]);

    }

    setIsCorrectChoose(correct);
    setCorrectDate(date);
    setSelectedAnswerText(buttonText);
  };
  


  return (

    <div>
      <div className={styles.title}>
        <SectionTitle mainWord={title} variant={"green"} />
      </div>
<<<<<<< HEAD
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
=======
      <div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={styles.header}>
          <TextFieldInfo mainText={questionText} variant={"question"} secondaryText={"Pavel"} />
        </div>
        {!isShowVariants && (
          <div className={styles.variants}>
             <VariantAnswersField answers={answers}

            onChooseVariant={multipleAnswer ? handleChooseMultipleVariant : handleChooseVariant}
             selectedAnswerId={selectedAnswerId}/>
            {!isShowVariants && 
                selectedAnswerText === "wrong" ? (
                  <div className={styles.wrongText}>
                    <TextFieldInfo mainText={wrongAnswerText} variant={"errorMessage"}/>
                  </div>
                ): ""}
          </div>
        )}
        <ButtonConfirm title={buttonText} onClick={multipleAnswer ? handleCheckMultipleVariant : handleCheckVariant} isActive={false} isDisabled={false} />
      </div>
>>>>>>> main
    </div>

  );
};


