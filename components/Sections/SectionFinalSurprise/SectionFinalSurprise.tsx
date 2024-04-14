import { useState } from "react";
import { OpenFinalSurprise } from "./OpenFinalSurprise/OpenFinalSurprise";
import {
  WisherFinalSurprise,
  WishesFinalSurpriseProps,
} from "./WishesFinalSurprise/WisherFinalSurprise";

interface SectionFinalSurpriseProps {
  wishers: WishesFinalSurpriseProps;
}

export const SectionFinalSurprise: React.FC<SectionFinalSurpriseProps> = () => {
  const [openSlide, setOpenSlide] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        width: "100%",
      }}
    >
      {openSlide ? (
        <>
          <WisherFinalSurprise
            textConfirmButton="Confirm button"
            bgSrc="/assets/bg-answer-with-present.jpg"
            wishers={[
              {
                wisher: "Поздравляю, ты справилась на отлично, как всегда!",
                name: "Timur",
              },
              {
                wisher: "Можешь оторваться от компа и зацеловать меня!",
                name: "Timur",
              },
              {
                wisher: "welcomeHello",
                name: "Timur",
              },
            ]}
          />
        </>
      ) : (
        <OpenFinalSurprise onClick={() => setOpenSlide(true)} />
      )}
    </div>
  );
};
