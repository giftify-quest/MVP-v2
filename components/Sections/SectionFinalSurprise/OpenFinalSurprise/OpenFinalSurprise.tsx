import Image from "next/image";
import styles from "./styles.module.scss";

interface OpenFinalSurpriseProps {
  onClick: () => void;
}

export const OpenFinalSurprise: React.FC<OpenFinalSurpriseProps> = ({
  onClick,
}) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={"/assets/present-image.png"}
        alt="present"
        onClick={onClick}
        width={630}
        height={630}
        className={styles.image}
        priority
      />
    </div>
  );
};
