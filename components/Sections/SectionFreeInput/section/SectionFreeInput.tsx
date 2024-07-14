import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import { QuestionWithFreeInput } from "../components/QuestionWithFreeInput/QuestionWithFreeInput";
import { useRef, useState } from "react";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";
import { IQuestionWithFreeInput } from "../types/index";
import { ISectionProps } from "@/types/section";
import styles from "./styles.module.scss";
import { TAnswerComponent } from "@/types/answer";
import { AnswerComponent } from "@/components/AnswerComponents/AnswerComponent/AnswerComponent";

export const SectionFreeInput: React.FC<
  ISectionProps<IQuestionWithFreeInput, TAnswerComponent>
> = ({
  question,
  answer,
  blockImage,
  title,
  id,
  nextSectionId,
  name,
  lang,
  onAllowNextSlide,
}) => {
  const [isReady, setIsReady] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  const onReady = (isCorrect: boolean) => {
    setIsReady(isCorrect);
    if (isCorrect) {
      onAllowNextSlide();
    }

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.section} id={id} ref={sectionRef}>
      <div>
        <SectionTitle
          variant="purple"
          mainWord={title.mainWord}
          secondWord={title.secondWord}
        />
      </div>
      {isReady ? (
        <AnswerComponent answer={answer} />
      ) : (
        <QuestionWithFreeInput
          onReady={onReady}
          question={question}
          name={name}
          lang={lang}
        />
      )}
      <PhotosSection photos={blockImage} />
    </div>
  );
};
