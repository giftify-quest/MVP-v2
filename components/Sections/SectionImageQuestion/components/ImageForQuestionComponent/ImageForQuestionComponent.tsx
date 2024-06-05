import Image from "next/image";
import style from "./styles.module.scss";
import { ImageForQuestionComponentProps } from "./types";
import classNames from "classnames";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useEffect } from "react";

export const ImageForQuestionComponent: React.FC<
  ImageForQuestionComponentProps
> = ({ image, onChooseVariant, isSelected, isCorrect, position }) => {
  const isMobile = useIsMobile();
  useEffect(() => {
    if (isSelected && isCorrect) {
      const timer = setTimeout(() => {
        onChooseVariant(image.id, image.correct, image.path);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSelected, isCorrect, image, onChooseVariant]);
  return (
    <div
      className={classNames(style.container, {
        [style.chosen]: isSelected,
        [style.incorrect]: isCorrect,
        [style.rotate_center]: position === "center",
        [style.rotate_left]: position === "left",
        [style.rotate_right]: position === "right",
      })}
      onClick={() => onChooseVariant(image.id, image.correct, image.path)}
    >
      <Image
        src={image.path}
        alt={"photo"}
        width={isMobile ? 250 : 300}
        height={isMobile ? 250 : 340}
        className={style.imageWrapper}
      />
    </div>
  );
};
