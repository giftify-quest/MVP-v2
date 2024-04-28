import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture";
import { VariantQuestion } from "@/components/Sections/SectionVariantQuestion/components/QuestionWithAnswerVariant/VariantQuestion";
import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import { SectionQuestionProps } from "@/types/section";
import { useState } from "react";
import style from "./styles.module.scss";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";
import { IQuestionVariant } from "../types";
import { IAnswerWithOutPicture } from "@/types/answer";
import { title } from "process";

export const SectionVariantQuestion: React.FC<
  SectionQuestionProps<IQuestionVariant, IAnswerWithOutPicture>
> = ({ question, answer, blockImage, id, nextSectionId, title }) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className={style.wrapper}>
      <SectionTitle mainWord={title.mainWord} variant={"green"} />
      {!isReady ? (
        <VariantQuestion question={question} onReady={() => setIsReady(true)} />
      ) : (
        <AnswerWithOutPicture
          successText={answer.successText}
          bgSrc={answer.bgSrcAnswer}
        />
      )}
      <PhotosSection photos={blockImage} />
    </div>
  );
};
