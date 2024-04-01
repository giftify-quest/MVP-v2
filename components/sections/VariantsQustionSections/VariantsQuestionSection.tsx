import { VariantQuestion } from "@/components/QuestionWithAnswerVariant/VariantQuestion"
import { VariantQuestionInterface } from "@/types/answer/VariantAsnwerType"


interface VariantQuestionSectionsProps {


}



export const VariantQuestionSections: React.FC<VariantQuestionInterface> = ({title, bgImage, gift, giftText,
    questionText, answers, buttonText, wrongAnswerText, wrongAnswerButtonText, multipleAnswer}) => {


    return (
        <>
            <VariantQuestion bgImage={bgImage}
                title={title}
                questionText={questionText}
                answers={answers}
                buttonText={buttonText}
                wrongAnswerText={wrongAnswerText}
                wrongAnswerButtonText={wrongAnswerButtonText}
                multipleAnswer={multipleAnswer} />
        </>
    )
}