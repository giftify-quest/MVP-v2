import Image from "next/image";
import styles from "./styles.module.scss";
import { useIsMobile } from "@/hooks/useIsMobile";

interface IFramedPhoto {
  imageSrc: string;
  text: string;
}
export const FramedPhoto: React.FC<IFramedPhoto> = ({ imageSrc, text }) => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.wrapper}>
      <Image
        src={imageSrc}
        alt="photo"
        width={isMobile ? 330 : 584}
        height={isMobile ? 200 : 328}
        objectFit="contain"
      />
      <p>{text}</p>
    </div>
  );
};
