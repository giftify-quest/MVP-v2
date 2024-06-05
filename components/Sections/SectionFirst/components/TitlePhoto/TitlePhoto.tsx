import Image from "next/image";
import styles from "./styles.module.scss";
import { transformDate } from "../../helpers/transformDate";
import { ConfettiIcon } from "@/components/reusableComponent/ConfettiIcon/ConfettiIcon";
import { TitlePhotoProps } from "../../types";

export const TitlePhoto: React.FC<TitlePhotoProps> = ({
  imgSrc,
  dateEvent,
}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.dating_date_minutes}>
          <span>1 051 200 minutes</span>
        </div>
        <div className={styles.dating_date_hours}>
          <span>17 520 hours</span>
        </div>
        <div className={styles.dating_date_days}>
          <span>730 days</span>
        </div>
        <div className={styles.dating_date_years}>
          <span>2 years</span>
        </div>
      </div>
      <Image
        src={imgSrc}
        alt="photo"
        width={0}
        height={0}
        className={styles.photo}
        sizes="100vw"
      />
      <div className={styles.image_confetti}>
        <ConfettiIcon width={124} height={124} />
      </div>
      <div className={styles.wrap_date}>
        {transformDate(dateEvent).map((item) => {
          return <span key={item}>{item}</span>;
        })}
      </div>
    </div>
  );
};
