"use client";

import { ITitleSection } from "@/types";
import styles from "./styles.module.scss";
import classNames from "classnames";

type Variant = "purple" | "green";
interface ITitleSectionProps extends ITitleSection {
  variant: Variant;
  isFirstQuest?: boolean;
  isMobileTitleSection?: boolean;
}

export const SectionTitle: React.FC<ITitleSectionProps> = ({
  mainWord,
  secondWord,
  variant,
  isFirstQuest,
}) => {
  return (
    <>
      {isFirstQuest ? (
        <>
          <div
            style={{
              fontSize: "60px",
              color: "#b6b5b1",
              fontWeight: "600",
              alignSelf: "center",
            }}
          >
            {secondWord}
          </div>
          <div className={styles.wrapper}>
            <div
              className={classNames(styles.mainWord, {
                [styles.bg_green]: variant === "green",
                [styles.bg_purple]: variant === "purple",
              })}
            >
              <div className={styles.content}>{mainWord}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.wrapper}>
            <div
              className={classNames(styles.mainWord, {
                [styles.bg_green]: variant === "green",
                [styles.bg_purple]: variant === "purple",
              })}
            >
              <div className={styles.content}>{mainWord}</div>
            </div>
            {secondWord && (
              <div className={styles.second_word}>{secondWord}</div>
            )}
          </div>
        </>
      )}
    </>
  );
};
