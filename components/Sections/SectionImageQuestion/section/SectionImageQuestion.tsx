import { ImageQuestion } from "@/components/Sections/SectionImageQuestion/components/ImageQuestions/ImageQuestion";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";
import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import { ISectionProps } from "@/types/section";
import { useRef, useState } from "react";
import { IQuestionImage } from "../types";
import { TAnswerComponent } from "@/types/answer";
import style from "./styles.module.scss";
import { AnswerComponent } from "@/components/AnswerComponents/AnswerComponent/AnswerComponent";

export const SectionImageQuestion: React.FC<
  ISectionProps<IQuestionImage, TAnswerComponent>
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
    <div className={style.wrapper} id={id} ref={sectionRef}>
      <div>
        <SectionTitle
          mainWord={title.mainWord}
          secondWord={title.secondWord}
          variant={"purple"}
        />
      </div>
      {isReady ? (
        <AnswerComponent answer={answer} />
      ) : (
        <ImageQuestion question={question} onReady={onReady} name={name} />
      )}
      <PhotosSection photos={blockImage} />
    </div>
  );
};
