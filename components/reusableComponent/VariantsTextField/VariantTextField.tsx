import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface VariantTextFieldProps {
  answer: { id: string; correct: boolean; text: string };
  isSelected: boolean | undefined;
  isCorrectChoose: boolean | null;
  onChooseVariant: (id: string) => void;
}

export const VariantTextField: React.FC<VariantTextFieldProps> = ({
  answer,
  isSelected,
  onChooseVariant,
  isCorrectChoose,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const textClass = classNames(styles.text, {
    [styles.selected]: isSelected,
    [styles.wrong]: isSelected && !isCorrectChoose,
  });

  useEffect(() => {
    if (isSelected && !isCorrectChoose) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        onChooseVariant(answer.id);
        setIsAnimating(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isSelected, isCorrectChoose, answer, onChooseVariant]);

  return (
    <button
      className={`${styles.wrapper} ${textClass}`}
      onClick={() => {
        if (!isAnimating) {
          onChooseVariant(answer.id);
        }
      }}
      disabled={isAnimating}
    >
      <div>{answer.text}</div>
    </button>
  );
};
