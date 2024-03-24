import classNames from "classnames";
import styles from "./styles.module.scss";

interface IButtonMain {
  title: string;
  styleButton?: string[];
  onClick: () => void;
  name?: string;
  isDisabled?: boolean;
}

export const ButtonMain: React.FC<IButtonMain> = ({
  title,
  styleButton,
  onClick,
  name,
  isDisabled,
}) => {
  return (
    <button
      type="button"
      className={classNames(styles.button_main, styleButton)}
      onClick={onClick}
      name={name}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};
