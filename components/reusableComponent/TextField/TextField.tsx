import classNames from "classnames";
import styles from "./styles.module.scss";
import { ChangeEvent, KeyboardEvent } from "react";
import { Language } from "@/types";

interface ITextField {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  placeholder?: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  lang: Language;
}

export const TextField: React.FC<ITextField> = ({
  value,
  onChange,
  isError,
  placeholder,
  onKeyDown,
  lang,
}) => {
  const text = lang === Language.eng ? "Your answer" : "Твой ответ";
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      placeholder={placeholder || text}
      className={classNames(styles.input, {
        [styles.error_input]: isError,
      })}
      onKeyDown={onKeyDown}
    />
  );
};
