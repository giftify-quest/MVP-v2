import styles from "./styles.module.scss";
import { WrapperWithBackground } from "../../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { IAnswerWithOutPicture } from "@/types/answer";

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
          variant="text"
          rotate={2.53}
        />
      </div>
    </WrapperWithBackground>
  );
};
