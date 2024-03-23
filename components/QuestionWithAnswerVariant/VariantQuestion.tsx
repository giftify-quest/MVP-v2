'use client'

import { ButtonMain } from "@/components/reusableComponent/ButtonMain/ButtonMain";
import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import VariantTextField from "@/components/reusableComponent/VariantsTextField/VariantTextField";
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import styles from "./styles.module.scss";
import { useState } from "react";


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
  answer1: VariantsType[],
  answer2: VariantsType[],
  buttonText: string;
  wrongAnswerText: string;
  wrongAnswerButton: string;

}



export const VariantQuestion: React.FC<VariantQuestionProps> = ({ title, bgImage, gift, giftText, 
  questionText, answer1, answer2, buttonText, wrongAnswerText, wrongAnswerButton }) => {

  const [isShowVariants, setIsShowVariants] = useState(false);
  const [isCorrectChoose, setIsCorrectChoose] = useState(true);
  const [selectedAnswerText, setSelectedAnswerText] = useState(buttonText);
  const [selectedAnswerId, setSelectedAnswerId] = useState<null | string>(null);
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
              {answer1.map((el) => (
                <VariantTextField
                  key={el.id}
                  answer={{
                    id: el.id,
                    correct: el.isCorrect,
                    text: el.text
                  }}
                  isSelected={el.id === selectedAnswerId}
                  onChooseVariant={handleChooseVariant} />
              ))}
            </div>
            <div style={{ display: 'flex', marginLeft: '1rem', gap: '4rem', }} >
              {answer2.map((el) => (
                <VariantTextField
                  key={el.id}
                  answer={{
                    id: el.id,
                    correct: el.isCorrect,
                    text: el.text
                  }}
                  isSelected={el.id === selectedAnswerId}
                  onChooseVariant={handleChooseVariant} />
              ))}
            </div>
            {!isShowVariants && 
                selectedAnswerText === "wrong" ? (
                  <div style={{position:'absolute', right:'1rem'}}>
                    <TextFieldInfo mainText={wrongAnswerText} variant={"errorMessage"}/>
                  </div>
                ): ""}
          </div>
        )}


           

        <ButtonMain title={buttonText} onClick={handleCheckVariant} />
      </div>
    </div>


  );
};



