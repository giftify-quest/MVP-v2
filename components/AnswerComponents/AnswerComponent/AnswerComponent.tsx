import { Answer, TAnswerComponent } from "@/types/answer";
import { FC } from "react";
import { AnswerWithPicture } from "../AnswerWithPicture/AnswerWithPicture";
import { AnswerWithOutPicture } from "../AnswerWithOutPicture/AnswerWithOutPicture";

interface AnswerComponentProps {
  answer: TAnswerComponent;
}

export const AnswerComponent: FC<AnswerComponentProps> = ({ answer }) => {
  return renderAnswerComponent({ answer });
};

function renderAnswerComponent({ answer }: AnswerComponentProps) {
  switch (answer.type) {
    case Answer.answerWithPicture: {
      return (
        <AnswerWithPicture
          bgSrc={answer.bgSrc}
          bgMobileSrc={answer.bgMobileSrc}
          successText={answer.successText}
          secondaryText={answer.secondaryText}
          framedPhotoSrc={answer.framedPhotoSrc}
          framedPhotoText={answer.framedPhotoText}
        />
      );
    }
    case Answer.answerWithOutPicture: {
      return (
        <AnswerWithOutPicture
          bgSrc={answer.bgSrc}
          bgMobileSrc={answer.bgMobileSrc}
          successText={answer.successText}
          secondaryText={answer.secondaryText}
        />
      );
    }
    default:
      return;
  }
}
