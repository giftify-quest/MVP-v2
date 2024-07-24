import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { WrapperWithBackground } from "@/components/reusableComponent/WrapperWithBackground/WrapperWithBackground";
import styles from "./styles.module.scss";
import { ButtonConfirm } from "@/components/reusableComponent/ButtonConfirm/ButtonConfirm";
import { useEffect, useRef, useState } from "react";
import { FeedPhotosComponents } from "../FeedPhotosComponent/FeedPhotoSection";
import { IWishesFinalSurpriseProps } from "../../types";
import { useIsMobile } from "@/hooks/useIsMobile";

const smoothScrollTo = (target: Element | null, duration: number) => {
  if (!target) return;

  const start = window.pageYOffset;
  const end = target.getBoundingClientRect().top + start;
  const distance = end - start;
  const startTime = performance.now();

  const scroll = (currentTime: number) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const scrollY = start + distance * progress;

    window.scrollTo(0, scrollY);

    if (timeElapsed < duration) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

export const WisherFinalSurprise: React.FC<IWishesFinalSurpriseProps> = ({
  bgSrc,
  bgMobileSrc,
  wishers,
  textConfirmButton,
  feedPhotos,
  name,
  musicSrc,
}) => {
  const [isOpenCollage, setIsOpenCollage] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isMobile } = useIsMobile();
  const collageRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const handleClick = () => {
    setIsOpenCollage(true);
    setTimeout(() => {
      if (bottomRef.current) {
        smoothScrollTo(bottomRef.current, 8000);
      }
    }, 100);
  };

  return (
    <>
      <audio ref={audioRef} src={musicSrc} autoPlay></audio>
      <WrapperWithBackground bgSrc={bgSrc} bgMobileSrc={bgMobileSrc}>
        <div className={styles.wrapper}>
          <div className={styles.wrap_wishers}>
            {wishers.map((wisher) => (
              <TextFieldInfo
                isMobileAnswer={isMobile}
                key={wisher.wisher}
                variant="text"
                mainText={wisher.wisher}
                secondaryText={name}
                rotate={-3.6}
              />
            ))}
          </div>
          <div className={styles.buttonWrapper}>
            <ButtonConfirm
              title={textConfirmButton}
              onClick={handleClick}
              isActive={true}
            />
          </div>
        </div>
      </WrapperWithBackground>
      {isOpenCollage && (
        <div ref={collageRef}>
          <FeedPhotosComponents
            title={feedPhotos.title}
            subTitle={feedPhotos.subTitle}
            collage={feedPhotos.collage}
            bottomRef={bottomRef}
            id={""}
          />
        </div>
      )}
    </>
  );
};
