'use client'

import { VariantTextField } from '../VariantsTextField/VariantTextField'
import styles from './styles.module.scss'

interface VariantAnswersFields {
    id: string;
    text: string;
    isCorrect: boolean;
}

interface testProps {
    answers: VariantAnswersFields[];
    isSelected: string | null;
    isCorrectChoose: boolean;
    onChooseVariant: (id: string, correct: boolean, data:string) => void; 
}

export const VariantAnswersField: React.FC<testProps> = ({ answers, isSelected, onChooseVariant, isCorrectChoose }) => {
    return (
        <div className={styles.wrapper}>
            {answers.map((el) => (
                <VariantTextField
                    key={el.id}
                    answer={{
                        id: el.id,
                        correct: el.isCorrect,
                        text: el.text
                    }}
                    isSelected={el.id === isSelected}
                    onChooseVariant={onChooseVariant}
                    isCorrectChoose={isCorrectChoose}
                />
            ))}
        </div>
    );
};
