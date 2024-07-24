import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";

interface IPhotosSection {
  photos: {
    path: string;
  }[];
}

export const PhotosSection: React.FC<IPhotosSection> = ({ photos }) => {
  const [isBlurred, setIsBlurred] = useState(true);

  const handlePhotoClick = () => {
    setIsBlurred(!isBlurred);
  };

  return (
    <div
      className={`${styles.wrapper_photos} ${isBlurred ? "" : styles.unblurred}`}
    >
      {photos.map((photo) => (
        <Image
          key={photo.path}
          src={photo.path}
          alt="photo"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.photos}
          onClick={handlePhotoClick}
        />
      ))}
    </div>
  );
};
