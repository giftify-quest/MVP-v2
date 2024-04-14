import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { WrapperWithBackground } from "../../../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { TextField } from "@/components/reusableComponent/TextField/TextField";
import { ButtonConfirm } from "@/components/reusableComponent/ButtonConfirm/ButtonConfirm";
import { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";
import { IAnswerProps } from "@/types/Section";
import { IQuestionWithFreeInput } from "@/testContent/sectionFreeInput";

interface IQuestionWithFreeInputProps
  extends IAnswerProps,
    IQuestionWithFreeInput {}

export const QuestionWithFreeInput: React.FC<IQuestionWithFreeInputProps> = ({
  bgSrcQuestion,
  questionText,
  name,
  buttonTitle,
  errorMessage,
  answers,
  onReady,
}) => {
  const [textValue, setTextValue] = useState<string>("");
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);
  const [isTextFieldError, setIsTextFieldError] = useState<boolean>(false);

  const checkAnswer = (value: string | string[]): boolean => {
    let result: boolean = false;
    if (Array.isArray(value)) {
      console.log(value);
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
    const check = checkAnswer(answers);
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
    <WrapperWithBackground bgSrc={bgSrcQuestion}>
      <div
        style={{
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "85%",
          position: "relative",
        }}
      >
        {isErrorMessage && (
          <div style={{ position: "absolute", top: "200px", left: "100px" }}>
            <TextFieldInfo
              variant="errorMessage"
              mainText={errorMessage}
              secondaryText={name}
              rotate={1.8}
            />
          </div>
        )}
        <TextFieldInfo
          variant="question"
          mainText={questionText}
          secondaryText={name}
        />

        <TextField
          value={textValue}
          onChange={onChangeValue}
          isError={isTextFieldError}
          onKeyDown={onKeyDown}
        />
        <ButtonConfirm
          title={buttonTitle}
          isActive={!!textValue}
          isDisabled={!textValue}
          onClick={onConfirm}
        />
      </div>
    </WrapperWithBackground>
  );
};
