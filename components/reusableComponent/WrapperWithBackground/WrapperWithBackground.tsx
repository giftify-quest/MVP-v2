import styles from "./styles.module.scss";
import Image from "next/image";

interface IWrapperWithBackground {
  bgSrc: string;
  children: React.ReactNode;
}

export const WrapperWithBackground: React.FC<IWrapperWithBackground> = ({
  bgSrc,
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={bgSrc}
        alt="background"
        fill
        className={styles.bg_img}
        object-fit="cover"
      />
      {children}
    </div>
  );
};
