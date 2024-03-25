'use client'

import VariantTextField from "../VariantsTextField/VariantTextField"
import styles from './styles.module.scss'


interface VariantAnswersFields {
    id:string,
    text: string,
    isCorrect:boolean
}

interface testProps {
    answers: VariantAnswersFields[],
    isSelected:string | null,
    onChooseVariant: (id: string, correct: boolean, date: string) => void
}


export const VariantAnswersField:React.FC<testProps> = ({answers,isSelected, onChooseVariant})=> {
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
                 isSelected={el.id === isSelected}
                 onChooseVariant={onChooseVariant} />
             ))}

       </div> 
    )
}