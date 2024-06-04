import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface VariantTextFieldProps {
  answer: { id: string; correct: boolean; text: string };
  isSelected: boolean | null;
  isCorrectChoose: boolean | null;
  onChooseVariant: (id: string, correct: boolean, text: string) => void;
}

export const VariantTextField: React.FC<VariantTextFieldProps> = ({
  answer,
  isSelected,
  onChooseVariant,
  isCorrectChoose,
}) => {
  const textClass = classNames(styles.text, {
    [styles.selected]: isSelected,
    [styles.wrong]: isSelected && !isCorrectChoose,
  });

  useEffect(() => {
    if (isSelected && !isCorrectChoose) {
      const timer = setTimeout(() => {
        onChooseVariant(answer.id, answer.correct, answer.text);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSelected, isCorrectChoose, answer, onChooseVariant]);

  return (
    <button
      className={`${styles.wrapper} ${textClass}`}
      onClick={() => {
        onChooseVariant(answer.id, answer.correct, answer.text);
      }}
    >
      <div>{answer.text}</div>
    </button>
  );
};
