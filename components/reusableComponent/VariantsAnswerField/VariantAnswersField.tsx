'use client'


import { VariantTextField } from '../VariantsTextField/VariantTextField'
import styles from './styles.module.scss'


interface VariantAnswersFields {
    id:string,
    text: string,
    isCorrect:boolean
}

interface testProps {
    answers: VariantAnswersFields[];
    selectedAnswerId :  string[] | null;
    isCorrectChoose: boolean;
    onChooseVariant: (id: string, correct: boolean, data:string) => void; 
}

export const VariantAnswersField:React.FC<testProps> = ({answers,selectedAnswerId, onChooseVariant})=> {
    return (
       <div className={styles.wrapper}>

        {answers.map((el)=> (
                 <VariantTextField
                 key={el.id}
                 answer={{
                   id: el.id,
                   correct: el.isCorrect,
                   text: el.text
                 }}
                 isSelected={selectedAnswerId && selectedAnswerId.includes(el.id)}
                 onChooseVariant={onChooseVariant} />
             ))}

       </div> 
    )
}