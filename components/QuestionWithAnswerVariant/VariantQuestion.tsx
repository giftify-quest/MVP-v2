'use client'

import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import { VariantQuestionInterface } from "@/types/answer/VariantAsnwerType";
import { useState } from "react";
import { ButtonConfirm } from "../reusableComponent/ButtonConfirm/ButtonConfirm";
import { VariantAnswersField } from "../reusableComponent/VariantsAnswerField/VariantAnswersField";
import styles from "./styles.module.scss";



<<<<<<< HEAD



export const VariantQuestion: React.FC<VariantQuestionInterface> = ({ title, bgImage, gift, giftText, 
  questionText, answers, buttonText, wrongAnswerText, wrongAnswerButtonText, multipleAnswer }) => {
=======
export const VariantQuestion: React.FC<VariantQuestionInterface> = ({ title, bgImage, gift, giftText, 
  questionText, answers, buttonText, wrongAnswerText, wrongAnswerButtonText }) => {
>>>>>>> main

  const [isShowVariants, setIsShowVariants] = useState(false);
  const [isCorrectChoose, setIsCorrectChoose] = useState(true);
  const [selectedAnswerText, setSelectedAnswerText] = useState(buttonText);
  const [selectedAnswerId, setSelectedAnswerId] = useState<null | string[]>(null);
  const [showFinalComponent, setShowFinalComponent] = useState(false);
  const [correctDate, setCorrectDate] = useState("");
  const [scrollAllowed, setScrollAllowed] = useState(false);


  const handleShowVariants = () => {
    setIsShowVariants((prev) => !prev);
  };


  const handleCheckVariant = () => {
    if (selectedAnswerId) {

      setIsCorrectChoose(true);
      if (isCorrectChoose) {
        console.log('correct')
        setSelectedAnswerText(wrongAnswerButtonText);
<<<<<<< HEAD
        setSelectedAnswerText(wrongAnswerButtonText);
=======
>>>>>>> main
        setIsCorrectChoose(true);
        setShowFinalComponent(true);

      } else {
        console.log('wrong')
        setSelectedAnswerText("wrong");
        setIsCorrectChoose(false);
        setSelectedAnswerId(null)
      }
    } else {
      setShowFinalComponent(false);
    }
  };



  const handleChooseVariant = (id: string, correct: boolean, date: string) => {


    setSelectedAnswerId(id);
    setIsCorrectChoose(correct);
    setCorrectDate(date);
    if (!isCorrectChoose) {
      setSelectedAnswerText(buttonText);
    }
<<<<<<< HEAD

  };

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
    <div>
      <div className={styles.title}>
=======

  };


  return (

>>>>>>> main
    <div>
      <div className={styles.title}>
        <SectionTitle mainWord={title} variant={"green"} />
      </div>
      <div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={styles.header}>
<<<<<<< HEAD
      <div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={styles.header}>
=======
>>>>>>> main
          <TextFieldInfo mainText={questionText} variant={"question"} secondaryText={"Pavel"} />
        </div>
        {!isShowVariants && (
          <div className={styles.variants}>
<<<<<<< HEAD
             <VariantAnswersField answers={answers}

            onChooseVariant={multipleAnswer ? handleChooseMultipleVariant : handleChooseVariant}
             selectedAnswerId={selectedAnswerId}/>
            {!isShowVariants && 
                selectedAnswerText === "wrong" ? (
                  <div className={styles.wrongText}>
                  <div className={styles.wrongText}>
=======
             <VariantAnswersField answers={answers} 
             isSelected={selectedAnswerId}
             onChooseVariant={handleChooseVariant}/>
            {!isShowVariants && 
                selectedAnswerText === "wrong" ? (
                  <div className={styles.wrongText}>
>>>>>>> main
                    <TextFieldInfo mainText={wrongAnswerText} variant={"errorMessage"}/>
                  </div>
                ): ""}
          </div>
        )}
<<<<<<< HEAD
        <ButtonConfirm title={buttonText} onClick={multipleAnswer ? handleCheckMultipleVariant : handleCheckVariant} isActive={false} isDisabled={false} />
=======
        <ButtonConfirm title={buttonText} onClick={handleCheckVariant} isActive={false} isDisabled={false} />
>>>>>>> main
      </div>
    </div>

    </div>
  );
};



