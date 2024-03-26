'use client'

import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import { VariantQuestionInterface } from "@/types/answer/VariantAsnwerType";
import { use, useState } from "react";
import { ButtonConfirm } from "../reusableComponent/ButtonConfirm/ButtonConfirm";
import styles from "./styles.module.scss";
import { VariantAnswersField } from "../reusableComponent/VariantsAnswerField/VariantAnswersField";



export const VariantQuestion: React.FC<VariantQuestionInterface> = ({ title, bgImage, gift, giftText, 
  questionText, answers, buttonText, wrongAnswerText, wrongAnswerButtonText, multipleAnswer }) => {

  const [isShowVariants, setIsShowVariants] = useState(false);
  const [isCorrectChoose, setIsCorrectChoose] = useState(true);
  const [selectedAnswerText, setSelectedAnswerText] = useState(buttonText);
  const [selectedAnswerId, setSelectedAnswerId] = useState<null | string[]>(null);
  const [showFinalComponent, setShowFinalComponent] = useState(false);
  const [showExplanatoryText, setShowExplanatoryText] = useState(false);
  const [correctDate, setCorrectDate] = useState("");



  const handleChooseMultipleVariant = (id: string, correct: boolean, date: string) => {
    setSelectedAnswerId(null);
    console.log(selectedAnswerId)
    if (selectedAnswerId === null) {
      console.log('null')
      setSelectedAnswerId([id]);
      setIsCorrectChoose(true);
      setShowExplanatoryText(true);

    } else {
      setSelectedAnswerId(null)
      setIsCorrectChoose(true);
      setShowExplanatoryText(true)
      setSelectedAnswerId([...selectedAnswerId, id]);
    }
    setCorrectDate(date);
    setSelectedAnswerText(buttonText);
  };
  
  
//если выбирать только один вариант то работает как надо 
const handleChoseOneVariant = (id: string, correct: boolean, date: string) => {
 
  setSelectedAnswerId([id]);
  setIsCorrectChoose(true);
  setShowExplanatoryText(true);
  setCorrectDate(date);
  setSelectedAnswerText(buttonText);
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
        setIsCorrectChoose(true); 
    
      } else {
        console.log('wrong');
        setSelectedAnswerText("wrong");
        setShowExplanatoryText(true)
        setIsCorrectChoose(false); 
      }
    } else {
      setIsCorrectChoose(false); 
      setShowFinalComponent(false);
    }
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
             <VariantAnswersField 
            answers={answers}
            onChooseVariant={handleChooseMultipleVariant}
            selectedAnswerId={selectedAnswerId}
            isCorrectChoose={isCorrectChoose}/>
            {showExplanatoryText && 
                selectedAnswerText === "wrong" ? (
                  <div className={styles.wrongText}>
                    <TextFieldInfo mainText={wrongAnswerText} variant={"errorMessage"}/>
                  </div>
                ): ""}
          </div>
        )}
        <ButtonConfirm title={buttonText} onClick={handleCheckMultipleVariant} isActive={false} isDisabled={false} />
      </div>
    </div>


  );
};

