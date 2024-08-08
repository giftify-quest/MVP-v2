import Image from "next/image";
import { useState } from "react";
import ParticleContainer from "./ParticlesBG";
import styles from "./styles.module.scss";

interface IPhotosSection {
  photos: {
    path: string;
  }[];
}

export const PhotosSection: React.FC<IPhotosSection> = ({ photos }) => {
  const [showParticles, setShowParticles] = useState<{
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

  const [blurState, setBlurState] = useState<{
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
    setShowParticles((prev) => ({
      ...prev,
      [path]: false,
    }));
    setBlurState((prev) => ({
      ...prev,
      [path]: false,
    }));
  };

  return (
    <div className={styles.wrapper_photos}>
      {photos.map((photo) => (
        <div key={photo.path} className={styles.photoContainer}>
          <div className={styles.imageWrapper}>
            {showParticles[photo.path] && (
              <div
                className={styles.overlay}
                onClick={() => handlePhotoClick(photo.path)}
              >
                <div className={styles.particlesBackground}>
                  <ParticleContainer id={photo.path} />
                </div>
              </div>
            )}
            <Image
              src={photo.path}
              alt="photo"
              width={0}
              height={0}
              sizes="100vw"
              className={`${styles.photos} ${!blurState[photo.path] ? styles.noBlur : ""}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
