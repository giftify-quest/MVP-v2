import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { ButtonConfirm } from "@/components/reusableComponent/ButtonConfirm/ButtonConfirm";
import { VariantAnswersField } from "@/components/reusableComponent/VariantsAnswerField/VariantAnswersField";
import { WrapperWithBackground } from "@/components/reusableComponent/WrapperWithBackground/WrapperWithBackground";
import styles from "./styles.module.scss";
import { useState } from "react";
import { VariantQuestionProps } from "../../types";

type SelectedAnswer = {
  id: string;
  isCorrect: boolean | undefined;
};

export const VariantQuestion: React.FC<VariantQuestionProps> = ({
  question,
  onReady,
  name,
}) => {
  const [isCorrectChoose, setIsCorrectChoose] = useState(true);
  const [selectedAnswerId, setSelectedAnswerId] = useState<
    SelectedAnswer[] | null
  >(null);
  const [showExplanatoryText, setShowExplanatoryText] = useState(false);
  const [clearSelectedAfterCheck, setClearSelectedAfterCheck] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChooseVariant = (id: string) => {
    setSelectedAnswerId((prevSelected) => {
      const selectedAnswer = question.answers.find(
        (answer) => answer.id === id,
      );

      if (clearSelectedAfterCheck) {
        setClearSelectedAfterCheck(false);
        setIsDisabledButton(true);
        return [{ id, isCorrect: selectedAnswer?.isCorrect }];
      }

      const alreadySelected = prevSelected?.some((answer) => answer.id === id);

      if (alreadySelected) {
        return prevSelected?.filter((answer) => answer.id !== id) || [];
      } else {
        return [
          ...(prevSelected || []),
          { id, isCorrect: selectedAnswer?.isCorrect },
        ];
      }
    });
    setIsDisabledButton(false);
    setIsActiveButton(true);
    setIsCorrectChoose(true);
  };

  const handleCheckVariant = () => {
    setIsAnimating(true);
    if (selectedAnswerId && selectedAnswerId.length > 0) {
      const totalCorrectAnswers = question.answers.filter(
        (answer) => answer.isCorrect,
      ).length;

      const selectedCorrectAnswers = selectedAnswerId.filter(
        (answer) => answer.isCorrect,
      ).length;

      const hasIncorrectAnswer = selectedAnswerId.some((answer) =>
        question.answers.some(
          (qAnswer) => qAnswer.id === answer.id && !qAnswer.isCorrect,
        ),
      );

      const isCorrect =
        selectedCorrectAnswers === totalCorrectAnswers && !hasIncorrectAnswer;
      setIsCorrectChoose(isCorrect);
      setShowExplanatoryText(!isCorrect);
      onReady(isCorrect);
      setTimeout(() => {
        setIsAnimating(false);
        if (!isCorrect) {
          setSelectedAnswerId([]);
        }
      }, 1950);
    } else {
      console.log("hello");
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
            onChooseVariant={handleChooseVariant}
            selectedAnswerId={selectedAnswerId}
            isCorrectChoose={isCorrectChoose}
            isAnimating={isAnimating}
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
          onClick={handleCheckVariant}
          isActive={isActiveButton}
          isDisabled={isDisabledButton}
        />
      </div>
    </WrapperWithBackground>
  );
};
