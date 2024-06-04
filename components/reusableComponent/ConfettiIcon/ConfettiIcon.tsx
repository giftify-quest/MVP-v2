import Image from "next/image";
import styles from "./styles.module.scss";

interface ConfettiIconProps {
  width?: number;
  height?: number;
}

export const ConfettiIcon: React.FC<ConfettiIconProps> = ({
  width = 115,
  height = 115,
}) => {
  return (
    <div className={styles.wrapper_icon}>
      <Image
        src="/assets/confetti.png"
        alt="confetti"
        width={width}
        height={height}
      />
    </div>
  );
};
