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
  name,
}) => {
  const [isCorrectChoose, setIsCorrectChoose] = useState(true);
  const [selectedAnswerId, setSelectedAnswerId] = useState<null | string[]>(
    null,
  );
  const [showExplanatoryText, setShowExplanatoryText] = useState(false);
  const [clearSelectedAfterCheck, setClearSelectedAfterCheck] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const handleChooseMultipleVariant = (id: string) => {
    if (clearSelectedAfterCheck) {
      setSelectedAnswerId([id]);
      setClearSelectedAfterCheck(false);
      setIsDisabledButton(true);
    } else {
      setIsDisabledButton(true);
      if (!isCorrectChoose && selectedAnswerId) {
        setSelectedAnswerId(
          selectedAnswerId.map((item) =>
            item === id ? item : null,
          ) as string[],
        );
      }
      setSelectedAnswerId((prevSelected) =>
        prevSelected && prevSelected.includes(id) && !isCorrectChoose
          ? prevSelected.filter((item) => item !== id)
          : [...(prevSelected || []), id],
      );
    }
    setIsDisabledButton(false);
    setIsActiveButton(true);
    setIsCorrectChoose(true);
  };

  const handleCheckMultipleVariant = () => {
    if (selectedAnswerId && selectedAnswerId.length > 0) {
      const totalCorrectAnswers = question.answers.filter(
        (answer) => answer.isCorrect,
      ).length;

      const selectedCorrectAnswers = selectedAnswerId.filter((id) =>
        question.answers.find((answer) => answer.id === id && answer.isCorrect),
      ).length;

      const hasIncorrectAnswer = selectedAnswerId.some((id) =>
        question.answers.find(
          (answer) => answer.id === id && !answer.isCorrect,
        ),
      );

      if (
        selectedCorrectAnswers === totalCorrectAnswers &&
        !hasIncorrectAnswer
      ) {
        onReady();
        setIsCorrectChoose(true);
        setShowExplanatoryText(false);
      } else {
        setShowExplanatoryText(true);
        setIsCorrectChoose(false);
      }
    } else {
      setSelectedAnswerId([]);
      setShowExplanatoryText(true);
      setIsCorrectChoose(false);
    }
  };

  return (
    <WrapperWithBackground
      bgSrc={question.bgSrcQuestion}
      bgMobileSrc={question.bgMobile}
    >
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <TextFieldInfo
            mainText={question.questionText}
            variant={"text"}
            secondaryText={name}
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
              secondaryText={name}
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
  );
};
