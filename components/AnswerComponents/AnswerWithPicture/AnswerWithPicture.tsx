import { useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import styles from "./styles.module.scss";
import { WrapperWithBackground } from "../../reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { FramedPhoto } from "@/components/reusableComponent/FramedPhoto/FramedPhoto";
import { ConfettiIcon } from "@/components/reusableComponent/ConfettiIcon/ConfettiIcon";
import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { IAnswerWithPicture } from "@/types/answer";
import { useIsMobile } from "@/hooks/useIsMobile";
import scrollDownImg from "/public/assets/scrollDownImg/arrowScrollDownEng.png";
import Image from "next/image";

export const AnswerWithPicture: React.FC<Omit<IAnswerWithPicture, "type">> = ({
  bgSrc,
  bgMobileSrc,
  successText,
  secondaryText,
  framedPhotoSrc,
  framedPhotoText,
}) => {
  const { isMobile, isChecking } = useIsMobile();
  const confettiRef = useRef<HTMLDivElement>(null);

  const shootConfetti = (side: "left" | "right") => {
    const originX = side === "left" ? 0 : 1;
    confetti({
      particleCount: 100,
      spread: 70,
      angle: side === "left" ? 55 : 125,
      origin: { x: originX, y: 0.5 },
      shapes: [
        confetti.shapeFromText({ text: "🩷", scalar: 10 }),
        confetti.shapeFromText({ text: "❤️‍🔥", scalar: 10 }),
        confetti.shapeFromText({ text: "🫶🏻", scalar: 20 }),
        confetti.shapeFromText({ text: "💞", scalar: 20 }),
        confetti.shapeFromText({ text: "❤️‍🔥", scalar: 20 }),
      ],
      ticks: 300,
    });
  };
  useEffect(() => {
    if (!isChecking) {
      shootConfetti("left");
      shootConfetti("right");
    }
  }, [isChecking]);

  if (isChecking) {
    return null;
  }

  const handleConfetti = () => {
    if (confettiRef.current) {
      confetti({
        particleCount: 200,
        spread: 80,
        angle: 65,
        origin: {
          x:
            (confettiRef.current.offsetLeft +
              confettiRef.current.offsetWidth / 2) /
            window.innerWidth,
          y:
            (confettiRef.current.offsetTop +
              confettiRef.current.offsetHeight / 1) /
            window.innerHeight,
        },
      });
    }
  };

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
            <div
              className={styles.icon}
              ref={confettiRef}
              onClick={handleConfetti}
            >
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
          <div className={styles.answer_text}>
            <TextFieldInfo
              isMobileAnswer={isMobile}
              mainText={successText}
              secondaryText={secondaryText}
              variant="text"
              rotate={-2.53}
            />
          </div>
          <div className={styles.photoWrapper}>
            <FramedPhoto text={framedPhotoText} imageSrc={framedPhotoSrc} />
          </div>
          {!isMobile && (
            <div
              className={styles.icon}
              ref={confettiRef}
              onClick={handleConfetti}
            >
              <ConfettiIcon />
            </div>
          )}
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
