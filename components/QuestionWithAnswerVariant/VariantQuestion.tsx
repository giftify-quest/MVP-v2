'use client'

import { ButtonMain } from "@/components/reusableComponent/ButtonMain/ButtonMain";
import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import VariantTextField from "@/components/reusableComponent/VariantsTextField/VariantTextField";
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import styles from "./styles.module.scss";
import { useState } from "react";
import { ButtonConfirm } from "../reusableComponent/ButtonConfirm/ButtonConfirm";


interface VariantsType {

  id: string;
  text: string;
  isCorrect: boolean;

}

interface VariantQuestionProps {

  bgImage: string,
  gift?: string,
  giftText?: string;
  title: string;
  questionText: string;
  answers: VariantsType[],

  buttonText: string;
  wrongAnswerText: string;
  wrongAnswerButton: string;
  multipleVariant: boolean

}



export const VariantQuestion: React.FC<VariantQuestionProps> = ({ title, bgImage, gift, giftText,
  questionText, answers, buttonText, wrongAnswerText, wrongAnswerButton, multipleVariant }) => {

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
        setSelectedAnswerText(wrongAnswerButton);
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
  };


  const handleCheckMultipleVariant = () => {
    if (selectedAnswerId && selectedAnswerId.length > 0) {
      const allSelectedAreCorrect = selectedAnswerId.every(id =>
        answers.find(answer => answer.id === id)?.isCorrect
      );

      if (allSelectedAreCorrect) {
        console.log('correct');
        setSelectedAnswerText(wrongAnswerButton);
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


    <div >
      <div style={{ paddingBottom: '2rem' }}>
        <SectionTitle mainWord={title} variant={"green"} />
      </div>
      <div className={styles.wrapper} style={{ backgroundImage: bgImage }}>
        <div style={{ width: '80%' }}>
          <TextFieldInfo mainText={questionText} variant={"question"} secondaryText={"Pavel"} />
        </div>


        {!isShowVariants && (
          <div className={styles.variants}>
            <div style={{ display: 'flex', marginLeft: '1rem', gap: '4rem', }} >
              <VariantAnswersField answers={answers}
                isSelected={selectedAnswerId}
                onChooseVariant={multipleVariant ? handleCheckMultipleVariant : handleChooseVariant} />
            </div>
            {!isShowVariants &&
              selectedAnswerText === "wrong" ? (
              <div style={{ position: 'absolute', right: '1rem' }}>
                <TextFieldInfo mainText={wrongAnswerText} variant={"errorMessage"} />
              </div>
            ) : ""}
          </div>
        )}


        <ButtonConfirm title={buttonText} onClick={multipleVariant ? handleCheckMultipleVariant : handleCheckVariant} isActive={false} isDisabled={false} />
      </div>
    </div>


  );
};



