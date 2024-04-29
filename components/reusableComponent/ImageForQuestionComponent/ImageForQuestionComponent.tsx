import Image from 'next/image';
import style from './styles.module.scss';
import { ImageForQuestionComponentProps } from './types';

export const ImageForQuestionComponent: React.FC<ImageForQuestionComponentProps> = ({
  image,
  onChooseVariant,
  isSelected,
  isCorrect,
}) => {

  return (
    <div
      className={`${style.imageWrapper} ${isSelected ? style.chosen : ''} ${isCorrect ? style.incorrect : ''}`}
      onClick={() => onChooseVariant(image.id, image.correct, image.path)}
    >
      <Image
        src={image.path}
        alt={'photo'}
        width={image.width}
        height={image.height}
      />
    </div>
  );
};
