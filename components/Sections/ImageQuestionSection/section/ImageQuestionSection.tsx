import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture";
import { ImageQuestion } from "@/components/Sections/ImageQuestionSection/components/ImageQuestions/ImageQuestion";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";


import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import { IAnswerWithOutPicture } from "@/types/answer";
import { SectionQuestionProps } from "@/types/section";
import { useState } from "react";
import { IQuestionImage } from "../types";



export const ImageQuestionSection: React.FC<SectionQuestionProps<IQuestionImage, IAnswerWithOutPicture>> = ({
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
                    <ImageQuestion
                        question={question}
                        onReady={() => setIsReady(true)} />
                )

            }
            <PhotosSection photos={blockImage} />
        </div>
    )

}