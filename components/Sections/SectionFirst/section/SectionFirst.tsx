import { WrapperWithBackground } from "@/components/reusableComponent/WrapperWithBackground/WrapperWithBackground";
import { Title } from "../components/Title/Title";
import { TitlePhoto } from "../components/TitlePhoto/TitlePhoto";
import { ButtonConfirm } from "@/components/reusableComponent/ButtonConfirm/ButtonConfirm";
import Image from "next/image";
import styles from "./styles.module.scss";
import { ISectionFirst, ISectionFirstProps } from "../types";

export const SectionFirst: React.FC<ISectionFirstProps> = ({
  titlePhoto,
  title,
  bgImg,
  buttonTitle,
  onAllowNextSlide,
}) => {
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
      <WrapperWithBackground bgSrc={bgImg}>
        <div className={styles.unlock_wrap}>
          <Image
            src="/assets/section-first/lock.png"
            alt="lock"
            width={380}
            height={380}
            style={{ zIndex: 100 }}
          />
          <ButtonConfirm
            isActive
            title={buttonTitle}
            onClick={() => {
              if (onAllowNextSlide) {
                onAllowNextSlide();
              }
            }}
          />
        </div>
      </WrapperWithBackground>
    </div>
  );
};
