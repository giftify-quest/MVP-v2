import styles from "./styles.module.scss";
import { WrapperWithBackground } from "../../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { FramedPhoto } from "@/components/reusableComponent/FramedPhoto/FramedPhoto";
import { ConfettiIcon } from "@/components/reusableComponent/ConfettiIcon/ConfettiIcon";
import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { IAnswerWithPicture } from "@/types/answer";
import { useIsMobile } from "@/hooks/useIsMobile";
import scrollDownImg from "/public/assets/scrollDownImg/arrowScrollDownEng.png";
import Image from "next/image";

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
      {isMobile ? (
        <div className={styles.wrapper_content}>
          <div className={styles.mobilePhotoWrapper}>
            <FramedPhoto text={framedPhotoText} imageSrc={framedPhotoSrc} />
          </div>
          <div className={styles.textFieldMobile}>
            <TextFieldInfo
              isMobileAnswer={isMobile}
              mainText={successText}
              secondaryText={secondaryText}
              variant="text"
              rotate={-2.53}
            />
          </div>
          {!isMobile && (
            <div className={styles.icon}>
              <ConfettiIcon />
            </div>
          )}
          <div className={styles.scrollImage}>
            <Image
              src={scrollDownImg}
              width={isMobile ? 250 : 350}
              height={isMobile ? 250 : 200}
              alt="scrollDown"
            />
          </div>
        </div>
      ) : (
        <div className={styles.wrapper_content}>
          <div style={{ width: "80%" }}>
            <TextFieldInfo
              isMobileAnswer={isMobile}
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
          <div className={styles.scrollImage}>
            <Image
              src={scrollDownImg}
              width={isMobile ? 350 : 169}
              height={isMobile ? 350 : 163}
              alt="scrollDown"
            />
          </div>
        </div>
      )}
    </WrapperWithBackground>
  );
};
