import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useState } from "react";

interface IWrapperWithBackground {
  bgSrc: string;
  bgMobileSrc: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
}

export const WrapperWithBackground: React.FC<IWrapperWithBackground> = ({
  bgSrc,
  bgMobileSrc,
  className,
  children,
  fullHeight = false,
}) => {
  const { isMobile, isChecking } = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);

  if (isChecking) {
    return null;
  }

  return (
    <div
      className={classNames(className, styles.wrapper, {
        [styles.fullHeight]: fullHeight,
      })}
    >
      <Image
        src={isMobile ? bgMobileSrc : bgSrc}
        alt="background"
        fill
        className={classNames(styles.bg_img, {
          [styles.bg_img_loaded]: isLoaded,
        })}
        objectFit="cover"
        onLoadingComplete={() => setIsLoaded(true)}
      />
      {children}
    </div>
  );
};
