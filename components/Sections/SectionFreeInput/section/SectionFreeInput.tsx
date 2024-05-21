import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import { QuestionWithFreeInput } from "../components/QuestionWithFreeInput/QuestionWithFreeInput";
import { useState } from "react";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";
import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture";
import { IQuestionWithFreeInput } from "../types/index";
import { ISectionProps } from "@/types/section";
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

  const onReady = () => {
    setIsReady(true);
    onAllowNextSlide();
  };

  return (
    <div className={styles.section}>
      <div>
        <SectionTitle
          variant="purple"
          mainWord={title.mainWord}
          secondWord={title.secondWord}
        />
      </div>
      {isReady ? (
        <AnswerWithOutPicture
          bgSrc={answer.bgSrc}
          successText={answer.successText}
          secondaryText={name}
          bgMobileSrc={answer.bgMobileSrc}
        />
      ) : (
        <QuestionWithFreeInput
          onReady={onReady}
          question={question}
          name={name}
        />
      )}
      <PhotosSection photos={blockImage} />
    </div>
  );
};
