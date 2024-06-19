import { ICollage } from "../../types";
import style from "./styles.module.scss";
import PhotoAlbum, { Photo, RenderPhotoProps } from "react-photo-album";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";

const CollageComponents: React.FC<ICollage> = ({ collage }) => {
  const isMobile = useIsMobile();
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

  const photos = collage.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: photo.src,
        width: breakpoint,
        height,
      };
    }),
  }));

  const renderPhoto = ({
    imageProps,
    wrapperStyle,
  }: RenderPhotoProps<Photo>) => (
    <div style={{ ...wrapperStyle, borderRadius: "20px", overflow: "hidden" }}>
      <img
        {...imageProps}
        style={{
          ...imageProps.style,
          borderRadius: "20px",
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );

  return (
    <div className={style.masonryLayout}>
      <PhotoAlbum
        layout="columns"
        spacing={10}
        columns={isMobile ? 2 : 3}
        photos={photos}
        renderPhoto={renderPhoto}
      />
    </div>
  );
};

export default CollageComponents;
