import Image from 'next/image';
import style from './styles.module.scss';

export const ImageForQuestionComponent = ({
  image,
  onChooseVariant,
  isSelected,
  isCorrect,
}: {
  image: { path: string; id: string; width: number; height: number; correct: boolean };
  onChooseVariant: (id: string, correct: boolean, text: string) => void;
  isSelected: boolean;
  isCorrect: boolean;
}) => {

	console.log("isSelected:", isSelected);
	console.log(image.id)
	console.log("isCorrect:", isCorrect);
  return (
    <div 
      className={`${style.imageWrapper} ${isSelected ? style.chosen: ''} ${isCorrect ? style.incorrect : ''}`}
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
