import Image from "next/image";
import styles from "./styles.module.scss";
import { TitleProps } from "../../types";

export const Title: React.FC<TitleProps> = ({
  mainText,
  secondaryText,
  thirdText,
}) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/assets/section-first/section-first-line-heard.png"
        alt="line"
        width={250}
        height={120}
      />
      <div className={styles.mainText}>{mainText}</div>
      <div className={styles.secondaryText}>{secondaryText}</div>
      <div className={styles.secondaryText}>{thirdText}</div>
      <Image
        src="/assets/pink-heart.png"
        alt="pink-heard"
        width={130}
        height={110}
        className={styles.pink_heart}
      />
      <Image
        src="/assets/heart.png"
        alt="heard"
        width={235}
        height={180}
        className={styles.white_heart}
      />
    </div>
  );
};
