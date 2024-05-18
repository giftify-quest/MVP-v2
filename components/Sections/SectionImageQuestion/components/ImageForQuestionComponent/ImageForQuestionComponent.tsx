import Image from "next/image";
import style from "./styles.module.scss";
import { ImageForQuestionComponentProps } from "./types";
import classNames from "classnames";

export const ImageForQuestionComponent: React.FC<
  ImageForQuestionComponentProps
> = ({ image, onChooseVariant, isSelected, isCorrect, position }) => {
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
        width={250}
        height={250}
        className={style.imageWrapper}
      />
    </div>
  );
};
