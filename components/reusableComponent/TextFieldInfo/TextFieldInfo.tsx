import { setFontSizeTextFieldInfo } from "@/helpers/setFontSizeTextFieldInfo";
import styles from "./styles.module.scss";
import classNames from "classnames";

export type TextFieldInfoVariantType = "text" | "errorMessage";

export interface ITextFieldInfo {
  mainText: string;
  variant: TextFieldInfoVariantType;
  secondaryText?: string;
  isMobileAnswer?: boolean;
  rotate?: -4.3 | -1.8 | 1.8 | 2.34 | 2.53 | 3.6 | -2.53 | -3.6;
}

export const TextFieldInfo: React.FC<ITextFieldInfo> = ({
  mainText,
  secondaryText,
  variant,
  isMobileAnswer,
  rotate = 0,
}) => {
  return (
    <div
      style={{ rotate: `${rotate}deg` }}
      className={classNames({
        [styles.wrapper_mobile]: isMobileAnswer,
        [styles.wrapper]: !isMobileAnswer,
        [styles.mobile_answer]: isMobileAnswer && variant === "text",
        [styles.question]: !isMobileAnswer && variant === "text",
        [styles.error_message]: variant === "errorMessage",
      })}
    >
      <div
        className={classNames({
          [styles.main_text]: variant === "text",
          [styles.error_message]: variant === "errorMessage",
        })}
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
