import { WrapperWithBackground } from "../../../../reusableComponent/WrapperWithBackground/WrapperWithBackground";

import { useState } from "react";
import { ButtonConfirm } from "../../../../reusableComponent/ButtonConfirm/ButtonConfirm";
import { ImageForQuestionComponent } from "../../../../reusableComponent/ImageForQuestionComponent/ImageForQuestionComponent";
import { TextFieldInfo } from "../../../../reusableComponent/TextFieldInfo/TextFieldInfo";
import { ImageQuestionProps } from "../../types";
import style from "./styles.module.scss";

export const ImageQuestion: React.FC<ImageQuestionProps> = ({
  question,
  onReady,
  name,
}) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<null | string>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [isCorrectChoose, setIsCorrectChoose] = useState(true);
  const [isExplanationShown, setIsExplanationShown] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isActiveButton, setIsActiveButton] = useState(false);

  const handleCheckAnswer = () => {
    if (isCorrectChoose) {
      setIsCorrectAnswer(true);
      setCheckAnswer(true);
      onReady();
    } else {
      setIsCorrectAnswer(false);
      setCheckAnswer(true);
      setIsExplanationShown(true);
      setIsDisabledButton(true);
      setIsActiveButton(false);
    }
  };

  const handleChooseVariant = (imageId: string, correct: boolean) => {
    setIsDisabledButton(false);
    setIsActiveButton(true);
    setSelectedAnswerId(imageId);
    setIsCorrectChoose(correct);
  };

  return (
    <WrapperWithBackground bgSrc={question.bgImage}>
      <div className={style.wrapper}>
        <div className={style.question}>
          <TextFieldInfo
            mainText={question.questionText}
            secondaryText={name}
            variant={"text"}
          />
        </div>
        {isExplanationShown && (
          <div className={style.wrongText}>
            <TextFieldInfo
              variant="errorMessage"
              mainText={question.wrongAnswerText}
              secondaryText={name}
              rotate={1.8}
            />
          </div>
        )}
        <div className={style.imageContainer}>
          {question.images?.map((image) => (
            <ImageForQuestionComponent
              key={image.id}
              image={image}
              onChooseVariant={() =>
                handleChooseVariant(image.id, image.correct)
              }
              isSelected={image.id === selectedAnswerId}
              isCorrect={isCorrectAnswer}
            />
          ))}
        </div>
        <ButtonConfirm
          title={question.buttonText}
          onClick={handleCheckAnswer}
          isActive={isActiveButton}
          isDisabled={isDisabledButton}
        />
      </div>
    </WrapperWithBackground>
  );
};
