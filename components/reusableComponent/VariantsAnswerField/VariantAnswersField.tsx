import { VariantTextField } from "../VariantsTextField/VariantTextField";
import styles from "./styles.module.scss";

interface VariantAnswersFields {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface VariantAnswersFieldProps {
  answers: VariantAnswersFields[];
  selectedAnswerId: string | null;
  isCorrectChoose: boolean;
  onChooseVariant: (id: string) => void;
}

export const VariantAnswersField: React.FC<VariantAnswersFieldProps> = ({
  answers,
  selectedAnswerId,
  onChooseVariant,
  isCorrectChoose,
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
          isSelected={selectedAnswerId === el.id}
          onChooseVariant={onChooseVariant}
          isCorrectChoose={isCorrectChoose}
        />
      ))}
    </div>
  );
};
