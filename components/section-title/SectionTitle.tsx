"use client";

import styles from "./style.module.scss";
import classNames from "classnames";

type Variant = "purple" | "green";
interface ISectionTitle {
  mainWord: string;
  secondWord?: string;
  variant: Variant;
}

export const SectionTitle: React.FC<ISectionTitle> = ({
  mainWord,
  secondWord,
  variant,
}) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.mainWord, {
          [styles.bg_green]: variant === "green",
          [styles.bg_purple]: variant === "purple",
        })}
      >
        <div className={styles.content}>{mainWord}</div>
      </div>
      {secondWord && <div className={styles.second_word}>{secondWord}</div>}
    </div>
  );
};
