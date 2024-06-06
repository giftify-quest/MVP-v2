import React from "react";
import { VariantTextField } from "../VariantsTextField/VariantTextField";
import styles from "./styles.module.scss";

type SelectedAnswer = {
  id: string;
  isCorrect: boolean | undefined;
};

interface VariantAnswersFields {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface VariantAnswersFieldProps {
  answers: VariantAnswersFields[];
  selectedAnswerId: SelectedAnswer[] | null;
  isCorrectChoose: boolean;
  onChooseVariant: (id: string) => void;
  isAnimating: boolean;
}

export const VariantAnswersField: React.FC<VariantAnswersFieldProps> = ({
  answers,
  selectedAnswerId,
  onChooseVariant,
  isCorrectChoose,
  isAnimating,
}) => {
  return (
    <div className={styles.wrapper}>
      {answers.map((el) => (
        <VariantTextField
          key={el.id}
          answer={{
            id: el.id,
            correct: el.isCorrect,
            text: el.text,
          }}
          isSelected={selectedAnswerId?.some((answer) => answer.id === el.id)}
          onChooseVariant={onChooseVariant}
          isCorrectChoose={isCorrectChoose}
          isAnimating={isAnimating}
        />
      ))}
    </div>
  );
};
