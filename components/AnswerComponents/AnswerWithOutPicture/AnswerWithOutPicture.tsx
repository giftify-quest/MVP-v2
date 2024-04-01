
import styles from "./styles.module.scss";
import { WrapperWithBackground } from "../../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";

interface IAnswerWithOutPicture {
  successText: string;
  secondaryText?: string;
  bgSrc: string ;
}

export const AnswerWithOutPicture: React.FC<IAnswerWithOutPicture> = ({
  bgSrcAnswer: bgSrc,
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
          rotate={-2.53}
        />
      </div>
    </WrapperWithBackground>
  );
};
