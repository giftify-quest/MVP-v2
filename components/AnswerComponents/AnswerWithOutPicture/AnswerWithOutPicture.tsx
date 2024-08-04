import styles from "./styles.module.scss";
import { WrapperWithBackground } from "../../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { IAnswerWithOutPicture } from "@/types/answer";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import scrollDownImg from "/public/assets/scrollDownImg/arrowScrollDownEng.png";

export const AnswerWithOutPicture: React.FC<
  Omit<IAnswerWithOutPicture, "type">
> = ({ bgSrc, bgMobileSrc, successText, secondaryText }) => {
  const { isMobile } = useIsMobile();
  return (
    <WrapperWithBackground bgSrc={bgSrc} bgMobileSrc={bgMobileSrc}>
      {isMobile ? (
        <div className={styles.wrapper_content}>
          <div className={styles.textFieldMobile}>
            <TextFieldInfo
              isMobileAnswer={isMobile}
              mainText={successText}
              secondaryText={secondaryText}
              variant="text"
              rotate={-2.53}
            />
          </div>
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
          <div className={styles.answer_text}>
            <TextFieldInfo
              isMobileAnswer={isMobile}
              mainText={successText}
              secondaryText={secondaryText}
              variant="text"
              rotate={-2.53}
            />
          </div>
          <div className={styles.scrollImage}>
            <Image
              src={scrollDownImg}
              width={isMobile ? 350 : 269}
              height={isMobile ? 350 : 263}
              alt="scrollDown"
            />
          </div>
        </div>
      )}
    </WrapperWithBackground>
  );
};
