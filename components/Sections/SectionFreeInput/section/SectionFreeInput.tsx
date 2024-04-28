import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import { QuestionWithFreeInput } from "../components/QuestionWithFreeInput/QuestionWithFreeInput";
import { useState } from "react";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";
import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture";
import { IQuestionWithFreeInput } from "../types/index";
import { ISection, ISectionProps } from "@/types/section";
import styles from "./styles.module.scss";
import { IAnswerWithOutPicture } from "@/types/answer";

export const SectionFreeInput: React.FC<
  ISectionProps<IQuestionWithFreeInput, IAnswerWithOutPicture>
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
  return (
    <div className={styles.section}>
      <SectionTitle
        variant="purple"
        mainWord={title.mainWord}
        secondWord={title.secondWord}
      />
      {isReady ? (
        <AnswerWithOutPicture
          bgSrcAnswer={answer.bgSrcAnswer}
          successText={answer.successText}
          secondaryText={name}
        />
      ) : (
        <QuestionWithFreeInput
          onReady={() => setIsReady(true)}
          question={question}
          name={name}
          onAllowNextSlide={onAllowNextSlide}
        />
      )}
      <PhotosSection photos={blockImage} />
    </div>
  );
};
