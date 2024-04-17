import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { WrapperWithBackground } from "../../../../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { TextField } from "@/components/reusableComponent/TextField/TextField";
import { ButtonConfirm } from "@/components/reusableComponent/ButtonConfirm/ButtonConfirm";
import { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";
import { IQuestionWithFreeInputProps } from "../../types";
import styles from "./styles.module.scss";

export const QuestionWithFreeInput: React.FC<IQuestionWithFreeInputProps> = ({
  question,
  onReady,
}) => {
  const [textValue, setTextValue] = useState<string>("");
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);
  const [isTextFieldError, setIsTextFieldError] = useState<boolean>(false);

  const checkAnswer = (value: string | string[]): boolean => {
    let result: boolean = false;
    if (Array.isArray(value)) {
      result = value.some(
        (item) =>
          item.replace(/[^\p{L}\s]/gu, "").toLowerCase() ===
          textValue.replace(/[^\p{L}\s]/gu, "").toLowerCase()
      );
    }
    if (typeof value === "string") {
      result =
        textValue.replace(/[^\p{L}\s]/gu, "").toLowerCase() ===
        value.replace(/[^\p{L}\s]/gu, "").toLowerCase();
    }
    return result;
  };

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace") {
      setIsTextFieldError(false);
    }
  };

  const onConfirm = () => {
    const check = checkAnswer(question.answers);
    if (check) {
      onReady();
    } else {
      setIsErrorMessage(!check);
      setIsTextFieldError(!check);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsTextFieldError(false);
    }, 3000);
  }, [isTextFieldError]);

  return (
    <WrapperWithBackground bgSrc={question.bgSrcQuestion}>
      <div className={styles.wrapper}>
        {isErrorMessage && (
          <div className={styles.error_block}>
            <TextFieldInfo
              variant="errorMessage"
              mainText={question.errorMessage}
              secondaryText={question.name}
              rotate={-1.8}
            />
          </div>
        )}
        <TextFieldInfo
          variant="text"
          mainText={question.questionText}
          secondaryText={question.name}
        />
        <TextField
          value={textValue}
          onChange={onChangeValue}
          isError={isTextFieldError}
          onKeyDown={onKeyDown}
        />
        <ButtonConfirm
          title={question.buttonTitle}
          isActive={!!textValue}
          isDisabled={!textValue}
          onClick={onConfirm}
        />
      </div>
    </WrapperWithBackground>
  );
};
