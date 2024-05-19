import { Images } from "../../../types";

export interface ImageForQuestionComponentProps {
  image: Images;
  onChooseVariant: (id: string, correct: boolean, text: string) => void;
  isSelected: boolean;
  isCorrect: boolean;
  position?: "left" | "center" | "right";
}
