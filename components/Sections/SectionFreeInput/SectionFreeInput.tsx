import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import { QuestionWithFreeInput } from "./QuestionWithFreeInput/QuestionWithFreeInput";
import { useState } from "react";
import { PhotosSection } from "@/components/reusableComponent/PhotosSection/PhotosSection";
import { SectionFreeInputProps } from "@/testContent/sectionFreeInput";
import { AnswerWithOutPicture } from "@/components/AnswerComponents/AnswerWithOutPicture/AnswerWithOutPicture";

export const SectionFreeInput: React.FC<SectionFreeInputProps> = ({
  question,
  answer,
  underSectionImage,
  id,
  nextSectionId,
}) => {
  const [isReady, setIsReady] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <SectionTitle
        variant="purple"
        mainWord="need to get in props"
        secondWord="second words"
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
          bgSrcQuestion={question.bgSrcQuestion}
          questionText={question.questionText}
          name={question.name}
          buttonTitle={question.buttonTitle}
          errorMessage={question.errorMessage}
          answers={question.answers}
        />
      )}
      <PhotosSection photos={underSectionImage} />
    </div>
  );
};
