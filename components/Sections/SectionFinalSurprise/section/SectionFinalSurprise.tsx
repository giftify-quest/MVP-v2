import { useState } from "react";
import { OpenFinalSurprise } from "../components/OpenFinalSurprise/OpenFinalSurprise";
import { WisherFinalSurprise } from "../components/WishesFinalSurprise/WisherFinalSurprise";
import styles from "./styles.module.scss";
import { ISectionFinalSurpriseProps } from "../types";
import { SectionTitle } from "@/components/reusableComponent/SectionTitle/SectionTitle";
import { useIsMobile } from "@/hooks/useIsMobile";

export const SectionFinalSurprise: React.FC<ISectionFinalSurpriseProps> = ({
  title,
  wishersData,
  name,
}) => {
  const [openSlide, setOpenSlide] = useState(false);
  const isMobile = useIsMobile();
  return (
    <div className={styles.section}>
      {openSlide ? (
        <>
          <div>
            <SectionTitle
              variant="green"
              mainWord={title.mainWord}
              secondWord={title.secondWord}
            />
          </div>
          <WisherFinalSurprise
            textConfirmButton={wishersData.textConfirmButton}
            bgSrc={wishersData.bgSrc}
            wishers={wishersData.wishers}
            feedPhotos={wishersData.feedPhotos}
            name={name}
            bgMobileSrc={wishersData.bgMobileSrc}
            nextId={wishersData.nextId}
          />
        </>
      ) : (
        <OpenFinalSurprise onClick={() => setOpenSlide(true)} />
      )}
    </div>
  );
};
