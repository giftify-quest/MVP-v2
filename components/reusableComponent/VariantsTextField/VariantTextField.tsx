import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface VariantTextFieldProps {
  answer: { id: string; correct: boolean; text: string };
  isSelected: boolean | undefined;
  isCorrectChoose: boolean | null;
  onChooseVariant: (id: string) => void;
  isAnimating: boolean;
}

export const VariantTextField: React.FC<VariantTextFieldProps> = ({
  answer,
  isSelected,
  onChooseVariant,
  isCorrectChoose,
  isAnimating,
}) => {
  const textClass = classNames(styles.text, {
    [styles.selected]: isSelected,
    [styles.wrong]: isSelected && !isCorrectChoose,
  });

  useEffect(() => {
    if (isSelected && !isCorrectChoose) {
      const timer = setTimeout(() => {
        onChooseVariant(answer.id);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSelected, isCorrectChoose, answer, onChooseVariant]);

  return (
    <button
      className={`${styles.wrapper} ${textClass}`}
      onClick={() => {
        onChooseVariant(answer.id);
      }}
      disabled={isAnimating}
    >
      <div>{answer.text}</div>
    </button>
  );
};
