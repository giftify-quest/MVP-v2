import Image from "next/image";
import styles from "./styles.module.scss";

interface IFramedPhoto {
  imageSrc: string;
  text: string;
}
export const FramedPhoto: React.FC<IFramedPhoto> = ({ imageSrc, text }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={imageSrc}
        alt="photo"
        width={550}
        height={300}
        objectFit="contain"
      />
      <p>{text}</p>
    </div>
  );
};
