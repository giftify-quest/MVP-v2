import { useState, useEffect, useRef } from "react";
import { setFontSizeTextFieldInfo } from "@/helpers/setFontSizeTextFieldInfo";
import Typewriter from "typewriter-effect";
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
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTypingComplete(false);
  }, [mainText]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
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
        })}
        style={{ fontSize: `${setFontSizeTextFieldInfo(mainText, variant)}px` }}
      >
        {isVisible && variant !== "errorMessage" ? (
          <Typewriter
            onInit={(typewriter) => {
              setTimeout(() => {
                typewriter
                  .typeString(mainText)
                  .start()
                  .callFunction(() => {
                    setIsTypingComplete(true);
                  });
              }, 1000);
            }}
            options={{
              autoStart: true,
              loop: false,
              deleteSpeed: 0,
              delay: 1,
            }}
          />
        ) : (
          mainText
        )}
      </div>
      {secondaryText && (
        <div className={styles.secondary_text}>{secondaryText}</div>
      )}
    </div>
  );
};
