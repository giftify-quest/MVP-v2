import Image from "next/image";
import styles from "./styles.module.scss";

export const ConfettiIcon = () => {
  return (
    <div className={styles.wrapper_icon}>
      <Image
        src="/assets/confetti.png"
        alt="confetti"
        width={120}
        height={120}
      />
    </div>
  );
};
