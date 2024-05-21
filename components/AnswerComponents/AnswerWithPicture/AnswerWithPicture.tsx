import styles from "./styles.module.scss";
import { WrapperWithBackground } from "../../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { FramedPhoto } from "@/components/reusableComponent/FramedPhoto/FramedPhoto";
import { ConfettiIcon } from "@/components/reusableComponent/ConfettiIcon/ConfettiIcon";
import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { IAnswerWithPicture } from "@/types/answer";
import { useIsMobile } from "@/hooks/useIsMobile";

export const AnswerWithPicture: React.FC<IAnswerWithPicture> = ({
  bgSrc,
  bgMobileSrc,
  successText,
  secondaryText,
  framedPhotoSrc,
  framedPhotoText,
}) => {
  const isMobile = useIsMobile();
  return (
    <WrapperWithBackground bgSrc={bgSrc} bgMobileSrc={bgMobileSrc}>
      <div className={styles.wrapper_content}>
        <div>
          <TextFieldInfo
            isMobileAnswer={useIsMobile()}
            mainText={successText}
            secondaryText={secondaryText}
            variant="text"
            rotate={-2.53}
          />
        </div>
        <FramedPhoto text={framedPhotoText} imageSrc={framedPhotoSrc} />
        {!isMobile && (
          <div className={styles.icon}>
            <ConfettiIcon />
          </div>
        )}
      </div>
    </WrapperWithBackground>
  );
};
