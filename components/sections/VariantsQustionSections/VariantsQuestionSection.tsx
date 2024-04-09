import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture"
import { VariantQuestion } from "@/components/QuestionWithAnswerVariant/VariantQuestion"
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import { Section } from "@/types/Section"
import { useState } from "react";
import style from './styles.module.scss'
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";



export const VariantQuestionSections: React.FC<Section> = ({ question, answer, underSectionImage,id,nextSectionId }) => {


    const [isReady, setIsReady] = useState(false)


    return (
        <div className={style.wrapper} >
            <SectionTitle mainWord={question.title} variant={"green"} />
            {!isReady ?
                <VariantQuestion
                    question={question}
                    isReady={() => setIsReady(true)} />
                :
                <AnswerWithOutPicture
                    successText={answer.answer.text}
                    bgSrc={answer.bgImage} />
            }
            <PhotosSection photos={underSectionImage} />
        </div>
    )
}