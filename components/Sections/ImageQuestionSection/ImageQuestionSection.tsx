import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture";
import { ImageQuestion } from "@/components/ImageQuestions/ImageQuestion";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import { SectionImageQuestion } from "@/testContent/imagequestionsection";
import { useState } from "react";




export const ImageQuestionSection: React.FC<SectionImageQuestion> = ({
    question,
    answer,
    underSectionImage,
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
                bgSrcAnswer={answer.bgImage} />)
                : (
                    <ImageQuestion bgSrcQuestion={question.bgSrcQuestion}
                    questionText={question.questionText}
                    name={question.name}
                    buttonTitle={question.buttonTitle}
                    errorMessage={question.errorMessage}
                    images={question.images}
                     onReady={()=>setIsReady(true)} />
                )

            }
            <PhotosSection photos={underSectionImage}/>
        </div>
    )

}