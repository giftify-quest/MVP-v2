
import style from './styles.module.scss';
import PhotoAlbum from "react-photo-album";



interface CollageInterface {
  collage: {
    id:string,
    src:string,
    width:number,
    height:number
  }[]
}

const Collage:React.FC<CollageInterface> = ({ collage }) => {

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


  return (
    <div className={style.masonryLayout}>
      <PhotoAlbum layout="columns" spacing={10} columns={3} photos={collage} />
    </div>
  );
};


export default Collage;
