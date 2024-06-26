import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import styles from "./styles.module.scss";

interface IWrapperWithBackground {
  bgSrc: string;
  bgMobileSrc: string;
  children: React.ReactNode;
}

export const WrapperWithBackground: React.FC<IWrapperWithBackground> = ({
  bgSrc,
  bgMobileSrc,
  children,
}) => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.wrapper}>
      <Image
        src={isMobile ? bgMobileSrc : bgSrc}
        alt="background"
        fill
        className={styles.bg_img}
        object-fit="cover"
      />
      {children}
    </div>
  );
};
