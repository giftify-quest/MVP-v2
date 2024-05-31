import classNames from "classnames";
import styles from "./styles.module.scss";
import { ChangeEvent, KeyboardEvent } from "react";

interface ITextField {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  placeholder?: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<ITextField> = ({
  value,
  onChange,
  isError,
  placeholder = "Your answer",
  onKeyDown,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      className={classNames(styles.input, {
        [styles.error_input]: isError,
      })}
      onKeyDown={onKeyDown}
    />
  );
};
