import Image from "next/image";
import styles from "./styles.module.scss";
import { useIsMobile } from "@/hooks/useIsMobile";

interface OpenFinalSurpriseProps {
  onClick: () => void;
}

export const OpenFinalSurprise: React.FC<OpenFinalSurpriseProps> = ({
  onClick,
}) => {
  const { isMobile } = useIsMobile();
  return (
    <div className={styles.wrapper}>
      <Image
        src={"/assets/present-image.png"}
        alt="present"
        onClick={onClick}
        width={isMobile ? 334 : 630}
        height={isMobile ? 334 : 630}
        className={styles.image}
        priority
      />
    </div>
  );
};
