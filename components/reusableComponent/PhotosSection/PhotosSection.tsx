import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";

interface IPhotosSection {
  photos: {
    path: string;
  }[];
}

export const PhotosSection: React.FC<IPhotosSection> = ({ photos }) => {
  const [blurredImages, setBlurredImages] = useState<{
    [key: string]: boolean;
  }>(
    photos.reduce(
      (acc, photo) => {
        acc[photo.path] = true;
        return acc;
      },
      {} as { [key: string]: boolean },
    ),
  );

  const handlePhotoClick = (path: string) => {
    setBlurredImages((prev) => ({
      ...prev,
      [path]: false,
    }));
  };

  return (
    <div className={styles.wrapper_photos}>
      {photos.map((photo) => (
        <Image
          key={photo.path}
          src={photo.path}
          alt="photo"
          width={0}
          height={0}
          sizes="100vw"
          className={`${styles.photos} ${blurredImages[photo.path] ? styles.blurred : styles.unblurred}`}
          onClick={() => handlePhotoClick(photo.path)}
        />
      ))}
    </div>
  );
};
