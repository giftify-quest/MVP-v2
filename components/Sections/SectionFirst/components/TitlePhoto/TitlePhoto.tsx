import Image from "next/image";
import styles from "./styles.module.scss";
import { transformDate } from "../../helpers/transformDate";
import { ConfettiIcon } from "@/components/reusableComponent/ConfettiIcon/ConfettiIcon";
import { TitlePhotoProps } from "../../types";

const calculateTimeValues = (years: number) => {
  const days = Math.floor(years * 365);
  const hours = days * 24;
  const minutes = hours * 60;

  return {
    days,
    hours,
    minutes,
    yearsLabel: years === 1 ? `${years} year` : `${years} years`,
  };
};

export const TitlePhoto: React.FC<TitlePhotoProps> = ({
  imgSrc,
  dateEvent,
  dateYears,
}) => {
  const shouldShowCircles = !!dateYears && parseFloat(dateYears) > 0;

  const { days, hours, minutes, yearsLabel } = shouldShowCircles
    ? calculateTimeValues(parseFloat(dateYears))
    : { days: 0, hours: 0, minutes: 0, yearsLabel: "" };

  return (
    <div className={styles.wrapper}>
      <div>
        {shouldShowCircles && (
          <>
            <div className={styles.dating_date_minutes}>
              <span>{minutes} minutes</span>
            </div>
            <div className={styles.dating_date_hours}>
              <span>{hours} hours</span>
            </div>
            <div className={styles.dating_date_days}>
              <span>{days} days</span>
            </div>
            <div className={styles.dating_date_years}>
              <span>{yearsLabel}</span>
            </div>
          </>
        )}
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
        <ConfettiIcon width={90} height={90} />
      </div>
      <div className={styles.wrap_date}>
        {transformDate(dateEvent).map((item) => {
          return <span key={item}>{item}</span>;
        })}
      </div>
    </div>
  );
};
