import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture";
import { ImageQuestion } from "@/components/Sections/ImageQuestionSection/components/ImageQuestions/ImageQuestion";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";


import { useState } from "react";
import { SectionImageQuestion } from "../types";
import { SectionQuestionProps } from "@/types/section";
import { IAnswerWithOutPicture } from "@/types/answer";
import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";




export const ImageQuestionSection: React.FC<SectionQuestionProps<SectionImageQuestion,IAnswerWithOutPicture>> = ({
    question,
    answer,
    blockImage,
    id,
    nextSectionId,
}) => {
    const [isReady, setIsReady] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

            <SectionTitle mainWord="need to get in props"
        secondWord="second words" variant={"purple"} />

            {isReady ? (<AnswerWithOutPicture
                successText={answer.successText}
                bgSrc={answer.bgImage} />)
                : (
                    <ImageQuestion bgSrcQuestion={question.question.bgSrcQuestion}
                    questionText={question.question.questionText}
                    name={question.question.name}
                    buttonTitle={question.question.buttonTitle}
                    errorMessage={question.question.errorMessage}
                    images={question.images}
                     onReady={()=>setIsReady(true)} />
                )

            }
            <PhotosSection photos={blockImage}/>
        </div>
    )

}