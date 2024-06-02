export interface IQuestionProps {
  onReady: (isCorrect: boolean) => void;
  name: string;
}
