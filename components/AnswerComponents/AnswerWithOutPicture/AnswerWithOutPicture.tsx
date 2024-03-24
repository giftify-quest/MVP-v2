import { TextFieldInfo } from "@/reusableComponent/TextFieldInfo/TextFieldInfo";
import styles from "./styles.module.scss";
import { WrapperWithBackground } from "../../reusableComponent/WrapperWithBackground/WrapperWithBackground";

interface IAnswerWithOutPicture {
  successText: string;
  secondaryText?: string;
  bgSrc: string;
}

export const AnswerWithOutPicture: React.FC<IAnswerWithOutPicture> = ({
  bgSrc,
  successText,
  secondaryText,
}) => {
  return (
    <WrapperWithBackground bgSrc={bgSrc}>
      <div className={styles.wrapper_content}>
        <TextFieldInfo
          mainText={successText}
          secondaryText={secondaryText}
          variant="question"
          rotate={2.53}
        />
      </div>
    </WrapperWithBackground>
  );
};
