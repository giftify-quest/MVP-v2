import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface IWrapperWithBackground {
  bgSrc: string;
  bgMobileSrc: string;
  className?: string;
  children: React.ReactNode;
}

export const WrapperWithBackground: React.FC<IWrapperWithBackground> = ({
  bgSrc,
  bgMobileSrc,
  className,
  children,
}) => {
  const { isMobile } = useIsMobile();
  return (
    <div className={classNames(className, styles.wrapper)}>
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
