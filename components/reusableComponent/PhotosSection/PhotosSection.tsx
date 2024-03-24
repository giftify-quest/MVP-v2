import Image from "next/image";
import styles from "./styles.module.scss";

interface IPhotosSection {
  photos: {
    path: string;
  }[];
}

export const PhotosSection: React.FC<IPhotosSection> = ({ photos }) => {
  return (
    <div className={styles.wrapper_photos}>
      {photos.map((photo) => {
        return (
          <Image
            key={photo.path}
            src={photo.path}
            alt="photo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className={styles.photos}
            objectFit="cover"
          />
        );
      })}
    </div>
  );
};
