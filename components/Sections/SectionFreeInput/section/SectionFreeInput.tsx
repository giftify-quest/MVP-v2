import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import { QuestionWithFreeInput } from "../components/QuestionWithFreeInput/QuestionWithFreeInput";
import { useState } from "react";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";
import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture";
import { IQuestionWithFreeInput } from "../types/index";
import { SectionQuestionProps } from "@/types/section";
import styles from "./styles.module.scss";
import { IAnswerWithOutPicture } from "@/types/answer";

export const SectionFreeInput: React.FC<
  SectionQuestionProps<IQuestionWithFreeInput, IAnswerWithOutPicture>
> = ({ question, answer, blockImage, title, id, nextSectionId }) => {
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
          secondaryText={answer.secondaryText}
        />
      ) : (
        <QuestionWithFreeInput
          onReady={() => setIsReady(true)}
          question={question}
        />
      )}
      <PhotosSection photos={blockImage} />
    </div>
  );
};
