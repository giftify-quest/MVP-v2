import { setFontSizeTextFieldInfo } from "@/helpers/setFontSizeTextFieldInfo";
import styles from "./styles.module.scss";
import classNames from "classnames";

export type TextFieldInfoVariantType = "question" | "errorMessage";

export interface ITextFieldInfo {
  mainText: string;
  variant: TextFieldInfoVariantType;
  secondaryText?: string;
  rotate?: -4.3 | 1.8 | 2.34 | 2.53 | 3.6 | -2.53;
}

export const TextFieldInfo: React.FC<ITextFieldInfo> = ({
  mainText,
  secondaryText,
  variant,
  rotate = 0,
}) => {
  return (
    <div
      style={{ rotate: `${rotate}deg` }}
      className={classNames(styles.wrapper, {
        [styles.question]: variant === "question",
        [styles.error_message]: variant === "errorMessage",
      })}
    >
      <div
        className={styles.main_text}
        style={{ fontSize: `${setFontSizeTextFieldInfo(mainText, variant)}px` }}
      >
        {mainText}
      </div>
      {secondaryText && (
        <div className={styles.secondary_text}>{secondaryText}</div>
      )}
    </div>
  );
};
