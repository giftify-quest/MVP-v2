import Image from "next/image";
import styles from "./styles.module.scss";

interface ConfettiIconProps {
  width?: number;
  height?: number;
}

export const ConfettiIcon: React.FC<ConfettiIconProps> = ({
  width = 65,
  height = 65,
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
