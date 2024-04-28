import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture";
import { VariantQuestion } from "@/components/Sections/SectionVariantQuestion/components/QuestionWithAnswerVariant/VariantQuestion";
import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import { ISectionProps } from "@/types/section";
import { useState } from "react";
import style from "./styles.module.scss";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";
import { IQuestionVariant } from "../types";
import { IAnswerWithOutPicture } from "@/types/answer";

export const SectionVariantQuestion: React.FC<
  ISectionProps<IQuestionVariant, IAnswerWithOutPicture>
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

  return (
    <div className={style.wrapper}>
      <SectionTitle mainWord={title.mainWord} variant={"green"} />
      {!isReady ? (
        <VariantQuestion
          question={question}
          onReady={() => setIsReady(true)}
          name={name}
          onAllowNextSlide={onAllowNextSlide}
        />
      ) : (
        <AnswerWithOutPicture
          successText={answer.successText}
          bgSrcAnswer={answer.bgSrcAnswer}
          secondaryText={name}
        />
      )}
      <PhotosSection photos={blockImage} />
    </div>
  );
};
