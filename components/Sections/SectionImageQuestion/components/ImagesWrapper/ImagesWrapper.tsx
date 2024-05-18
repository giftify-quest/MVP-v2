import { useIsMobile } from "@/hooks/useIsMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Images } from "../../types";
import { ImageForQuestionComponent } from "../ImageForQuestionComponent/ImageForQuestionComponent";
import styles from "./styles.module.scss";

interface ImagesWrapperProps {
  images: Images[];
  handleChooseVariant: (imageId: string, correct: boolean) => void;
  selectedAnswerId: null | string;
  isCorrectAnswer: null | boolean;
}

export const ImagesWrapper: React.FC<ImagesWrapperProps> = ({
  images,
  handleChooseVariant,
  selectedAnswerId,
  isCorrectAnswer,
}) => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        // <div>
        <Swiper
          className={styles.custom_swiper}
          spaceBetween={20}
          slidesPerView={"auto"}
          loop
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            512: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            768: {
              width: 732,
              slidesPerView: 2,
              spaceBetween: 8,
            },
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} style={{ width: "260px" }}>
              <ImageForQuestionComponent
                image={image}
                onChooseVariant={() =>
                  handleChooseVariant(image.id, image.correct)
                }
                isSelected={image.id === selectedAnswerId}
                isCorrect={
                  image.id === selectedAnswerId &&
                  typeof isCorrectAnswer === "boolean" &&
                  !isCorrectAnswer
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // </div>
        <div className={styles.imageContainerDesktop}>
          {images.map((image, index) => (
            <ImageForQuestionComponent
              key={image.id}
              position={index === 0 ? "left" : index === 1 ? "center" : "right"}
              image={image}
              onChooseVariant={() =>
                handleChooseVariant(image.id, image.correct)
              }
              isSelected={image.id === selectedAnswerId}
              isCorrect={
                image.id === selectedAnswerId &&
                typeof isCorrectAnswer === "boolean" &&
                !isCorrectAnswer
              }
            />
          ))}
        </div>
      )}
    </>
  );
};
