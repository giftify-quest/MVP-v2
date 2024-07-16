import Image from "next/image";
import styles from "./styles.module.scss";
import { useIsMobile } from "@/hooks/useIsMobile";

interface IFramedPhoto {
  imageSrc: string;
  text: string;
}
export const FramedPhoto: React.FC<IFramedPhoto> = ({ imageSrc, text }) => {
  const { isMobile } = useIsMobile();
  return (
    <div className={styles.wrapper}>
      <div className={isMobile ? styles.imageMobile : styles.imageDesktop}>
        <Image src={imageSrc} alt="photo" layout="fill" objectFit="contain" />
      </div>
      <p>{text}</p>
    </div>
  );
};
