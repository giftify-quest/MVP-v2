import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture";
import { VariantQuestion } from "@/components/Sections/SectionVariantQuestion/components/QuestionWithAnswerVariant/VariantQuestion";
import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import { ISectionProps } from "@/types/section";
import { useState } from "react";
import style from "./styles.module.scss";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";
import { IQuestionVariant } from "../types";
import { IAnswerWithOutPicture, IAnswerWithPicture } from "@/types/answer";
import { AnswerWithPicture } from "@/components/AnswerComponents/AnswerWithPicture/AnswerWithPicture";

export const SectionVariantQuestion: React.FC<
  ISectionProps<IQuestionVariant, IAnswerWithPicture>
> = ({
  question,
  answer,
  blockImage,
  id,
  nextSectionId,
  title,
  onAllowNextSlide,
  name,
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
          variant={"green"}
        />
      </div>
      {!isReady ? (
        <VariantQuestion question={question} onReady={onReady} name={name} />
      ) : (
        <AnswerWithPicture
          successText={answer.successText}
          bgSrc={answer.bgSrc}
          bgMobileSrc={answer.bgMobileSrc}
          secondaryText={name}
          framedPhotoSrc={answer.framedPhotoSrc}
          framedPhotoText={""}
        />
      )}
      <PhotosSection photos={blockImage} />
    </div>
  );
};
