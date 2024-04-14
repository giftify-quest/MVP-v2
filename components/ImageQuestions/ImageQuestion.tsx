import { ImageQuestionType } from "@/testContent/imagequestionsection";
import { WrapperWithBackground } from "../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { IAnswerProps } from "@/types/Section";
import { use, useState } from "react";
import { TextFieldInfo } from "../reusableComponent/TextFieldInfo/TextFieldInfo";
import { ImageForQuestionComponent } from "../reusableComponent/ImageForQuestionComponent/ImageForQuestionComponent";
import { ButtonConfirm } from "../reusableComponent/ButtonConfirm/ButtonConfirm";
import style from './styles.module.scss';

interface ImageQuestionProps extends IAnswerProps, ImageQuestionType {}

export const ImageQuestion: React.FC<ImageQuestionProps> = ({
  bgSrcQuestion,
  questionText,
  name,
  buttonTitle,
  errorMessage,
  images,
  onReady,
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
      onReady()
    } else {
      setIsCorrectAnswer(false);
      setCheckAnswer(true);
      setIsExplanationShown(true);
      setIsDisabledButton(true)
      setIsActiveButton(false)
    }
  };

  const handleChooseVariant = (imageId: string, correct: boolean) => {
    setIsDisabledButton(false)
    setIsActiveButton(true)
    setSelectedAnswerId(imageId);
    setIsCorrectChoose(correct);
  };

  return (
    <div>
      <WrapperWithBackground bgSrc={bgSrcQuestion}>
        <div className={style.wrapper}>
          <div className={style.header}>
            <TextFieldInfo mainText={questionText} variant={"question"} secondaryText={"Pavel"} />
          </div>
          {isExplanationShown && (
            <div className={style.wrongText}>
              <TextFieldInfo variant="errorMessage" mainText={errorMessage} secondaryText={name} rotate={1.8} />
            </div>
          )}
          <div className={style.imageContainer}>
            {images?.map((image) => (
              <ImageForQuestionComponent
                key={image.id}
                image={image}
                onChooseVariant={() => handleChooseVariant(image.id, image.correct)}
                isSelected={image.id === selectedAnswerId}
                isCorrect={isCorrectAnswer}
              />
            ))}
          </div>
          <ButtonConfirm title={buttonTitle} onClick={handleCheckAnswer} isActive={isActiveButton} isDisabled={isDisabledButton} />
        </div>
      </WrapperWithBackground>
    </div>
  );
};