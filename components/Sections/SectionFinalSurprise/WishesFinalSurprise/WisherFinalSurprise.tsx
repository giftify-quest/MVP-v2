import { TextFieldInfo } from "@/components/reusableComponent/TextFieldInfo/TextFieldInfo";
import { WrapperWithBackground } from "@/components/reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";
import styles from "./styles.module.scss";
import { ButtonConfirm } from "@/components/reusableComponent/ButtonConfirm/ButtonConfirm";
import { useEffect, useRef, useState } from "react";

export interface WishesFinalSurpriseProps {
  bgSrc: string;
  wishers: {
    wisher: string;
    name: string;
  }[];
  textConfirmButton: string;
}

export const WisherFinalSurprise: React.FC<WishesFinalSurpriseProps> = ({
  bgSrc,
  wishers,
  textConfirmButton,
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
      <SectionTitle variant="green" mainWord="Final Surprise" />
      <audio ref={audioRef} src="/assets/music/musicLove.mp3" autoPlay></audio>
      <WrapperWithBackground bgSrc={bgSrc}>
        <div
          // DELETE
          style={{
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            height: "85%",
            gap: "100px",
          }}
        >
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
      {isOpenCollage && <div>Collage</div>}
    </>
  );
};
