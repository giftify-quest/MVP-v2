'use client'


import styles from "./styles.module.scss";
import classNames from "classnames";



interface VariantTextFieldProps {
    answer: { id: string, correct: boolean, text: string },
    isSelected: boolean | null;
    onChooseVariant: (id: string, correct: boolean, text: string) => void
}


export const VariantTextField: React.FC<VariantTextFieldProps> = ({ answer, isSelected, onChooseVariant }) => {
    const shouldDisplayAsColumn = answer.text.length > 20;

    const divClass = classNames(styles.column)
    const textClass = classNames(!isSelected, styles.selected)


    return (
        <button
            className={`${styles.wrapper} 
                        ${divClass}
                        ${isSelected ? styles.selected : ''}
                        `}
            onClick={() => { onChooseVariant(answer.id, answer.correct, answer.text) }}
        >
            <div>
                {answer.text}
            </div>
        </button>
    );
};

export default VariantTextField;



