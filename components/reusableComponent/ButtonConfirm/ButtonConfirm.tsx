import { ButtonMain } from "../ButtonMain/ButtonMain";
import styles from "./styles.module.scss";

interface IButtonConfirm {
  title: string;
  isActive: boolean;
  onClick: () => void;
  isDisabled: boolean;
}

export const ButtonConfirm: React.FC<IButtonConfirm> = ({
  title,
  onClick,
  isActive,
  isDisabled,
}) => {
  return (
    <ButtonMain
      title={title}
      styleButton={[styles.button_confirm, isActive ? styles.active : ""]}
      onClick={onClick}
      isDisabled={isDisabled}
    />
  );
};
