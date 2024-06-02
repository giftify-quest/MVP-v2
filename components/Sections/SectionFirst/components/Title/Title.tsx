import Image from "next/image";
import styles from "./styles.module.scss";
import { TitleProps } from "../../types";
import { useIsMobile } from "@/hooks/useIsMobile";

export const Title: React.FC<TitleProps> = ({
  mainText,
  secondaryText,
  thirdText,
}) => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.wrapper}>
      <Image
        src="/assets/section-first/section-first-line-heard.png"
        alt="line"
        className={styles.line}
        width={isMobile ? 0 : 250}
        height={isMobile ? 0 : 120}
      />
      <div className={styles.mainText}>{mainText}</div>
      <div className={styles.secondaryText}>{secondaryText}</div>
      <div className={styles.secondaryText}>{thirdText}</div>
      <Image
        src="/assets/pink-heart.png"
        alt="pink-heard"
        width={isMobile ? 0 : 130}
        height={isMobile ? 0 : 110}
        className={styles.pink_heart}
      />
      <Image
        src="/assets/heart.png"
        alt="heard"
        width={isMobile ? 0 : 235}
        height={isMobile ? 0 : 180}
        className={styles.white_heart}
      />
      <div className={styles.line_mobile}>
        <Image
          src="/assets/section-first/line-mobile.png"
          alt="line"
          width={250}
          height={96}
        />
        <div className={styles.block_text}>
          <span>Just scroll down</span>
          <span>and answer the question</span>
        </div>
      </div>
    </div>
  );
};
