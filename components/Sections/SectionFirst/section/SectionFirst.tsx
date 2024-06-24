import { WrapperWithBackground } from "@/components/reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { Title } from "../components/Title/Title";
import { TitlePhoto } from "../components/TitlePhoto/TitlePhoto";
import { ButtonConfirm } from "@/components/reusableComponent/ButtonConfirm/ButtonConfirm";
import Image from "next/image";
import styles from "./styles.module.scss";
import { ISectionFirstProps } from "../types";
import { useIsMobile } from "@/hooks/useIsMobile";

export const SectionFirst: React.FC<ISectionFirstProps> = ({
  titlePhoto,
  title,
  bgImg,
  buttonTitle,
  onAllowNextSlide,
  bgMobileSrc,
  id,
  nextId,
}) => {
  const { isMobile, isChecking } = useIsMobile();

  const handleClick = () => {
    if (onAllowNextSlide) {
      onAllowNextSlide();
    }
    setTimeout(() => {
      const variantElement = document.getElementById(nextId);
      variantElement?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (isChecking) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title_section}>
        <TitlePhoto
          imgSrc={titlePhoto.imgSrc}
          dateEvent={titlePhoto.dateEvent}
        />
        <Title
          mainText={title.mainText}
          secondaryText={title.secondaryText}
          thirdText={title.thirdText}
        />
      </div>
      <WrapperWithBackground
        className={styles.sectionFirstWrapper}
        bgSrc={bgImg}
        bgMobileSrc={bgMobileSrc}
      >
        <div className={styles.unlock_wrap}>
          <Image
            src="/assets/section-first/lock.png"
            alt="lock"
            width={isMobile ? 261 : 380}
            height={isMobile ? 261 : 380}
          />
          <ButtonConfirm isActive title={buttonTitle} onClick={handleClick} />
        </div>
      </WrapperWithBackground>
    </div>
  );
};
