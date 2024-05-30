import { WrapperWithBackground } from "../../../../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { useState } from "react";
import { ButtonConfirm } from "../../../../reusableComponent/ButtonConfirm/ButtonConfirm";
import { TextFieldInfo } from "../../../../reusableComponent/TextFieldInfo/TextFieldInfo";
import { ImageQuestionProps } from "../../types";
import style from "./styles.module.scss";
import { ImagesWrapper } from "../ImagesWrapper/ImagesWrapper";

export const ImageQuestion: React.FC<ImageQuestionProps> = ({
  question,
  onReady,
  name,
}) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<null | string>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<null | boolean>(null);
  const [isCorrectChoose, setIsCorrectChoose] = useState(true);
  const [isExplanationShown, setIsExplanationShown] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isActiveButton, setIsActiveButton] = useState(false);

  const handleCheckAnswer = () => {
    if (isCorrectChoose) {
      setIsCorrectAnswer(true);
      onReady();
    } else {
      setIsCorrectAnswer(false);
      setIsExplanationShown(true);
      setIsDisabledButton(true);
      setIsActiveButton(false);
    }
  };

  const handleChooseVariant = (imageId: string, correct: boolean) => {
    setIsCorrectAnswer(null);
    setIsDisabledButton(false);
    setIsActiveButton(true);
    setSelectedAnswerId(imageId);
    setIsCorrectChoose(correct);
  };

  return (
    <WrapperWithBackground
      bgSrc={question.bgImage}
      bgMobileSrc={question.bgMobile}
    >
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

        <div className={style.imageButtonWrapper}>
          <ImagesWrapper
            images={question.images}
            handleChooseVariant={handleChooseVariant}
            isCorrectAnswer={isCorrectAnswer}
            selectedAnswerId={selectedAnswerId}
          />
          <div style={{ marginTop: "2rem" }}>
            <ButtonConfirm
              title={question.buttonText}
              onClick={handleCheckAnswer}
              isActive={isActiveButton}
              isDisabled={isDisabledButton}
            />
          </div>
        </div>
      </div>
    </WrapperWithBackground>
  );
};
