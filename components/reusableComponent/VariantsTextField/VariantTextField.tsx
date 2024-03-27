'use client'


import styles from "./styles.module.scss";
import classNames from "classnames";



interface VariantTextFieldProps {
    answer: { id: string, correct: boolean, text: string },
    isSelected: boolean | null;
    isCorrectChoose:boolean
    onChooseVariant: (id: string, correct: boolean, text: string) => void
}

export const VariantTextField: React.FC<VariantTextFieldProps> = ({ answer, isSelected, onChooseVariant, isCorrectChoose }) => {
    const shouldDisplayAsColumn = answer.text.length > 20;



    const divClass = classNames(styles.column);
    const textClass = classNames(styles.text, {
        [styles.selected]: isSelected,
        [styles.wrong]: isSelected && !isCorrectChoose 
    });

    return (
        <button
            className={`${styles.wrapper} ${divClass} ${isSelected ? styles.selected : ''} ${textClass}`}
            onClick={() => { onChooseVariant(answer.id, answer.correct, answer.text) }}>
            <div>
                {answer.text}
            </div>
        </button>
    );
};






