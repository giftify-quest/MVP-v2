'use client'

import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import { VariantQuestionInterface } from "@/types/answer/VariantAsnwerType";
import { useState } from "react";
import { ButtonConfirm } from "../reusableComponent/ButtonConfirm/ButtonConfirm";
import { VariantAnswersField } from "../reusableComponent/VariantsAnswerField/VariantAnswersField";
import styles from "./styles.module.scss";



export const VariantQuestion: React.FC<VariantQuestionInterface> = ({ title, bgImage, gift, giftText,
  questionText, answers, buttonText, wrongAnswerText, wrongAnswerButtonText }) => {

  const [isShowVariants, setIsShowVariants] = useState(false);
  const [isCorrectChoose, setIsCorrectChoose] = useState(true);
  const [selectedAnswerText, setSelectedAnswerText] = useState(buttonText);
  const [selectedAnswerId, setSelectedAnswerId] = useState<null | string>(null);
  const [showFinalComponent, setShowFinalComponent] = useState(false);
  const [correctDate, setCorrectDate] = useState("");



  const handleShowVariants = () => {
    setIsShowVariants((prev) => !prev);
  };

  const handleCheckVariant = () => {
    if (selectedAnswerId) {
        const selectedAnswer = answers.find(answer => answer.id === selectedAnswerId);
        if (selectedAnswer) {
            setIsCorrectChoose(selectedAnswer.isCorrect);
            if (selectedAnswer.isCorrect) {
                setSelectedAnswerText(wrongAnswerButtonText);
                setShowFinalComponent(true);
            } else {
              setIsCorrectChoose(false)
                setSelectedAnswerText("wrong");
            }
        }
    } else {
      setIsCorrectChoose(false)
        setShowFinalComponent(false);
    }
   
};



const handleChooseVariant = (id: string, correct: boolean, date: string) => {
  setSelectedAnswerId(id);
  setIsCorrectChoose(true)
  setCorrectDate(date);
  setSelectedAnswerText(buttonText);
};




  return (

    <div>
      <div className={styles.title}>
        <SectionTitle mainWord={title} variant={"green"} />
      </div>
      <div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={styles.header}>
          <TextFieldInfo mainText={questionText} variant={"question"} secondaryText={"Pavel"} />
        </div>

        {!isShowVariants && (
          <div className={styles.variants}>
            <VariantAnswersField answers={answers}
              isSelected={selectedAnswerId}
              onChooseVariant={handleChooseVariant}
              isCorrectChoose={isCorrectChoose} />
            {!isShowVariants &&
              selectedAnswerText === "wrong" ? (
              <div className={styles.wrongText}>
                <TextFieldInfo mainText={wrongAnswerText} variant={"errorMessage"} />
              </div>
            ) : ""}
          </div>
        )}

        <ButtonConfirm title={buttonText} onClick={handleCheckVariant} isActive={false} isDisabled={false} />
      </div>
    </div>


  );
};



