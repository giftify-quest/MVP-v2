import { TextFieldInfo } from "@/reusableComponent/TextFieldInfo/TextFieldInfo";
import styles from "./styles.module.scss";
import { WrapperWithBackground } from "../../WrapperWithBackground/WrapperWithBackground";
import { FramedPhoto } from "@/components/FramedPhoto/FramedPhoto";
import { ConfettiIcon } from "@/components/ConfettiIcon/ConfettiIcon";

interface IAnswerWithPicture {
  successText: string;
  secondaryText?: string;
  bgSrc: string;
  framedPhotoSrc: string;
}

export const AnswerWithPicture: React.FC<IAnswerWithPicture> = ({
  bgSrc,
  successText,
  secondaryText,
  framedPhotoSrc,
}) => {
  return (
    <WrapperWithBackground bgSrc={bgSrc}>
      <div className={styles.wrapper_content}>
        <div>
          <TextFieldInfo
            mainText={successText}
            secondaryText={secondaryText}
            variant="question"
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
