import { useIsMobile } from "@/hooks/useIsMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Images } from "../../types";
import { ImageForQuestionComponent } from "../ImageForQuestionComponent/ImageForQuestionComponent";
import styles from "./styles.module.scss";
import classNames from "classnames";

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
  const { isMobile } = useIsMobile();

  return (
    <>
      {isMobile ? (
        <div className={styles.imageContainerMobile}>
          <Swiper
            className={styles.custom_swiper}
            spaceBetween={20}
            slidesPerView={"auto"}
            loop
            modules={[Pagination]}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
              bulletClass: styles.swiper_pagination_bullet,
              bulletActiveClass: styles.swiper_pagination_bullet_active,
            }}
          >
            {images.map((image) => (
              <SwiperSlide
                key={image.id}
                style={{ width: "270px", marginTop: "15px" }}
              >
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
          <div className={styles.wrapper_pagination}>
            <div
              className={classNames("swiper-pagination", styles.pagination)}
            ></div>
          </div>
        </div>
      ) : (
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
