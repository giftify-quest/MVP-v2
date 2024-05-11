import styles from "./styles.module.scss";
import { WrapperWithBackground } from "../../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { FramedPhoto } from "@/components/reusableComponent/FramedPhoto/FramedPhoto";
import { ConfettiIcon } from "@/components/reusableComponent/ConfettiIcon/ConfettiIcon";
import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { IAnswerWithPicture } from "@/types/answer";

export const AnswerWithPicture: React.FC<IAnswerWithPicture> = ({
  bgSrc,
  bgMobileSrc,
  successText,
  secondaryText,
  framedPhotoSrc,
}) => {
  return (
    <WrapperWithBackground bgSrc={bgSrc} bgMobileSrc={bgMobileSrc}>
      <div className={styles.wrapper_content}>
        <div>
          <TextFieldInfo
            mainText={successText}
            secondaryText={secondaryText}
            variant="text"
            rotate={-2.53}
          />
        </div>
        <FramedPhoto text="12.04.2009" imageSrc={framedPhotoSrc} />
        <div className={styles.icon}>
          <ConfettiIcon />
        </div>
      </div>
    </WrapperWithBackground>
  );
};
