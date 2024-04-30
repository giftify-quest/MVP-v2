import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture";
import { ImageQuestion } from "@/components/Sections/SectionImageQuestion/components/ImageQuestions/ImageQuestion";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";

import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import { IAnswerWithOutPicture } from "@/types/answer";
import { ISectionProps } from "@/types/section";
import { useState } from "react";
import { IQuestionImage } from "../types";

export const SectionImageQuestion: React.FC<
  ISectionProps<IQuestionImage, IAnswerWithOutPicture>
> = ({
  question,
  answer,
  blockImage,
  title,
  id,
  nextSectionId,
  name,
  onAllowNextSlide,
}) => {
  const [isReady, setIsReady] = useState(false);

  const onReady = () => {
    setIsReady(true);
    onAllowNextSlide();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <SectionTitle
        mainWord={title.mainWord}
        secondWord={title.secondWord}
        variant={"purple"}
      />

      {isReady ? (
        <AnswerWithOutPicture
          successText={answer.successText}
          bgSrc={answer.bgSrc}
        />
      ) : (
        <ImageQuestion question={question} onReady={onReady} name={name} />
      )}
      <PhotosSection photos={blockImage} />
    </div>
  );
};
