import { Variant } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import { ITitleSection } from "@/types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Image from "next/image";
import heartOutlineBold from "@/public/assets/heart-outline-bold.png";
import heartGreen from "@/public/assets/heart-green.png";
import heartPurple from "@/public/assets/heart-purple.png";

interface ITitleFeedPhotosComponent extends ITitleSection {
  variant: Variant;
}

export const TitleFeedPhotosComponent: React.FC<ITitleFeedPhotosComponent> = ({
  mainWord,
  secondWord,
  variant,
}) => {
  return (
    <div className={styles.wrapper}>
      {secondWord && <div className={styles.second_word}>{secondWord}</div>}
      <div
        className={classNames(styles.mainWord, {
          [styles.bg_green]: variant === "green",
          [styles.bg_purple]: variant === "purple",
        })}
      >
        <div className={styles.content}>{mainWord}</div>
      </div>
      <div className={styles.blockImages}>
        <div className={styles.emoji_1}>
          <Image src={heartGreen} alt={"emoji"} width={70} />
        </div>
        <div className={styles.emoji_2}>
          <Image src={heartPurple} alt={"emoji"} width={70} />
        </div>
        <div className={styles.emoji_3}>
          <Image src={heartOutlineBold} alt={"emoji"} width={45} />
        </div>
        <div className={styles.emoji_4}>
          <Image src={heartOutlineBold} alt={"emoji"} width={50} />
        </div>
        <div className={styles.emoji_5}>
          <Image src={heartOutlineBold} alt={"emoji"} width={25} />
        </div>
        <div className={styles.emoji_6}>
          <Image src={heartOutlineBold} alt={"emoji"} width={35} />
        </div>
      </div>
    </div>
  );
};
