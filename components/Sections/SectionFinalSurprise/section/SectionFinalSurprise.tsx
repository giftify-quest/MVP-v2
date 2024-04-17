import { useState } from "react";
import { OpenFinalSurprise } from "../components/OpenFinalSurprise/OpenFinalSurprise";
import { WisherFinalSurprise } from "../components/WishesFinalSurprise/WisherFinalSurprise";
import styles from "./styles.module.scss";
import { ISectionFinalSurprise } from "../types";
import { SectionTitle } from "@/components/reusableComponent/section-title/SectionTitle";

export const SectionFinalSurprise: React.FC<ISectionFinalSurprise> = ({
  title,
  wishersData,
}) => {
  const [openSlide, setOpenSlide] = useState(false);
  return (
    <div className={styles.section}>
      {openSlide ? (
        <>
          <SectionTitle
            variant="green"
            mainWord={title.mainWord}
            secondWord={title.secondWord}
          />
          <WisherFinalSurprise
            textConfirmButton={wishersData.textConfirmButton}
            bgSrc={wishersData.bgSrc}
            wishers={wishersData.wishers}
            feedPhotos={wishersData.feedPhotos}
          />
        </>
      ) : (
        <OpenFinalSurprise onClick={() => setOpenSlide(true)} />
      )}
    </div>
  );
};
