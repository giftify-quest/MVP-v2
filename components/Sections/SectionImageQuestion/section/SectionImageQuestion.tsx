import { ImageQuestion } from "@/components/Sections/SectionImageQuestion/components/ImageQuestions/ImageQuestion";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";
import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import { ISectionProps } from "@/types/section";
import { useState } from "react";
import { IQuestionImage } from "../types";
import { AnswerWithPicture } from "@/components/AnswerComponents/AnswerWithPicture/AnswerWithPicture";
import { IAnswerWithPicture } from "@/types/answer";
import style from "./styles.module.scss";

export const SectionImageQuestion: React.FC<
  ISectionProps<IQuestionImage, IAnswerWithPicture>
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
    <div className={style.wrapper}>
      <div>
        <SectionTitle
          mainWord={title.mainWord}
          secondWord={title.secondWord}
          variant={"purple"}
        />
      </div>
      {isReady ? (
        <AnswerWithPicture
          successText={answer.successText}
          secondaryText={name}
          bgSrc={answer.bgSrc}
          bgMobileSrc={answer.bgMobileSrc}
          framedPhotoSrc={answer.framedPhotoSrc}
          framedPhotoText={answer.framedPhotoText}
        />
      ) : (
        <ImageQuestion question={question} onReady={onReady} name={name} />
      )}
      <PhotosSection photos={blockImage} />
    </div>
  );
};
