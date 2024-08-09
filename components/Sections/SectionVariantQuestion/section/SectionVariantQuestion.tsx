import { VariantQuestion } from "@/components/Sections/SectionVariantQuestion/components/QuestionWithAnswerVariant/VariantQuestion";
import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import { useRef, useState } from "react";
import style from "./styles.module.scss";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";
import { IQuestionVariant, ISectionVariantProps } from "../types";
import { TAnswerComponent } from "@/types/answer";
import { AnswerComponent } from "@/components/AnswerComponents/AnswerComponent/AnswerComponent";

export const SectionVariantQuestion: React.FC<
  ISectionVariantProps<IQuestionVariant, TAnswerComponent>
> = ({ data, onAllowNextSlide, name }) => {
  const { question, answer, blockImage, id, nextSectionId, title } = data;
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
          variant={"green"}
        />
      </div>
      {!isReady ? (
        <VariantQuestion question={question} onReady={onReady} name={name} />
      ) : (
        <AnswerComponent answer={answer} />
      )}
      <PhotosSection photos={blockImage} />
    </div>
  );
};
