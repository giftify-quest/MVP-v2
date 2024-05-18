export interface ImageForQuestionComponentProps {
  image: {
    path: string;
    id: string;
    width: number;
    height: number;
    correct: boolean;
  };
  onChooseVariant: (id: string, correct: boolean, text: string) => void;
  isSelected: boolean;
  isCorrect: boolean;
  position?: "left" | "center" | "right";
}
