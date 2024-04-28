export interface IQuestionProps {
  onReady: () => void;
  name: string;
  onAllowNextSlide?: () => void;
}