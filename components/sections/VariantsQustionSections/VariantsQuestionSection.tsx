import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture"
import { VariantQuestion } from "@/components/QuestionWithAnswerVariant/VariantQuestion"
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import { Section } from "@/types/Section"
import { useState } from "react";
import style from './styles.module.scss'
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";



export const VariantQuestionSections: React.FC<Section> = ({ question, answer, underSectionImage }) => {

    const [isCorrectChoose, setIsCorrectChoose] = useState(true);
    const [selectedAnswerText, setSelectedAnswerText] = useState(question.buttonText);
    const [selectedAnswerId, setSelectedAnswerId] = useState<null | string[]>(null);
    const [showFinalComponent, setShowFinalComponent] = useState(false);
    const [showExplanatoryText, setShowExplanatoryText] = useState(false);
    const [clearSelectedAfterCheck, setClearSelectedAfterCheck] = useState(false);
    const [isActiveButton, setIsActiveButton] = useState(false);
    const [isDisabledButton, setIsDisabledButton] = useState(true);

    const handleChooseMultipleVariant = (id: string, correct: boolean, date: string) => {
        if (clearSelectedAfterCheck) {
            setSelectedAnswerId([id]);
            setClearSelectedAfterCheck(false)
            setIsDisabledButton(true)

        } else {
            setIsDisabledButton(true)
            if (!isCorrectChoose && selectedAnswerId) {
                setSelectedAnswerId(selectedAnswerId.map(item => (item === id ? item : null)) as string[]);
            }
            setSelectedAnswerId(prevSelected =>
                prevSelected && prevSelected.includes(id) && !isCorrectChoose
                    ? prevSelected.filter(item => item !== id)
                    : [...(prevSelected || []), id]
            );
        }
        setIsDisabledButton(false)
        setIsActiveButton(true)
        setIsCorrectChoose(true);

        setSelectedAnswerText(question.buttonText);
    };


    const handleCheckMultipleVariant = () => {
        if (selectedAnswerId && selectedAnswerId.length > 0) {
            const totalCorrectAnswers = question.answers.filter(answer => answer.isCorrect).length;
            const selectedCorrectAnswers = selectedAnswerId.filter(id =>
                question.answers.find(answer => answer.id === id && answer.isCorrect)
            ).length;

            const hasIncorrectAnswer = selectedAnswerId.some(id =>
                question.answers.find(answer => answer.id === id && !answer.isCorrect)
            );

            if (selectedCorrectAnswers === totalCorrectAnswers && !hasIncorrectAnswer) {
                console.log('correct');
                setSelectedAnswerText(question.wrongAnswerButtonText);
                setShowFinalComponent(true);
                setIsCorrectChoose(true);
                setShowExplanatoryText(false);
            } else {
                console.log('wrong');
                setSelectedAnswerText("wrong");
                setShowExplanatoryText(true);
                setIsCorrectChoose(false);
            }
        } else {
            setShowExplanatoryText(true);
            setIsCorrectChoose(false);
            setShowFinalComponent(false);
        }
    };

    return (

        <div className={style.wrapper} >
            <div>
                <SectionTitle mainWord={question.title} variant={"green"} />
            </div>

            {!showFinalComponent ?
                <VariantQuestion question={question}
                    handleChooseMultipleVariant={handleChooseMultipleVariant}
                    handleCheckMultipleVariant={handleCheckMultipleVariant}
                    isCorrectChoose={isCorrectChoose}
                    selectedAnswerId={selectedAnswerId}
                    showExplanatoryText={showExplanatoryText}
                    isActiveButton={isActiveButton}
                    isDisabledButton={isDisabledButton} />

                :

                <AnswerWithOutPicture successText={answer.answer.text} bgSrc={answer.bgImage} />
            }
            
            <div>
                <PhotosSection photos={underSectionImage}/>
            </div>

        </div>
    )
}