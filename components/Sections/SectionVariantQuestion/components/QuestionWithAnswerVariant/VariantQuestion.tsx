"use client";

import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { ButtonConfirm } from "../../../../reusableComponent/ButtonConfirm/ButtonConfirm";
import { VariantAnswersField } from "../../../../reusableComponent/VariantsAnswerField/VariantAnswersField";
import { WrapperWithBackground } from "../../../../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import styles from "./styles.module.scss";
import { useState } from "react";
import { VariantQuestionProps } from "../../types";

export const VariantQuestion: React.FC<VariantQuestionProps> = ({
  question,
  onReady,
}) => {
  const [isCorrectChoose, setIsCorrectChoose] = useState(true);
  const [selectedAnswerText, setSelectedAnswerText] = useState(
    question.buttonText
  );
  const [selectedAnswerId, setSelectedAnswerId] = useState<null | string[]>(
    null
  );
  const [showFinalComponent, setShowFinalComponent] = useState(false);
  const [showExplanatoryText, setShowExplanatoryText] = useState(false);
  const [clearSelectedAfterCheck, setClearSelectedAfterCheck] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const handleChooseMultipleVariant = (
    id: string,
    correct: boolean,
    date: string
  ) => {
    if (clearSelectedAfterCheck) {
      setSelectedAnswerId([id]);
      setClearSelectedAfterCheck(false);
      setIsDisabledButton(true);
    } else {
      setIsDisabledButton(true);
      if (!isCorrectChoose && selectedAnswerId) {
        setSelectedAnswerId(
          selectedAnswerId.map((item) =>
            item === id ? item : null
          ) as string[]
        );
      }
      setSelectedAnswerId((prevSelected) =>
        prevSelected && prevSelected.includes(id) && !isCorrectChoose
          ? prevSelected.filter((item) => item !== id)
          : [...(prevSelected || []), id]
      );
    }
    setIsDisabledButton(false);
    setIsActiveButton(true);
    setIsCorrectChoose(true);
    setSelectedAnswerText(question.buttonText);
  };

  const handleCheckMultipleVariant = () => {
    if (selectedAnswerId && selectedAnswerId.length > 0) {
      const totalCorrectAnswers = question.answers.filter(
        (answer) => answer.isCorrect
      ).length;

      const selectedCorrectAnswers = selectedAnswerId.filter((id) =>
        question.answers.find((answer) => answer.id === id && answer.isCorrect)
      ).length;

      const hasIncorrectAnswer = selectedAnswerId.some((id) =>
        question.answers.find((answer) => answer.id === id && !answer.isCorrect)
      );

      if (
        selectedCorrectAnswers === totalCorrectAnswers &&
        !hasIncorrectAnswer
      ) {
        console.log("correct");
        setSelectedAnswerText(question.wrongAnswerButtonText);
        onReady();
        setIsCorrectChoose(true);
        setShowExplanatoryText(false);
      } else {
        console.log("wrong");
        setSelectedAnswerText("wrong");
        setShowExplanatoryText(true);
        setIsCorrectChoose(false);
      }
    } else {
      setShowExplanatoryText(true);
      setIsCorrectChoose(false);
      setShowFinalComponent(false);
    }
  };

  return (
    <div>
      <WrapperWithBackground bgSrc={question.bgImage}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <TextFieldInfo
              mainText={question.questionText}
              variant={"text"}
              secondaryText={"Pavel"}
            />
          </div>

          <div className={styles.variants}>
            <VariantAnswersField
              answers={question.answers}
              onChooseVariant={handleChooseMultipleVariant}
              selectedAnswerId={selectedAnswerId}
              isCorrectChoose={isCorrectChoose}
            />
          </div>

          {showExplanatoryText && (
            <div className={styles.wrongText}>
              <TextFieldInfo
                mainText={question.wrongAnswerText}
                variant={"errorMessage"}
              />
            </div>
          )}
          <ButtonConfirm
            title={question.buttonText}
            onClick={handleCheckMultipleVariant}
            isActive={isActiveButton}
            isDisabled={isDisabledButton}
          />
        </div>
      </WrapperWithBackground>
    </div>
  );
};