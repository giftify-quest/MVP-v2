import styles from "./styles.module.scss";
import { WrapperWithBackground } from "../../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { IAnswerWithOutPicture } from "@/types/answer";
import { useIsMobile } from "@/hooks/useIsMobile";

export const AnswerWithOutPicture: React.FC<IAnswerWithOutPicture> = ({
  bgSrc,
  bgMobileSrc,
  successText,
  secondaryText,
}) => {
  return (
    <WrapperWithBackground bgSrc={bgSrc} bgMobileSrc={bgMobileSrc}>
      <div className={styles.wrapper_content}>
        <TextFieldInfo
          isMobileAnswer={useIsMobile()}
          mainText={successText}
          secondaryText={secondaryText}
          variant="text"
          rotate={2.53}
        />
      </div>
    </WrapperWithBackground>
  );
};
