import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { WrapperWithBackground } from "@/components/reusableComponent/WrapperWithBackground/WrapperWithBackground";
import styles from "./styles.module.scss";
import { ButtonConfirm } from "@/components/reusableComponent/ButtonConfirm/ButtonConfirm";
import { useEffect, useRef, useState } from "react";
import { FeedPhotosComponents } from "../FeedPhotosComponent/FeedPhotoSection";
import { IWishesFinalSurprise } from "../../types";

export const WisherFinalSurprise: React.FC<IWishesFinalSurprise> = ({
  bgSrc,
  wishers,
  textConfirmButton,
  feedPhotos,
}) => {
  const [isOpenCollage, setIsOpenCollage] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);
  return (
    <>
      <audio ref={audioRef} src="/assets/music/musicLove.mp3" autoPlay></audio>
      <WrapperWithBackground bgSrc={bgSrc}>
        <div className={styles.wrapper}>
          <div className={styles.wrap_wishers}>
            {wishers.map((wisher) => (
              <TextFieldInfo
                key={wisher.wisher}
                variant="text"
                mainText={wisher.wisher}
                secondaryText={wisher.name}
                rotate={-3.6}
              />
            ))}
          </div>
          <ButtonConfirm
            title={textConfirmButton}
            onClick={() => setIsOpenCollage(true)}
            isActive={true}
          />
        </div>
      </WrapperWithBackground>
      {isOpenCollage && (
        <FeedPhotosComponents
          title={feedPhotos.title}
          subTitle={feedPhotos.subTitle}
          collage={feedPhotos.collage}
        />
      )}
    </>
  );
};
